const uuidv1 = require('uuid/v1')

export const state = () => ({
  counter: 0,
  newDialog: false,
  editDialog: false,
  editDialogShapeId: null,
  shapes: [

  ],
})


export const mutations = {
  increment(state) {
    state.counter++
  },

  addShape(state, { shape }) {
    const completedShape = completeShape(shape)
    completedShape.uuid = uuidv1()
    state.shapes = [...state.shapes, completedShape]
  },

  newShape(state) {
    state.newDialog = true
  },

  editShape(state, { shapeName }) {
    state.editDialogShapeId = shapeName
    state.editDialog = true
  },

  updateShape(state, { shape }) {
    const completedShape = completeShape(shape)
    const updatedShapeIndex = state.shapes.findIndex( _ => _.uuid === shape.uuid)
    state.shapes = [
      ...state.shapes.slice(0, updatedShapeIndex),
      completedShape,
      ...state.shapes.slice(updatedShapeIndex + 1),
    ]
  },

  closeEditDialog(state) {
    state.editDialogShapeId = null
    state.editDialog = false
  },

  closeNewDialog(state) {
    state.newDialog = false
  }
}

const completeShape = (shape) => {
  const {points, minXPoint, minYPoint, maxXPoint, maxYPoint} = getPointsFromPath(shape.path)
  const pointsText = flattenPoints(points)
  const viewport = { x1: minXPoint, y1: minYPoint, x2: maxXPoint - minXPoint, y2: maxYPoint - minYPoint}
  const analizedShape = {
    ...shape,
    points,
    pointsText,
    viewport,
  }
  return analizedShape
}

const flattenPoints = (points) => {
  return points.map( _ => _.join('px ')+'px').join(', ')
}

const mapValue = (value, maxValue) => {
  return Math.round((value / maxValue) * 10000) / 100
}

const getTotalLength = (path) => {
  return Math.floor(path.getTotalLength())
}

const getPointAtPercentage = (percentage, path) => {
  const maxLength = getTotalLength(path)
  const length = (percentage * maxLength) / 100
  return path.getPointAtLength(length)
}

const getMaxPoint = (points) => {
  return points.reduce((acc, actual) => Math.max(acc, Math.max(actual[0], actual[1])), 0)
}

const getMinPoint = (points) => {
  return points.reduce((acc, actual) => Math.min(acc, Math.min(actual[0], actual[1])), 0)
}

const getMinXPoint = (points) => {
  return points.reduce((acc, actual) => Math.min(acc, actual[0]), Infinity)
}

const getMinYPoint = (points) => {
  return points.reduce((acc, actual) => Math.min(acc, actual[1]), Infinity)
}

const getMaxXPoint = (points) => {
  return points.reduce((acc, actual) => Math.max(acc, actual[0]), -Infinity)
}

const getMaxYPoint = (points) => {
  return points.reduce((acc, actual) => Math.max(acc, actual[1]), -Infinity)
}

const getMinOfMaxPoint = (points) => {
  return getMaxPoint(points) == getMaxXPoint(points) ? getMinXPoint(points) : getMinYPoint(points)
}

const getPointsFromPath = (stringPath) => {
  const path = document.createElementNS('http://www.w3.org/2000/svg','path')
  path.setAttribute('d', stringPath)

  const tmpPoints = []
  const steps = 300
  const shift = 0
  const reverse = false

  for (let i = 0; i <= steps; i++) {
    let percentage = (i + shift * steps) * 100 / steps

    while (percentage > 100) {
      percentage = percentage - (percentage > 100 ? 100 : 0)
    }

    const svgPoints = getPointAtPercentage(reverse ? 100 - percentage : percentage, path)

    const px = Math.round(svgPoints.x * 100) / 100
    const py = Math.round(svgPoints.y * 100) / 100

    tmpPoints.push([px, py])
  }

  const minXPoint = getMinXPoint(tmpPoints)
  const minYPoint = getMinYPoint(tmpPoints)
  const maxXPoint = getMaxXPoint(tmpPoints)
  const maxYPoint = getMaxYPoint(tmpPoints)

  const noPaddingPoints = tmpPoints.map(_ => [_[0] - minXPoint, _[1] - minYPoint])

  const maxPoint = getMaxPoint(noPaddingPoints)
  // const points = noPaddingPoints.map(_ => [mapValue(_[0], maxPoint), mapValue(_[1], maxPoint)])
  const points = noPaddingPoints
  return { minXPoint, minYPoint, maxXPoint, maxYPoint, points }
}
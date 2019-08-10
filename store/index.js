export const state = () => ({
  counter: 0,
  shapes: [

  ],
})


export const mutations = {
  increment(state) {
    state.counter++
  },

  addShape(state, { shape }) {
    const completedShape = completeShape(shape)
    state.shapes = [...state.shapes, completedShape]
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
  return points.map( _ => _.join(' ')).join(', ')
}

const mapValue = (value, maxValue) => {
  return Math.floor(value / maxValue * 10000) / 100
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

const getPointsFromPath = (stringPath) => {
  const path = document.createElementNS('http://www.w3.org/2000/svg','path')
        path.setAttribute('d', stringPath)

  const tmpPoints = []
  const steps = 100
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

  const maxPoint = getMaxPoint(tmpPoints)
  const minXPoint = getMinXPoint(tmpPoints)
  const minYPoint = getMinYPoint(tmpPoints)
  const maxXPoint = getMaxXPoint(tmpPoints)
  const maxYPoint = getMaxYPoint(tmpPoints)
  const points = tmpPoints.map(_ => [mapValue(_[0] - minXPoint, maxPoint), mapValue(_[1] - minYPoint, maxPoint)])
  return { maxPoint, minXPoint, minYPoint, maxXPoint, maxYPoint, points }
}
<template>
  <div class="viewport-container">
    <div class="viewport" ref="viewport" :style="`width: ${width}%; height: ${height}%`">
      <div class="shape" v-for="clipPath in clipPaths" :style="`clip-path: polygon(${clipPath});`"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: { "deviceWidth": Number, "deviceHeight": Number },
  computed: {
    pixelScale() {
      return this.deviceWidth >= this.deviceHeight ? 500 / this.deviceWidth  : 500 / this.deviceHeight
    },
    clipPaths() {
      return this.$store.state.shapes
        .filter( _ => _.visible)
        .map( _ => this.scalePoints(_.points, this.pixelScale) )
    },
    height() {
      return this.deviceWidth >= this.deviceHeight ? this.maxWidth * (this.deviceHeight / this.deviceWidth) : this.maxHeight
      },
    width() {
      return this.deviceWidth >= this.deviceHeight ? this.maxWidth : this.maxHeight * (this.deviceWidth / this.deviceHeight)
    }
  },
  data() {
    return {
      maxWidth: 100,
      maxHeight: 100,
    }
  },
  methods: {
    scalePoints(points, scale) {
      const tmpPoints = points.map( _ => [Math.round(_[0] * scale * 100) / 100, Math.round(_[1] * scale * 100) / 100 ])
      return tmpPoints.map( _ => _.join('px ') + 'px').join(', ')
    }
  }
}
</script>

<style lang="scss" scoped>
  .viewport-container {
    width: 500px;
    height: 500px;
    background: whitesmoke;
    position: relative;
    // border: 10px solid whitesmoke;

    .viewport {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      background: white;

      .shape {
        background: red;
        opacity: 0.5;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
</style>

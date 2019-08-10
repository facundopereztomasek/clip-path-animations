<template>
  <div class="viewport" ref="viewport" @click="addShape">
    <v-flex xs12 sm12 md12>
      <v-card v-for="shape in shapes" flat>
          <v-layout row wrap px-3>
            <v-flex xs2 sm2 md2>
              <v-flex xs12 sm12 md12 pr-4>
                <svg class="shape-preview" width="100%" height="100%" v-bind:viewBox="`${shape.viewport.x1} ${shape.viewport.y1} ${shape.viewport.x2} ${shape.viewport.y2}`">
                  <path v-bind:d="shape.path"></path>
                </svg>
              </v-flex>
            </v-flex>
            <v-flex xs10 sm10 md10>
              <v-layout>
                <v-flex xs3 sm3 md3>
                  <div class="caption grey--text">Name</div>
                  {{ shape.name }}
                </v-flex>
                <v-flex xs9 sm9 md9>
                  <div class="caption grey--text">SVG</div>
                  {{ shape.path }}
                </v-flex>
              </v-layout>
              <v-layout justify-end>
                <v-flex xs9 sm9 md9>
                  <div class="caption grey--text">Points</div>
                  {{ shape.pointsText }}
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
          <v-divider class="my-2"></v-divider>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  mounted() {
    this.addShape({
      name: 'The Shape',
      path: 'M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5z',
      points: [[10,3],[3,22],[3,9]],
      pointsText: '10 3, 3 22, 3 9',
      viewport: {
        x1: 8,
        y1: 10,
        x2: 28,
        y2: 28,
      }
    })
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    addShape(shape) {
      this.$store.commit('addShape', { shape })
    },
  },
  computed: {
    counter() {
      return this.$store.state.counter
    },
    shapes() {
      return this.$store.state.shapes
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .shape-preview {
    display: inline-block;
    width: 100%;
  }
</style>

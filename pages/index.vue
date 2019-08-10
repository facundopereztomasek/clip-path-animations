<template>
  <v-layout
    row
  >
    <v-flex xs12 sm3 md3 pa-2>
      <v-card>
        <v-card-title primary-title>
          Shapes preview
        </v-card-title>
        <v-card-text>
          <v-flex xs12 sm12 md12>
            <viewport></viewport>
          </v-flex>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 sm9 md9 pa-2>
      <v-card>
        <v-card-title primary-title>
          Shapes list
        </v-card-title>
        <v-card-text>
          <shapesList></shapesList>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Viewport from '~/components/Viewport.vue'
import ShapesList from '~/components/ShapesList.vue'

export default {
  components: {
    Viewport,
    ShapesList,
  }
}
</script>

<style lang="scss" scoped>

</style>


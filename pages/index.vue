<template>
  <v-layout
    column
    justify-center
  >
    <v-flex xs12 sm8 md6>
      <v-flex xs12 sm4 md4>
        <v-card>
          <v-card-title primary-title>
            Shapes preview
          </v-card-title>
          <v-card-text>
            <v-flex xs12 sm12 md12>
              <div class="viewport" ref="viewport"></div>
            </v-flex>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>

<style lang="scss" scoped>
  .viewport {
    width: 100%;
    height: 200px;
    background: whitesmoke;
  }
</style>


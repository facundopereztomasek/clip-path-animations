<template>
  <v-layout row >
    <v-flex xs12 sm9 md9 pa-2>
      <v-card>
        <v-flex xs12 sm12 md12 >
          <v-card-title primary-title>

            <v-flex xs3 sm3 md3>
              Shapes preview
            </v-flex>
            <v-flex xs2 sm2 md2>
              <v-row class="device-dimention">
                <v-flex xs5 sm5 md5>
                  <input type="text" class="device-dimention-input" v-model="deviceWidth">
                </v-flex>
                <v-flex xs2 sm2 md2>
                  <span class="device-dimention-x">x</span>
                </v-flex>
                <v-flex xs5 sm5 md5>
                  <input type="text" class="device-dimention-input" v-model="deviceHeight">
                </v-flex>
              </v-row>
            </v-flex>
          </v-card-title>
        </v-flex>
        <v-card-text>
          <v-flex xs12 sm12 md12>
            <viewport :deviceWidth="+deviceWidth" :deviceHeight="+deviceHeight"></viewport>
          </v-flex>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 sm3 md3 pa-2>
      <shapes-list></shapes-list>
    </v-flex>

    <edit-dialog v-if="editDialog" :shape="editDialogShape"></edit-dialog>
    <new-dialog v-if="newDialog"></new-dialog>
  </v-layout>
</template>

<script>
import Viewport from '~/components/Viewport.vue'
import ShapesList from '~/components/ShapesList.vue'
import NewDialog from '~/components/NewDialog.vue'
import EditDialog from '~/components/EditDialog.vue'

export default {
  components: {
    Viewport,
    ShapesList,
    NewDialog,
    EditDialog,
  },
  computed: {
    deviceRatio() {
      return this.deviceWidth/this.deviceHeight
    },
    editDialogShape() {
      return this.$store.state.shapes.find( _ => _.uuid === this.editDialogShapeId)
    },
    editDialogShapeId() {
      return this.$store.state.editDialogShapeId
    },
    editDialog() {
      return this.$store.state.editDialog
    },
    newDialog() {
      return this.$store.state.newDialog
    }
  },
  data() {
    return {
      deviceWidth: 800,
      deviceHeight: 1200,
    }
  }
}
</script>

<style lang="scss" scoped>
  .device-dimention {
    background: whitesmoke;
  }
  .device-dimention-input {
    text-align: center;
    width: 100%;
  }
  .device-dimention-x {
    text-align: center;
    width: 100%;
    display: inline-block;
  }
</style>


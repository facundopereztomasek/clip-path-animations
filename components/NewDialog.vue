<template>
<v-dialog
  v-model="newDialog"
  fullscreen
  hide-overlay
  transition="dialog-bottom-transition"
  scrollable
  v-if="newShape"
>
  <v-card tile>
    <v-toolbar flat dark color="primary">
      <v-btn icon dark @click="closeDialog">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Settings</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-toolbar-items>
        <v-btn dark text @click="addShape">Save</v-btn>
      </v-toolbar-items>

    </v-toolbar>
    <v-card-text>
      <v-list three-line subheader>
        <v-subheader>Shape</v-subheader>
        <v-list-item>
          <v-list-item-content>
            <v-text-field
              v-model="newShape.name"
              color="teal"
            >
              <template v-slot:label>
                <div>Name</div>
              </template>
            </v-text-field>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-text-field
              v-model="newShape.path"
              color="teal"
            >
              <template v-slot:label>
                <div>Path</div>
              </template>
            </v-text-field>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
    <div style="flex: 1 1 auto;"></div>
  </v-card>
</v-dialog>
</template>

<script>

export default {
  methods: {
    closeDialog() {
      this.$store.commit('closeDialog')
    },
    addShape() {
      const shape = this.newShape
      this.$store.commit('addShape', { shape })
      this.$store.commit('closeNewDialog')
    }
  },
  computed: {
    newDialog() {
      return this.$store.state.newDialog
    }
  },
  data() {
    return {
      newShape: {}
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

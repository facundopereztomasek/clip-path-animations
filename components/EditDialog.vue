<template>
<v-dialog
  v-model="editDialog"
  fullscreen
  hide-overlay
  transition="dialog-bottom-transition"
  scrollable
>
  <v-card tile>
    <v-toolbar flat dark color="primary">
      <v-btn icon dark @click="closeDialog">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Settings</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-toolbar-items>
        <v-btn dark text @click="updateShape">Save</v-btn>
      </v-toolbar-items>

    </v-toolbar>
    <v-card-text>
      <v-list three-line subheader>
        <v-subheader>Shape</v-subheader>
        <v-list-item>
          <v-list-item-content>
            <v-text-field
              v-model="updatedShape.name"
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
              v-model="updatedShape.path"
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
  props: ['shape'],
  methods: {
    closeDialog() {
      this.$store.commit('closeDialog')
    },
    updateShape() {
      const shape = this.updatedShape
      this.$store.commit('updateShape', { shape })
      this.$store.commit('closeEditDialog')
    }
  },
  computed: {
    editDialog() {
      return this.$store.state.editDialog
    }
  },
  data() {
    return {
      updatedShape: { ...this.shape }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

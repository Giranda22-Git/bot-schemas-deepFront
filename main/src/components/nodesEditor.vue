<template>
  <div class="nodesEditor_wrapper">
    <VJsoneditor class="editor" :options="{ mode: 'code' }" v-model="json" :plus="false" @error="onEditorError" />
  </div>
</template>

<script>
import VJsoneditor from 'v-jsoneditor'
import EventBus from '@/components/EventBus.js'

export default {
  name: "nodesEditor",
  data: () => ({
    json: {}
  }),
  mounted () {
    EventBus.$on('newNode', val => {
      this.json = val
    })
  },
  components: {
    VJsoneditor
  },
  methods: {
    onEditorError (err) {
      alert('Editor error: ' + err)
    }
  }
}
</script>

<style lang="sass" scoped>
.nodesEditor_wrapper
  width: 100%
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  .editor
    width: 80% !important
    height: 98% !important
    border: 1px solid red
</style>
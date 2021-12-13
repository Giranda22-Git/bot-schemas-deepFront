<template>
  <div class="patternsBar_main_wrapper" v-if="$route.query.bot">
    <div class="patterns_wrapper">
      <div
        v-for="pattern in $options.importData.patterns"
        class="pattern"
        :key="pattern.name"
        @click="getNodes($route.query.bot, pattern.getEndPoint)"
      >
        {{ pattern.name }}
      </div>
    </div>

    <div class="nodes_wrapper">
      <div class="node"
        v-for="node in currentNodes"
        :key="node._id"
        @click="updateNode(node)"
      >
        {{ node.name }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import importData from '@/settings/importData.json'
import EventBus from '@/components/EventBus.js'

export default {
  name: "patternsBar",
  importData,
  data: () => ({
    currentNodes: []
  }),
  mounted () {
  },
  methods: {
    updateNode (node) {
      EventBus.$emit('newNode', node)
    },
    async getNodes (url, endPoint) {
      try {
        const response = await axios.get(url + endPoint)
        this.currentNodes = response.data
      }
      catch (err) {
        alert('error, server is dead\n\n' + err)
        console.log(err)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.patternsBar_main_wrapper
  width: 450px
  height: 100vh
  display: flex
  border: 1px solid black
  .patterns_wrapper
    width: 200px
    height: 100%
    overflow: auto
    border: 1px solid red
    .pattern
      width: 100%
      height: 70px
      display: flex
      justify-content: flex-start
      align-items: center
      cursor: pointer
      font-size: 1.2em
      font-family: sans-serif
      padding-left: 5%
    .active
      background-color: gray
  .nodes_wrapper
    width: 250px
    height: 100%
    overflow: auto
    border: 1px solid green
    .node
      width: 100%
      height: 70px
      display: flex
      justify-content: flex-start
      align-items: center
      cursor: pointer
      font-size: 1.2em
      font-family: sans-serif
      padding-left: 5%
    .active
      background-color: gray
</style>
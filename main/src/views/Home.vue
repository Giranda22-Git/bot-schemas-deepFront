<template>
  <div class="home_main_wrapper">
    <patternsBar/>
    <nodesEditor/>
  </div>
</template>

<script>
import patternsBar from '@/components/patternsBar'
import nodesEditor from '@/components/nodesEditor'

export default {
  name: 'home',
  components: {
    patternsBar,
    nodesEditor
  }
}
</script>

<style lang="sass" scoped>
.home_main_wrapper
  width: 100vw
  height: 100vh
  display: flex
</style>

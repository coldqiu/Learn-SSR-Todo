<template>
  <div id="app">
    <div id="mask"></div>
    <v-header></v-header>
    <todo></todo>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from './layout/header.vue'
  import Footer from './layout/footer.jsx'
  import Todo from './views/todo/todo.vue'

  export default {
    data() {
      return {
        test: 'abc'
      }
    },
    components: {
      "v-header": Header,
      "v-footer": Footer,
      "todo": Todo
    }
  }
</script>

<!--<style scoped lang="stylus" rel="stylesheet/stylus">-->
<style lang="stylus" scoped>
  #app {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  #mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #999;
    opacity: .42;
    z-index: -1;
  }


</style>

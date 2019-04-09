<template>
  <section class="real-app">
    <!-- autofocus="autofocus"进入页面自动选中-->
    <input type="text"
           class="add-input"
           autofocus="autofocus"
           placeholder="接下来的要做的事"
           @keyup.enter="addTodo"
    >
    <item :todo="todo"
          v-for="todo in filteredTodos"
          :key="todo.id"
          @del="deleteTodo"
    />
    <tabs
            :todos="todos"
            :filter="filter"
            @toggle="toggleFilter"
            @clearAll="clearAllCompleted"
    />
  </section>
</template>

<script type="text/ecmascript-6">
  import Item from './item.vue'
  import Tabs from './tabs.vue'
  let id = 0
  export default {
    data() {
      return {
        todos: [],
        filter: 'all'
      }
    },
    components: {
      Item,
      Tabs
    },
    computed: {
      filteredTodos() {
        if (this.filter === 'all') {
          return this.todos
        }

        const completed = this.filter === 'completed'
        console.log("this.todos.filter(views => completed === views.computed)", this.todos.filter(todo => completed === todo.completed))
        return this.todos.filter(todo => completed === todo.completed)
      }
    },
    methods: {
      addTodo (e) {
        this.todos.unshift({
          id: id++,
          content: e.target.value.trim(),
          completed: false
        })
        e.target.value = ''
      },
      deleteTodo(id) {
        this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
      },
      toggleFilter(state) {
        console.log("state", state)
        this.filter = state
      },
      clearAllCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed)
      }

    }
  }
</script>

<style lang="stylus">
  .real-app
    width 600px
    margin 0 auto
    box-shadow 0 0 5px #666
  .add-input
    position relative
    margin 0
    width 100%
    font-size 24px
    font-family inherit
    font-weight inherit
    line-height 1.4em
    border none
    outline none
    color inherit
    box-sizing border-box
    /*font-smoothing antialiased*/
    padding 16px 16px 16px 36px
    border none
    box-shadow inset 0 -2px 1px rgba(0, 0, 0, 0.03)
</style>

<template>
  <section class="Todos">
    <div class="container">
      <div class="header">
        <h2 class="title">{{ 'todos.tag' | translate }}</h2>
        <button class="button" @click="includeTodo">{{ 'todos.button.new' | translate }}</button>
      </div>

      <TodosList />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TodosList from './TodosList'

export default {
  components: {
    TodosList
  },

  data: () => ({
    todo: {
      id: 0,
      userId: 0,
      title: '',
      done: false
    }
  }),

  computed: {
    ...mapGetters({
      'getTodos': 'getTodos'
    }),

    lastTodo () {
      if (Object.keys(this.getTodos).length !== 0) {
        let newTodo = {
          id: this.getTodos[this.getTodos.length - 1].id + 1,
          userId: 0,
          title: '',
          done: false
        }

        return newTodo
      } else {
        let todo = {
          id: 0,
          userId: 0,
          title: '',
          done: false
        }

        return todo
      }
    }
  },

  methods: {
    ...mapActions([
      'addTodo'
    ]),

    includeTodo () {
      this.todo = this.lastTodo
      this.addTodo(this.todo)
    }
  }
}
</script>

<style scoped>
@import "../../assets/styles/variables";

.container {
  border-radius: 4px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: var(--shadow-depth-3);
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
}

.title {
  line-height: 32px;
  font-size: 16px;
  color: var(--c-gray);
}

.button {
  border: 1px solid var(--c-gray-light);
  border-radius: 2px;
  padding: 0 16px;
  line-height: 30px;
  font-size: 12px;
  color: var(--c-gray);
  transition: all .3s;

  &:hover {
    border-color: var(--c-gray);
    color: var(--c-black);
  }
}
</style>

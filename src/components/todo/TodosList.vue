<template>
  <div class="TodosList">
    <div class="todo" :class="{ done: todo.done }" :key="todo.id" v-for="todo in getTodos">
      <button class="icon" @click="toggle(todo)">
        <CheckCircle class="svg check" />
      </button>

      <input
        class="input"
        :value="todo.title"
        :placeholder="$t('todos.placeholder.add')"
        @input="e => { updateTodoSelect(todo, e.target.value) }"
      >

      <Assignee :todo="todo" />

      <button class="icon" @click="destroyTodo(todo)">
        <Trash class="svg" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CheckCircle from '../icons/CheckCircle'
import Trash from '../icons/Trash'
import Assignee from './TodosAssignee'

export default {
  components: {
    CheckCircle,
    Trash,
    Assignee
  },

  computed: {
    ...mapGetters({
      'getTodos': 'getTodos'
    })
  },

  methods: {
    ...mapActions([
      'updateTodo',
      'deleteTodo'
    ]),

    updateTodoSelect (todo, value) {
      todo.title = value
      this.updateTodo(todo)
    },

    destroyTodo (todo) {
      this.deleteTodo(todo)
    },

    toggle (todo) {
      todo.done = !todo.done
      this.updateTodo(todo)
    }
  }
}
</script>

<style scoped>
@import "../../assets/styles/variables";

.todo {
  display: flex;
  align-items: center;
  border-top: 1px solid var(--c-divider);
}

.todo:hover {
  background-color: #fafafa;
}

.todo:hover .svg {
  opacity: 1;
}

.todo.done {
  .input {
    text-decoration: line-through;
    color: var(--c-gray);
  }

  .icon .svg.check {
    fill: #38d2d8;
  }
}

.input {
  flex-grow: 1;
  border: 0;
  padding: 12px 24px 12px 0;
  width: 100%;
  background-color: transparent;
  transition: all .3s;
}

.icon {
  display: block;
  padding: 12px 24px;
}

.icon:hover .svg {
  fill: var(--c-black);
}

.icon:hover .svg.check {
  fill: var(--c-black);
}

.svg {
  width: 14px;
  height: 14px;
  opacity: 0;
  transform: translateY(2px);
  transition: all .3s;
  fill: var(--c-gray);
}

.svg.check {
  opacity: 1;
  fill: var(--c-gray-light);
}
</style>

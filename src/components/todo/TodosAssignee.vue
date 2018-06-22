<template>
  <div class="TodosAssignee">
    <User class="user" />

    <select class="select" v-model="userSelect" :class="{ selected: !!todo.assignee }" @change="update">
      <option class="option" value="">{{ 'todos.select.user' | translate }}</option>
      <option class="option" :value="user" :selected="todo.userId == user.id" v-for="user in getUsers" :key="user.id">
        {{ user.name }}
      </option>
    </select>

    <ChevronDown class="down" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import User from '../icons/User'
import ChevronDown from '../icons/ChevronDown'

export default {
  components: {
    User,
    ChevronDown
  },

  props: {
    todo: { type: Object, required: true }
  },

  data: () => ({
    userSelect: {}
  }),

  computed: {
    ...mapGetters({
      'getUsers': 'getUsers'
    })
  },

  methods: {
    ...mapActions([
      'updateTodo',
      'updateUser'
    ]),

    update () {
      this.todo.userId = this.userSelect.id
      this.userSelect.todos.push(this.todo)

      this.updateUser(this.userSelect)
      this.updateTodo(this.todo)
    }
  }
}
</script>

<style scoped>
@import "../../assets/styles/variables";

.TodosAssignee {
  position: relative;
  display: flex;
  align-items: center;
}

.user {
  width: 14px;
  height: 14px;
  fill: var(--c-gray);
}

.select {
  position: relative;
  z-index: 1;
  border: 0;
  padding-right: 16px;
  padding-left: 12px;
  color: var(--c-gray);
  background-color: transparent;
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
}

.select.selected {
  color: var(--c-black);
}

.option {
  color: var(--c-gray-dark);
}

.down {
  position: absolute;
  top: 10px;
  right: 0;
  width: 8px;
  height: 8px;
  fill: var(--c-gray);
}
</style>

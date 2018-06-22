<template>
  <section class="Users">
    <div class="container">
      <div class="header">
        <h2 class="title">{{ 'users.tag' | translate }}</h2>
        <button class="button" @click="includeUser()">{{ 'users.button.new' | translate }}</button>
      </div>

      <UsersList />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import UsersList from './UsersList'

export default {
  components: {
    UsersList
  },

  data: () => ({
    user: {
      id: 0,
      name: '',
      todos: []
    }
  }),

  computed: {
    ...mapGetters({
      'getUsers': 'getUsers'
    }),

    lastUser () {
      if (Object.keys(this.getUsers).length !== 0) {
        let newUser = {
          id: this.getUsers[this.getUsers.length - 1].id + 1,
          name: '',
          todos: []
        }
        return newUser
      } else {
        let user = {
          id: 0,
          name: '',
          todos: []
        }
        return user
      }
    }
  },

  methods: {
    ...mapActions([
      'addUser'
    ]),

    includeUser () {
      this.user = this.lastUser
      this.addUser(this.user)
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

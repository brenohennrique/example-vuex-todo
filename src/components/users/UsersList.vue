<template>
  <div class="UsersList">
    <div class="user" :key="user.id" v-for="user in getUsers">
      <input
        class="input"
        :value="user.name"
        :placeholder="$t('users.placeholder.add')"
        @input="e => { updateUserSelect(user, e.target.value) }"
      >

      <p class="tasks">{{ $t('users.tasks', {'tasks': user.todos.length}) }}</p>

      <button class="icon" @click="destroyUser(user)">
        <Trash class="trash" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Trash from '../icons/Trash'

export default {
  components: {
    Trash
  },

  computed: {
    ...mapGetters({
      'getUsers': 'getUsers'
    })
  },

  methods: {
    ...mapActions([
      'updateUser',
      'deleteUser'
    ]),

    updateUserSelect (user, value) {
      user.name = value

      this.updateUser(user)
    },

    destroyUser (user) {
      this.deleteUser(user)
    }
  }
}
</script>

<style scoped>
@import "../../assets/styles/variables";

.user {
  display: flex;
  align-items: center;
  border-top: 1px solid var(--c-divider);
}

.user:hover {
  background-color: #fafafa;
}

.user:hover .trash {
  opacity: 1;
}

.input {
  flex-grow: 1;
  border: 0;
  padding: 12px 24px;
  width: 100%;
  background-color: transparent;
  transition: all .3s;
}

.tasks {
  font-size: 12px;
  white-space: nowrap;
  color: var(--c-gray);
}

.icon {
  display: block;
  padding: 12px 24px;
}

.icon:hover .trash {
  fill: var(--c-black);
}

.trash {
  width: 14px;
  height: 14px;
  opacity: 0;
  transform: translateY(2px);
  transition: all .3s;
  fill: var(--c-gray);
}
</style>

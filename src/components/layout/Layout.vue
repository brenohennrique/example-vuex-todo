<template>
  <div class="App">
    <AppHeader />

    <Description />

    <div class="container">
      <div class="users">
        <Users />
      </div>
      <div class="todos">
        <Todos />
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './AppHeader'
import Description from './Description'
import AppFooter from './AppFooter'

import Users from '../users/Users'
import Todos from '../todo/Todos'

export default {
  name: 'layout',

  components: {
    AppHeader,
    Description,
    AppFooter,
    Users,
    Todos
  }
}
</script>

<style src="../../assets/styles/bootstrap.css"></style>

<style scoped>
.App {
  padding: 96px 48px 128px;
}

.container {
  display: flex;
  margin: 0 auto;
  width: 960px;
}

.users {
  padding-right: 48px;
  width: calc(100% / 3);
}

.todos {
  width: calc((100% / 3) * 2);
}
</style>

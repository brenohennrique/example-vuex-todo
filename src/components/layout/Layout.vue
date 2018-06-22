<template>
  <div class="app">
    <AppHeader />

    <Description />

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './AppHeader'
import Description from './Description'
import AppFooter from './AppFooter'

export default {
  name: 'layout',

  components: {
    AppHeader,
    Description,
    AppFooter
  }
}
</script>

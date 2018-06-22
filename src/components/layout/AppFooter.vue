<template>
  <div class="AppFooter">
    <p class="text">{{ 'app_footer.message' | translate }}</p>
  </div>
</template>

<style scoped>
@import "../../assets/styles/variables";

.AppFooter {
  padding-top: 96px;
  text-align: center;
  color: var(--c-gray);

  a {
    color: var(--c-black);
    transition: all .3s;
  }

  a:hover {
    color: var(--c-gray);
  }
}
</style>

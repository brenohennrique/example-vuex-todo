<template>
  <p class="Description">
    {{ 'description.message' | translate }}
  </p>
</template>

<style scoped>
@import "../../assets/styles/variables";

.Description {
  margin: 0 auto;
  padding-bottom: 64px;
  width: 560px;
  text-align: center;

  a {
    text-decoration: underline;
    transition: all .3s;
  }

  a:hover {
    color: var(--c-gray);
  }
}
</style>

<template>
  <div class="AppHeader">
    <h1 class="title">{{ 'app_header.title' | translate }}</h1>
    <p class="lead">{{ 'app_header.message' | translate }}</p>
  </div>
</template>

<style scoped>
@import "../../assets/styles/variables";

.AppHeader {
  padding-bottom: 24px;
  text-align: center;
}

.title {
  padding-bottom: 8px;
  line-height: 42px;
  font-family: var(--font-family-primary);
  font-size: 34px;
}

.lead {
  font-size: 16px;
  color: var(--c-gray);
}
</style>

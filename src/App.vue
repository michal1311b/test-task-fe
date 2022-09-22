<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

import SiteFooter from "./components/SiteFooter.vue";

import IconLogo from "./components/icons/IconLogo.vue";
import SearchBox from "./components/SearchBox.vue";
</script>

<template>
  <header class="header__container">
    <div class="d-flex align-center">
      <RouterLink to="/"> <IconLogo /> </RouterLink>
      <span class="header__title">Github Userboard</span>
    </div>
    <div class="d-flex align-center"><SearchBox /></div>
  </header>

  <RouterView />

  <SiteFooter />
</template>

<style scoped></style>

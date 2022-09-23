<script lang="ts">
import { RouterLink, RouterView } from "vue-router";

import SiteFooter from "./components/SiteFooter.vue";

import IconLogo from "./components/icons/IconLogo.vue";
import SearchBox from "./components/SearchBox.vue";

import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  components: { SiteFooter, IconLogo, SearchBox },

  setup() {
    const routeName = computed(() => {
      return useRoute().name;
    });
    return { routeName };
  },
});
</script>

<template>
  <header class="header__container">
    <div class="d-flex align-center">
      <RouterLink to="/"> <IconLogo /> </RouterLink>
      <span class="header__title">Github Userboard</span>
    </div>
    <div class="d-flex align-center">
      <SearchBox v-if="routeName === 'home'" />
    </div>
  </header>

  <RouterView class="main__container" />

  <SiteFooter />
</template>

<style scoped></style>

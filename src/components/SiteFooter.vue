<script lang="ts">
import { defineComponent } from "vue";
import IconLogo from "@/components/icons/IconLogo.vue";

export default defineComponent({
  components: { IconLogo },
});
</script>

<template>
  <footer class="footer__container">
    <a href="https://github.com" title="Github main page"><IconLogo /></a>
    <span class="footer__text">© All rights reserved, 2022</span>
  </footer>
</template>

<style scoped></style>

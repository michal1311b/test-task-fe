<script lang="ts">
import { defineComponent } from "vue";
import IconRubenDuck from "@/components/icons/IconRubenDuck.vue";

export default defineComponent({
  components: { IconRubenDuck },
});
</script>

<template>
  <main class="d-flex justify-center">
    <div>
      <div class="w-100 text-center"><IconRubenDuck /></div>
      <h1 class="title__userPage title__userPage--space">Username</h1>
    </div>
  </main>
</template>

<style></style>

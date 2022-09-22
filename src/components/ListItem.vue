<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import IconRubenDuck from "@/components/icons/IconRubenDuck.vue";
import IconAnchor from "@/components/icons/IconAnchor.vue";

export default defineComponent({
  props: { user: { type: Object, default: null } },
  components: { IconRubenDuck, IconAnchor },
});
</script>

<template>
  <RouterLink
    :to="{ name: 'user', params: { username: user.login } }"
    :title="`${user.login} - Github details`"
  >
    <IconRubenDuck :avatarSrc="user.avatar_url" />

    <div class="text-center">
      <h1 class="title__userAvatar title__userAvatar--space">
        {{ user.login }}
      </h1>
      <a :href="user.html_url" target="_blank"><IconAnchor /> github</a>
    </div>
  </RouterLink>
</template>

<style></style>

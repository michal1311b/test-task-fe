<script lang="ts">
import { defineComponent, computed } from "vue";
import { RouterLink } from "vue-router";
import { useStore } from "vuex";
import IconRubenDuck from "@/components/icons/IconRubenDuck.vue";
import IconStar from "@/components/icons/IconStar.vue";
import IconView from "@/components/icons/IconView.vue";
import IconBackBtn from "@/components/icons/IconBackBtn.vue";

export default defineComponent({
  components: { IconRubenDuck, IconStar, IconView, IconBackBtn },
  data() {
    return {
      loader: true,
    };
  },

  async created() {
    await this.$store.dispatch(
      "FETCH_USER_DETAILS",
      this.$route.params.username
    );
    await this.$store.dispatch("FETCH_USER_REPOS", this.$route.params.username);
    this.loader = false;
  },

  setup() {
    const store = useStore();

    return {
      userDetails: computed(() => store.getters.GET_USER_DETAILS),
      userRepos: computed(() => store.getters.GET_USER_REPOS),
    };
  },
});
</script>

<template>
  <main class="d-flex justify-center align-center">
    <div v-if="userDetails && !loader" class="w-100">
      <RouterLink :to="{ name: 'home' }" title="Back to home page"
        ><IconBackBtn
      /></RouterLink>
      <div class="w-100 d-flex justify-center">
        <IconRubenDuck :avatarSrc="userDetails.avatar_url" :list="false" />
      </div>
      <h1 class="title__userPage title__userPage--space text-center">
        {{ userDetails.login ? userDetails.login : userDetails.name }}
      </h1>
      <div
        class="row py-1 row--list"
        v-for="(userRepo, index) in userRepos"
        :key="userRepo.id"
      >
        <div class="column">
          <a :href="userRepo.html_url" :title="userRepo.name"
            >Repo {{ index }}</a
          >
        </div>
        <div class="column column--small">
          <ul class="stats__container">
            <li class="stats__label">
              <IconView class="pl-2" /> {{ userRepo.watchers_count }}
            </li>
          </ul>
        </div>
        <div class="column column--small">
          <ul class="stats__container">
            <li class="stats__label">
              <IconStar class="pl-2" /> {{ userRepo.stargazers_count }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else>Loading</div>
  </main>
</template>

<style></style>

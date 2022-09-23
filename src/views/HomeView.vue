<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import ListItem from "@/components/ListItem.vue";

export default defineComponent({
  components: { ListItem },
  data() {
    return {
      loader: true,
    };
  },

  async created() {
    await this.$store.dispatch("FETCH_USERS");
    this.loader = false;
  },

  setup() {
    const store = useStore();

    return {
      usersList: computed(() => store.getters.GET_USER_LIST),
      filteredUsersList: computed(() => store.getters.GET_FILTER_USERS_LIST),
    };
  },
});
</script>

<template>
  <main>
    <div class="d-flex justify-center">
      <h1 class="title__mainPage title__mainPage--space">Top users</h1>
    </div>
    <div class="row search__notFound" v-if="!filteredUsersList.length">
      Users not found
    </div>
    <div class="row" v-else-if="filteredUsersList.length && !loader">
      <div v-for="user in filteredUsersList" :key="user.id" class="column">
        <ListItem :user="user" />
      </div>
    </div>
    <div class="row" v-else-if="usersList.length && !loader">
      <div v-for="user in usersList" :key="user.id" class="column">
        <ListItem :user="user" />
      </div>
    </div>
  </main>
</template>

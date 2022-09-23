<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      searchText: "",
    };
  },
  watch: {
    searchText(newValue) {
      this.$store.dispatch("FILTER_USERS_LIST", newValue);
    },
  },
});
</script>

<template>
  <form class="search__form">
    <button type="submit" class="search__btn"></button>
    <input
      type="search"
      placeholder="Search..."
      class="search__input"
      v-model="searchText"
    />
  </form>
</template>

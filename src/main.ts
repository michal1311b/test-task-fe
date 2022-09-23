import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";
import {
  fetchUsers,
  fetchUserDetails,
  fetchUserRepos,
} from "./services/github.service";

import "./assets/main.css";

const store = createStore({
  state() {
    return {
      userList: [],
      filteredList: [],
      currentUser: null,
      userRepos: [],
    };
  },
  actions: {
    async FETCH_USERS(context) {
      const response: any = await fetchUsers();

      if (response) {
        context.commit("SET_USER_LIST", response);
      }
    },
    async FETCH_USER_DETAILS(context, username) {
      const response: any = await fetchUserDetails(username);

      if (response) {
        context.commit("SET_USER_DETAILS", response);
      }
    },
    async FETCH_USER_REPOS(context, username) {
      const response: any = await fetchUserRepos(username);

      if (response) {
        context.commit("SET_USER_REPOS", response);
      }
    },
    FILTER_USERS_LIST(context, username) {
      context.commit("SET_FILTER_USERS_LIST", username);
    },
  },
  mutations: {
    SET_USER_LIST(state, list) {
      state.userList = state.filteredList = list;
    },
    SET_USER_DETAILS(state, user) {
      state.currentUser = user;
    },
    SET_USER_REPOS(state, repos) {
      state.userRepos = repos;
    },
    SET_FILTER_USERS_LIST(state, username) {
      if (username.length) {
        state.filteredList = state.filteredList.filter((user) => {
          return user.login.includes(username);
        });
      } else {
        state.filteredList = state.userList;
      }
    },
  },
  getters: {
    GET_USER_LIST(state) {
      return state.userList;
    },
    GET_USER_DETAILS(state) {
      return state.currentUser;
    },
    GET_USER_REPOS(state) {
      return state.userRepos;
    },
    GET_FILTER_USERS_LIST(state) {
      return state.filteredList;
    },
  },
});

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");

import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";
import { fetchUsers, fetchUserDetails } from "./services/github.service";

import "./assets/main.css";

const store = createStore({
  state() {
    return {
      userList: [],
      currentUser: null,
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
  },
  mutations: {
    SET_USER_LIST(state, list) {
      state.userList = list;
    },
    SET_USER_DETAILS(state, user) {
      state.currentUser = user;
    },
  },
  getters: {
    GET_USER_LIST(state) {
      return state.userList;
    },
    GET_USER_DETAILS(state) {
      return state.currentUser;
    },
  },
});

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");

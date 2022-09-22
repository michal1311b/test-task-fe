import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";
import { fetchUsers } from "./services/github.service";

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
  },
  mutations: {
    SET_USER_LIST(state, list) {
      state.userList = list;
    },
  },
  getters: {
    GET_USER_LIST(state) {
      return state.userList;
    },
  },
});

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");

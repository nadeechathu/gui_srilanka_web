import axiosClient from "@/axios";
import { createStore } from "vuex";
import categoryData from "./category";
import careersData from "./careers";
import inquiryForm from './Inquiry';
import blogPosts from './blogs';

export default createStore({
  state: {
    token: localStorage.getItem("token") || null,
    error: null
  },

  mutations: {
    setAuthToken(state, token) {
        state.token = token;
        localStorage.setItem("token", token);
        state.error = null;
    },
    setLoginError(state, error) {
        state.error = error;
    }
  },
  actions: {

    async getToken({ commit }) {
      let formData = new FormData();
      formData.append("email", "admin@guisrilanka.com");
      formData.append("password", "gui12345");

      let url = "/login";

      await axiosClient.post(url, formData).then((response) => {
        if(response.data.code == 200) {

          const token = response.data.payload.token;
          commit("setAuthToken", token);

          // dispatch("categoryData/getCategories");

        } else {
          commit("setLoginError", "Invalid credentials");

        }
      }).catch(error => {
        commit("setLoginError", error);
      });

    },

  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    getToken: (state) => state.token,
  },
  modules: {
    categoryData,
    careersData,
    inquiryForm,
    blogPosts,
  },
});

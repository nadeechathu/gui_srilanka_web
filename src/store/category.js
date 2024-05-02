import axiosClient from "../axios";

const categoryData = {
    namespaced: true,
    state() {
      return {
        categoryData: JSON.parse(localStorage.getItem("categories")) | {},
        singleCategory: null,
        error: null
      };
    },
    getters: {},
    mutations: {
        setCategories(state, payload) {
          state.categoryData = payload;
          localStorage.setItem("categories", JSON.stringify(state.categoryData));
          
        },
        setCategoryServices(state, payload) {
          state.singleCategory = payload;
        },
        setError(state, error) {
            state.error = error;
        }
    },

    actions: {
        async getCategories({commit}) {
         
            return axiosClient
              .get('/categories')
              .then(async (response) => {
                if (response.status == 200) {
                  console.log(response.data.payload);
                 await commit("setCategories", response.data.payload);
                 return 1;

                } else {
                  commit("setError", 'error from server');
                  return 0;
                }
              })
              .catch((error) => {
                console.log(error);
                  commit("setError", error);
              });
          },

          async getCategoryServices({commit}, {route}) {
         
            return axiosClient
            .get(`categories/get/${route}`)
            .then(async (response) => {
              
                if (response.status == 200) {
                 await commit("setCategoryServices", response.data.payload);
                 return 1;
                } else {
                  commit("setError", 'error from server');
                  return 0;
                }
              })
              .catch((error) => {
                console.log(error);
                  commit("setError", error);
              });
          },
    }
};
export default categoryData;
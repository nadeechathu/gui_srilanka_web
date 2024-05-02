// store/careers.js
import axiosClient from '@/axios';

const careersData = {
  namespaced: true,
  state() {
    return {
      careersData: {},
      testimonialData: {},
      singleCareer: null,
      error: null
    };
  },
  getters: {},
  mutations: {
      setCareers(state, payload) {
        state.careersData = payload;
      },
      setSingleCareer(state, payload) {
        state.singleCareer = payload;
      },
      setTestimonials(state, payload) {
        state.testimonialData = payload;
      },
      setError(state, error) {
          state.error = error;
      }
  },

  actions: {
      async getCareers({commit}) {
       
          return axiosClient
            .get('/careers')
            .then(async (response) => {
              if (response.status == 200) {
               await commit("setCareers", response.data.payload);
               
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

        async getSingleCareer({commit}, {route}) {
     
          return axiosClient
            .get(`careers/get/${route.slug}`)
            .then(async (response) => {
              console.log(response);
              if (response.status == 200) {
               await commit("setSingleCareer", response.data.payload);
               
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

        //fetch all testimonials
        async getTestimonials({commit}) {
       
          return axiosClient
            .get('/testimonials')
            .then(async (response) => {
              if (response.status == 200) {
               await commit("setTestimonials", response.data.payload);
               
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
export default careersData;
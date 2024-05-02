import axiosClient from '@/axios'; // Assuming axios.js is in the src folder

const inquiryForm = {
    namespaced: true,
    state() {
        return {
            formMsg: null
        }
    },

    mutations: { 
        setFormMessage(state, payload) {
            state.formMsg = payload;
        }
    },

    actions: {
        
        async inquirySubmitForm({commit}, {name, email, phone_number, inquiry_type_id, message, request_method}) {

            let formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('phone_number', phone_number);
            formData.append('inquiry_type_id', inquiry_type_id);
            formData.append('message', message);
            formData.append('request_method', request_method);

            let url = "/inquiry";

            return axiosClient
            .post(url, formData)
            .then((response) => {
              if (response.data.status == true) {
                name = "";
                email = "";
                phone_number ="";
                inquiry_type_id = "";
                message = "";
                request_method = "";

                commit("setFormMessage", response.data.message);
                return [1, response.data.message];

              } else {
                commit("setFormMessage", response.data.message);
                return [0, response.data.message];
              }
            }).catch(error => {
              commit("setFormMessage", error);
          });
        },

        async partnerSubmitForm({commit}, {name, title, email, phone_number, company, website, details}) {

          let formData = new FormData();

          formData.append('name', name);
          formData.append('title', title);
          formData.append('email', email);
          formData.append('phone_number', phone_number);
          formData.append('company', company);
          formData.append('website', website);
          formData.append('details', details);

          let url ="/partner";

          return axiosClient
          .post(url, formData)
          .then((response) => {
            if (response.data.status == true) {
              name = "";
              title = "";
              email = "";
              phone_number = "";
              company ="";
              website = "";
              details = "";

              commit("setFormMessage", response.data.message);
              return [1, response.data.message];

            } else {
              commit("setFormMessage", response.data.message);
              return [0, response.data.message];
            }
          }).catch(error => {
            commit("setFormMessage", error);
        });
      }
    },



    getters: {
      formMessage(state) {
        return state.formMsg;
    }
    },
};

export default inquiryForm;


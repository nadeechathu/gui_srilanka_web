import axiosClient from '@/axios';

const blogPosts = {
    namespaced: true,

    state() {
        return {
            blogPosts: {},
            singleBlog: null,
            eroor: null
        };
    },

    getters: {},

    mutations: {
        setBlogs(state, payload) {
            state.blogPosts = payload;
        },
        setSingleBlog(state, payload) {
            state.singleBlog = payload;
        },
        setError(state, error) {
            state.error = error;
        }
    },

    actions: {
        async getBlogs({ commit }) {

            return axiosClient
                .get('/posts')
                .then(async (response) => {
                    if (response.status == 200) {
                        // console.log(response);
                        await commit("setBlogs", response.data.payload);
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

        async getSingleBlog({commit}, {route}) {
            return axiosClient
                .get(`posts/get/${route.slug}`)
                .then(async (response) => {
                    if (response.status == 200) {
                        // console.log(response);
                        await commit("setSingleBlog", response.data.payload);
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
        }
    }
};

export default blogPosts;
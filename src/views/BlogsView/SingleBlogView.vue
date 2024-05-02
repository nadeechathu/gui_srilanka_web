<template>
  <LoaderIcon :loading="isLoading" />
  <div class="content-head-image single-blog-bg d-flex align-items-center">
    <div class="container-fluid">
      <div class="container">
        <h1 class="font-36 text-blue fw-bold">Single Blog
        </h1>
      </div>
    </div>
  </div>

  <div v-if="this.$store.state.blogPosts.singleBlog">
    <div class="container-fluid py-5">
      <div class="container">
        <router-link to="/blogs">
          <div class="col-2 pt-4">
            <p class="btn btn-outline-primary-cus px-5 fw-bold rounded-pill px-4">
              Back
            </p>
          </div>
        </router-link>
        <div class="row">
          <div class="col-lg-8">
            <h2 class="fw-bold font-30 text-blue lh-base  pb-2">
              {{ this.$store.state.blogPosts.singleBlog.title }}
            </h2>
            <img :src="this.$store.state.blogPosts.singleBlog.images" class="d-block w-100 rounded-3" 
            :alt="this.$store.state.blogPosts.singleBlog.title" />
            <div class="row my-2">
              <div class="col-lg-2">
                <p class="font-18 text-blue ps-2">
                  <i class="fas fa-user"></i> <span class="fst-italic fw-bold text-black-cus">by admin</span>
                </p>
              </div>
              <div class="col-lg-3">
                <p class="font-18 text-blue ps-2">
                  <i class="fas fa-calendar-alt"></i> <span class="fst-italic fw-bold text-black-cus">
                    {{ this.$store.state.blogPosts.singleBlog.published_date }}</span>
                </p>
              </div>
            </div>
            <p class="font-15 lh-base fw-500 text-dark mb-3">{{ this.$store.state.blogPosts.singleBlog.short_description }}</p>

            <p class="font-15 lh-base fw-500 text-dark">{{ this.$store.state.blogPosts.singleBlog.description }}</p>
          </div>
          <div class="col-lg-4 pt-5" v-if="this.$store.state.blogPosts">
            <h2 class="font-20 text-blue fw-bold mb-3">Latest <span
                class="border-blue-cus border-bottom border-2">News&nbsp; &nbsp; &nbsp;</span></h2>
            <div class="module mb-4" v-for="latestBlog in this.$store.state.blogPosts.blogPosts.latest" v-bind:key="latestBlog.id">
              <img :src="latestBlog.images" class="d-block w-100 rounded-3 news-img"
              :alt="latestBlog.title" />
              <h5 class="fw-700 fst-italic text-dark my-3">
                {{ latestBlog.title }}
              </h5>
              <p class="font-13 line-height-p">
                {{ latestBlog.short_description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LoaderIcon from '@/components/icons/loader-icon.vue';

export default {
  name: 'AppFooter',
  components: {
    LoaderIcon
  },
  data() {
    return {
      isLoading: false
    };
  },

  created() {
    this.setBlog();
    this.setLatest();
  },

  mounted() {

  },

  methods: {

    setBlog() {
      this.isLoading = true;
      const route = this.$route.params;
      this.$store.dispatch("blogPosts/getSingleBlog", { route })
        .then((response) => {
          if (response == 1) {
            this.isLoading = false;
          } else {
            this.isLoading = true;
          }
        })
        .catch((error) => {
          this.isLoading = false;
          console.error("Blog response error:", error);
        });
    },

    setLatest() {
         this.isLoading = true;
         this.$store.dispatch("blogPosts/getBlogs")
            .then((response) => {
               if (response == 1) {
                  console.log(this.$store.state.blogPosts.blogPosts.latest);

                  this.isLoading = false;

               } else {
                  console.error("Invalid or missing response data");
                  this.isLoading = true;
               }
            })
            .catch((error) => {
               this.isLoading = false;
               console.error("Blogs response error:", error);
            });
      },
  }
}
</script>
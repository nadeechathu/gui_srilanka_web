<template>
   <LoaderIcon :loading="isLoading" />
   <div class="content-head-image blog-bg d-flex align-items-center">
      <div class="container-fluid">
         <div class="container">
            <h1 class="font-36 text-blue fw-bold"> Blog
            </h1>
         </div>
      </div>
   </div>
   <div class="container-fluid py-5" >
      <div class="container">
         <div class="row" v-if="this.$store.state.blogPosts.blogPosts && this.$store.state.blogPosts.blogPosts.popular && this.$store.state.blogPosts.blogPosts.popular.length > 0">
         <div class="col-12">
            <h2 class="fw-bold font-24 text-blue border-blue1 pb-2">
               Popular News
            </h2>
         </div>
      </div>
         <div class="row pt-4" >
            <div class="col-lg-8">
               <div class="row" v-if="this.$store.state.blogPosts.blogPosts && this.$store.state.blogPosts.blogPosts.popular && this.$store.state.blogPosts.blogPosts.popular.length > 0">
                  <!-- only two populars post -->
                  <div class="col-lg-6 col-sm-6 pb-lg-0 pb-sm-0 pb-3" v-for="popularPost in getLatestPopularPost()"
                     v-bind:key="popularPost.id">
                     <router-link :to="{ name: 'single-blog', params: { slug: popularPost.slug } }" class="hvr-shrink">
                        <img :src="popularPost.images" class="d-block w-100 rounded-3" :alt="popularPost.title" />
                        <div class="row">
                           <div class="col-12">
                              <h4 class="fw-bold font-18 px-2 py-2 rounded-3 text-white blog-text lh-base">
                                 {{ popularPost.title }}</h4>
                           </div>
                        </div>
                     </router-link>
                  </div>
               </div>
               <div class="row pt-5" v-if="this.$store.state.blogPosts.blogPosts && this.$store.state.blogPosts.blogPosts.popular && this.$store.state.blogPosts.blogPosts.popular.length > 0">
                  <!-- other poplars post -->
                  <div class="col-lg-6  col-sm-6 col-12 pb-4" v-for="popularPost in getOtherPopularPost()"
                  v-bind:key="popularPost.id">
                     <router-link :to="{ name: 'single-blog', params: { slug: popularPost.slug } }" class="hvr-shrink">
                        <div class="row">
                           <div class="col-5 pe-lg-0">
                              <img :src="popularPost.images" class="d-block w-100 rounded-3" :alt="popularPost.title" />
                           </div>
                           <div class="col-7">
                              <h5 class="lh-base fw-bold text-dark font-16 fst-italic py-1">{{ popularPost.title }}</h5>
                              <p class="font-13 lh-base fw-500 text-dark">{{ popularPost.short_description }}</p>
                           </div>
                        </div>
                     </router-link>
                  </div>
               </div>
               <div class="row pt-3" v-if="this.$store.state.blogPosts.blogPosts && this.$store.state.blogPosts.blogPosts.featured && this.$store.state.blogPosts.blogPosts.featured.length > 0">
                  <div class="col-12 pb-4">
                     <h2 class="fw-bold font-24 text-blue border-blue1 pb-2">
                        Featured News
                     </h2>
                  </div>
                  <div class="col-lg-4 col-sm-4 col-6 pb-lg-0 pb-sm-0 pb-3"
                     v-for="featuredBlog in this.$store.state.blogPosts.blogPosts.featured"
                     v-bind:key="featuredBlog.id">
                     <router-link :to="{ name: 'single-blog', params: { slug: featuredBlog.slug } }" class="hvr-shrink">
                        <img :src="featuredBlog.images" class="d-block w-100 rounded-3" :alt="featuredBlog.title" />
                        <div class="row">
                           <div class="col-12">
                              <h4 class="fw-bolder font-16  pt-3 pb-2  text-dark ">{{ featuredBlog.title }}</h4>
                              <p class="font-13 lh-base fw-500 text-dark">{{ featuredBlog.short_description }}</p>
                           </div>
                        </div>
                     </router-link>
                  </div>
               </div>
            </div>
            <div class="col-lg-4 pt-lg-0 pt-5">
               <div class="rounded-3 bg-gray1">
                  <h2 class="fw-bold font-24 text-white bg-blue px-3 py-2  rounded-top">Follow us</h2>
                  <div class="p-3">
                     <p class="font-15 pb-2 fw-500 text-dark">The standard Lorem Ipsum passage</p>
                     <div class="d-flex gap-2 mb-3 pt-2 pb-3 border-bottom">
                        <a href="#" class="social d-flex justify-content-center align-items-center">
                           <i class="fa fa-facebook-f text-blue font-15 fw-500"></i>
                        </a>
                        <a href="#" class="social d-flex justify-content-center align-items-center">
                           <i class="fa fa-instagram text-blue font-15 fw-500"></i>
                        </a>
                        <a href="#" class="social d-flex justify-content-center align-items-center">
                           <i class="fa fa-linkedin-in text-blue font-15 fw-500"></i>
                        </a>
                     </div>
                     <h5 class="font-18 text-dark fw-bolder">Get latest news delivered daily!</h5>
                     <p class="font-13 pt-2 pb-4 fw-500 text-dark">The standard Lorem Ipsum passage</p>
                     <form class="row g-3 pb-3">
                        <div class="col-8 pe-lg-0">
                           <input type="text" class="form-control font-14 py-2 rounded-start rounded-0"
                              id="inputPassword2" placeholder="Your Email">
                        </div>
                        <div class="col-4 ps-lg-0">
                           <button type="submit"
                              class="btn  fw-500 font-14 text-white bg-blue py-2 rounded-end rounded-0">Subscribe</button>
                        </div>
                     </form>
                  </div>
               </div>


               <h2 class="fw-bold font-24 text-blue border-blue1 pt-5 pb-2" v-if="this.$store.state.blogPosts.blogPosts && this.$store.state.blogPosts.blogPosts.latest && this.$store.state.blogPosts.blogPosts.latest.length > 0">
                  Latest news
               </h2>

               <div class="row pt-3" v-if="this.$store.state.blogPosts.blogPosts && this.$store.state.blogPosts.blogPosts.latest && this.$store.state.blogPosts.blogPosts.latest.length > 0">
                  <div class="col-lg-12 col-sm-6 pb-4"
                     v-for="latestBlog in this.$store.state.blogPosts.blogPosts.latest" v-bind:key="latestBlog.id">
                     <router-link :to="{ name: 'single-blog', params: { slug: latestBlog.slug } }" class="hvr-shrink">
                        <div class="row">
                           <div class="col-5 pe-lg-0">
                              <img :src="latestBlog.images" class="d-block w-100 rounded-3" :alt="latestBlog.title" />
                           </div>
                           <div class="col-7">
                              <h5 class="lh-base fw-bold text-dark font-16 fst-italic py-1">{{ latestBlog.title }}</h5>
                              <p class="font-13 lh-base fw-500 text-dark">{{ latestBlog.short_description.substring(0,50) }}...</p>
                           </div>
                        </div>
                     </router-link>
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
         currentYear: new Date().getFullYear(),
         isLoading: false,
      };
   },

   created() {
      this.setBlogs();
   },

   methods: {
      scrollToTop() {

         window.scrollTo({
            top: 0,
            behavior: 'smooth'
         });
      },

      setBlogs() {
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

      getLatestPopularPost() {
         const allPopularPosts = this.$store.state.blogPosts.blogPosts.popular;
         const onlyTwoPosts = [];
         if (this.$store.state.blogPosts.blogPosts.popular) {
            for (let i = allPopularPosts.length - 1; i >= 0 && i > allPopularPosts.length - 3; i--) {
               onlyTwoPosts.push(allPopularPosts[i]);
            }
         }

         return onlyTwoPosts;
      },

      getOtherPopularPost() {
         const allPopularPosts = this.$store.state.blogPosts.blogPosts.popular;
         const otherPosts = [];

         if (this.$store.state.blogPosts.blogPosts.popular) {
            for (let i = allPopularPosts.length - 3; i >= 0; i--) {
               otherPosts.push(allPopularPosts[i]);
            }
         }

         return otherPosts;
      }


   }
}
</script>
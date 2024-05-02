<!-- Footer.vue -->
<template>
   <div class="container-fluid  bg-white  shadow  py-4">
      <div class="container">
         <div class="row  ">
            <div class="col-lg-4 col-sm-4">
               <div class="row  align-items-center ps-lg-5">
                  <div class="col-lg-1 col-sm-2 col-1 px-1">
                     <img class="d-block w-100" src="../../../public/images/location1.png"
                        alt="GUI Solutions Lanka (Pvt) Ltd">
                  </div>
                  <div class="col-lg-11 col-sm-10 col-11">
                     <p class="fw-bolder font-16 text-dark lh-base pt-2">No. 5E/67, Level-4, Kandy Road, Kadawatha, Sri Lanka
                     </p>
                  </div>
               </div>
            </div>
            <div class="col-lg-4 col-sm-4">
               <div class="row  align-items-center ps-lg-5">
                  <div class="  col-lg-1    col-sm-2    col-1 px-1">
                     <img class="d-block w-100" src="../../../public/images/phone.png"
                        alt="GUI Solutions Lanka (Pvt) Ltd">
                  </div>
                  <div class="col-lg-11 col-sm-10 col-11">
                     <p class="fw-bolder font-16 text-dark  pt-2"> <a href="tel:+94112922420
                        " class="text-dark hvr-forward ">+94 112922420
                        </a>
                     </p>
                     <p class="fw-bolder font-16 text-dark "><a href="tel:+94112922420
                        " class="text-dark hvr-forward">+94 778883884 (Hotline) 
                        </a> 
                     </p>
                  </div>
               </div>
            </div>
            <div class="col-lg-4 col-sm-4">
               <div class="row  align-items-center ps-lg-5 pt-2">
                  <div class="  col-lg-1    col-sm-2    col-1 px-1">
                     <img class="d-block w-100" src="../../../public/images/envelop.png"
                        alt="GUI Solutions Lanka (Pvt) Ltd">
                  </div>
                  <div class="col-lg-11 col-sm-10 col-11">
                     <p class="fw-bolder font-16 text-dark"> <a href="mailto:info@guisrilanka.com
                        " class="text-dark hvr-forward ">info@guisrilanka.com
                        </a>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="container-fluid py-5 footer-section">
      <video autoplay muted loop id="footer-video">
         <source src="../../../public/images/footer.mp4" type="video/mp4">
      </video>
      <div class="container">
      <div class="row">
         <div class="col-lg-5 ps-lg-5">
            <div class="row">
               <div class="col-lg-10 col-sm-6">
                  <router-link to="/" class="" title="GUI Solutions Lanka (Pvt) Ltd | Home page"> 
                     <img class="d-block w-100 mb-4" src="../../../public/images/gui-logo-footer.png"
                        alt="GUI Solutions Lanka (Pvt) Ltd">
                  </router-link>
               </div>
            </div>
            <div class="d-flex gap-2 mb-4">
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
            <p class="text-black-cus font-14 mb-3 fw-bolder d-none d-sm-block">Copyright @ {{ currentYear }} All rights reserved</p>
         </div>
         <div class="col-lg-3 col-sm-5">
            <h5 class="fw-bold mb-lg-3 mb-2 text-dark font-20 text-uppercase  pt-3">Our Solutions</h5>
            <ul>
               <li class="pb-2" v-for="category in this.$store.state.categoryData.categoryData" v-bind:key="category.id">
                  <router-link :to="category.slug" class="font-14 text-dark hvr-forward fw-500" @click="scrollToTop"  >
                     {{category.name}}
                  </router-link>
               </li>
            </ul>
         </div>
         <div class="col-lg-2 col-sm-3">
            <h5 class="fw-bold mb-lg-3 mb-2 text-dark font-20 text-uppercase  pt-3">INDUSTRIES</h5>
            <ul  >
               <li class="pb-2">
                  <router-link to="/industries" class="font-14 text-dark hvr-forward fw-500"  @click="scrollToTop">
                     Manufacturing
                  </router-link>
               </li>
               <li class="pb-2">
                  <router-link to="/industries" class="font-14 text-dark hvr-forward fw-500"  @click="scrollToTop" >
                     Restaurants
                  </router-link>
               </li>
               <li class="pb-2">
                  <router-link to="/industries" class="font-14 text-dark hvr-forward fw-500"  @click="scrollToTop" >
                     Constructions 
                  </router-link>
               </li>
               <li class="pb-2">
                  <router-link to="/industries" class="font-14 text-dark hvr-forward fw-500"  @click="scrollToTop" >
                     Travel and tourism
                  </router-link>
               </li>
               <li class="pb-2">
                  <router-link to="/industries" class="font-14 text-dark hvr-forward fw-500"  @click="scrollToTop" >
                     Export and Shipping
                  </router-link>
               </li>
               <li class="pb-2">
                  <router-link to="/industries" class="font-14 text-dark hvr-forward fw-500"  @click="scrollToTop" >
                     Information Technology
                  </router-link>
               </li>
               <li class="pb-2">
                  <router-link to="/industries" class="font-14 text-dark hvr-forward fw-500"  @click="scrollToTop" >
                     Finance and Education
                  </router-link>
               </li>
               <li class="pb-2">
                  <router-link to="/industries" class="font-14 text-dark hvr-forward fw-500"  @click="scrollToTop" >
                     Health & Safety 
                  </router-link>
               </li>
            </ul>
         </div>
         <div class="col-lg-2 col-sm-4">
            <h5 class="fw-bold mb-lg-3 mb-2 text-dark font-20 text-uppercase  pt-3">ABOUT US</h5>
            <ul  >
               <li class="pb-2">
                  <router-link to="/blogs" class="font-14 text-dark hvr-forward fw-500"  @click="scrollToTop" >
                     Blogs
                  </router-link>
               </li>
              <li class="pb-2">
                <router-link to="/partners" class="font-14 text-dark hvr-forward fw-500"  @click="scrollToTop" >
                  Become a Partner
                </router-link>
              </li>
               <li class="pb-2">
                  <router-link to="/career" class="font-14 text-dark hvr-forward fw-500"  @click="scrollToTop" >
                     Careers
                  </router-link>
               </li>
               <li class="pb-2">
                  <router-link to="/privacy-policy" class="font-14 text-dark hvr-forward fw-500"  @click="scrollToTop" >
                     Privacy Policy
                  </router-link>
               </li>
            </ul>
         </div>
         <div class="col-12 d-block d-sm-none">
            <p class="text-black-cus font-14 mb-3 fw-bolder text-center pt-3">Copyright @ {{ currentYear }} All rights reserved</p>
         </div>
      </div>
   </div>
   </div>
</template>
<script>
export default {
   name: 'AppFooter',
   data() {
      return {
         currentYear: new Date().getFullYear()
      };
   },
   methods: {
      scrollToTop() {
         
         window.scrollTo({
            top: 0,
            behavior: 'smooth' 
         });
      }
   },
   created() {
      this.$store.dispatch("categoryData/getCategories");
   }
}
</script>

<style scoped>
   /* Add styles for footer */
</style>
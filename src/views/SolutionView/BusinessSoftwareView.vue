<template>
   <LoaderIcon :loading="isLoading" />
   <div class="content-head-image bss-head-bg d-flex align-items-center">
      <div class="container-fluid">
         <div class="container">
            <h1 class="font-36 text-blue fw-bold">Business Software Solutions
            </h1>
         </div>
      </div>
   </div>
   <div class="container-fluid software-language-section">
      <div class="container">
         <div class="row">
            <div class="col-lg-8 pt-5">
               <h2 class="fw-bold font-24 text-blue border-blue1 pt-2 pb-2">
                  The standard Lorem Ipsum passage, used since the 1500s
               </h2>
               <p class="text-dark fw-500 font-16 lh-base pt-3">
                  We have been developing custom applications since the very beginning
                  of the company from 2011 with only two employees. Currently, we are
                  occupied with highly-skilled professionals to develop custom
                  applications for our clients.We develop programs for Windows, Web,
                  and Mobile applications.
               </p>
               <div class="row pt-4">
                  <div class="col-lg-9">
                     <img src="../../../public/images/software-language.png" class="d-block w-100" alt="guisrilanka" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>



   <div class="container-fluid my-4 " data-aos="fade-up" data-aos-anchor-placement="top-bottom"
        ata-aos-easing="ease-out-cubic" data-aos-duration="1400" v-if="this.$store.state.categoryData.singleCategory != null">
        <div class="container py-2">
         <div class="row">
            <div class="col-12 owl-carousel project-carousel">
                <div class="item" v-for="project in this.$store.state.categoryData.singleCategory.projects" v-bind:key="project.id">
                    <div class="py-5">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-sm-6 col-6 d-flex align-items-center flex-column">
                                <img class="d-block mb-3 w-25" :src="project.logo"
                                    alt="GUI Solutions Lanka (Pvt) Ltd">
                                <p class="text-center font-16 text-dar line-hight-p w-75">
                                    {{ project.description }}
                                </p>
                            </div>
                            <div
                                class="col-lg-6 col-sm-6 col-6 d-flex align-items-center justify-content-center flex-column">
                                <img :src="project.image" class="w-75"
                                    alt="eCommerce and Web Development">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </div>
    </div>

   <div class="container-fluid bg-light-blue mt-4">
      <div class="container">
         <div class="row">
            <div class="col-lg-6 col-sm-6 ">
               <img src="../../../public/images/mb-bg-help.png" class="d-block w-75 mt-s-3" alt="guisrilanka" />
            </div>
            <div class="col-lg-6 col-sm-12 py-5">
               <h2 class="fw-bold font-24 text-blue border-blue1 pt-4 pb-2">The standard Lorem Ipsum passage</h2>


               <p class="text-dark fw-500 font-16 lh-base pt-3"> is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

               <div class="row pt-4">
                  <div class="col-lg-6">
                     <ul class="text-dark fw-bolder font-15">
                        <li class="pb-2"><i class="fa fa-caret-right fs-4 text-blue me-2"></i> Maecenas venenatis dui
                           non</li>
                        <li class="pb-2"><i class="fa fa-caret-right fs-4 text-blue me-2"></i> Maecenas venenatis dui
                           non</li>

                     </ul>
                  </div>
                  <div class="col-lg-6">
                     <ul class="text-dark fw-bolder font-15">
                        <li class="pb-2"><i class="fa fa-caret-right fs-4 text-blue me-2"></i> Maecenas venenatis dui
                           non</li>
                        <li class="pb-2"><i class="fa fa-caret-right fs-4 text-blue me-2"></i> Maecenas venenatis dui
                           non</li>

                     </ul>
                  </div>
               </div>
            </div>
         </div>

      </div>

   </div>









</template>
<script>
import 'jquery';
import 'owl.carousel/dist/owl.carousel.min';
import LoaderIcon from "../../components/icons/loader-icon.vue";

export default {
   name: 'BusinessSoftwareView',
   components: {
      LoaderIcon
   },
   data() {
      return {
         products: [],
         isLoading: false
      };
   },
   created() {
       this.getServices();
    },
   mounted() {

   },

   methods: {
      getServices() {
            this.isLoading = true;
           const route = this.$route.name;
          
            this.$store.dispatch("categoryData/getCategoryServices", {route})
            .then((response) => {
                if (response == 1) {
                    this.isLoading = false;
                     // Initialize Owl Carousel
                     this.$nextTick(() => {

                     window.$('.project-carousel').owlCarousel({
                        margin: 30,
                        loop: true,
                        center: true,
                        dots: false,
                        nav: true,
                        autoplay: true,
                        smartSpeed: 6000,
                        animateOut: 'fadeOut', // Fade out effect
                        autoplayTimeout: 6000,
                        items: 1,

                     });


                     });
                } else {
                    this.isLoading = true;
                }
                })
                .catch((error) => {
                this.isLoading = false;
                console.error("Category response error:", error);
                });
        },
   }


};
</script>
<template>
  <LoaderIcon :loading="isLoading" />
  <div class="content-head-image career-head-bg d-flex align-items-center">
    <div class="container-fluid">
      <div class="container">
        <h1 class="font-36 text-blue fw-bold">Careers</h1>
      </div>
    </div>
  </div>
  <div class="container-fluid py-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="row pt-4" v-if="this.$store.state.careersData.careersData.length > 0">
            <div class="col-lg-4 col-sm-6 pb-3" v-for="career in this.$store.state.careersData.careersData" v-bind:key="career.id">
              <div class="module rounded-3 bg-white p-3 shadow " data-aos="fade-up" data-aos-duration="3000">
                <img :src="career.image" class="d-block w-50 text-center mx-auto career-img" alt="guisrilanka" />
                <div class="ps-lg-0 ps-sm-0">
                  <h3 class="text-blue font-20 fw-bold pt-1 border-blue-cus border-bottom border-2">{{ career.name }}</h3>
                </div>
                <p class="text-dark fw-500 font-14 lh-base pt-2">
                  {{ career.job_overView }}
                </p>
                <router-link :to="{ name: 'careers', params: { slug: career.slug } }" @click="scrollToTop">
                  <div class="col-12 px-lg-3 pt-4 d-grid gap-2 col-6 mx-auto">
                    <p href="" class="btn btn-outline-primary-cus fw-bold rounded-pill px-4">
                      More Info
                    </p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="row pt-4" v-else>
            <div class="bg-blue py-3 px-2 rounded-15">
              <span class="text-white ms-3">Sorry! No vacancies available for now</span>
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
         isLoading: false
      };
   },

   created() {
      this.setCareers();
   },

   methods: {
      scrollToTop() {
         
         window.scrollTo({
            top: 0,
            behavior: 'smooth' 
         });
      },

      setCareers() {
        this.isLoading = true;
        this.$store.dispatch("careersData/getCareers")
        .then((response) => {
            if (response == 1) {
                this.isLoading = false;
                
            } else {
                this.isLoading = true;
            }
            })
            .catch((error) => {
            this.isLoading = false;
            console.error("Careers response error:", error);
            });
      }
   }
}
</script>
<style>
.career-img {
  height: 150px !important;
  width: auto !important;
}
</style>
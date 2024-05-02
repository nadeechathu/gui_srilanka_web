<template>
  <LoaderIcon :loading="isLoading" />
  <div v-if="this.$store.state.careersData.singleCareer">
  <div class="content-head-image single-career-bg d-flex align-items-center">
    <div class="container-fluid">
      <div class="container">
        <h1 class="font-36 text-blue fw-bold">
          {{ this.$store.state.careersData.singleCareer.name }}
        </h1>
      </div>
    </div>
  </div>

  <div class="container-fluid mb-cus-m">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 col-sm-12 col-12" data-aos="fade-right" data-aos-duration="2000">
          <img :src="this.$store.state.careersData.singleCareer.image" class="d-block w-100 text-center mx-auto " alt="guisrilanka" />
        </div>
        <div class="col-lg-7 col-sm-12 col-12 mb-cus-m" data-aos="fade-up" data-aos-duration="2000">
          <div class="module py-5 px-3 second-bg-cus">
            <h5 class="text-blue fw-bold font-20 border-blue-cus border-bottom border-2 mb-4">Job Overview</h5>
            <p class="font-16 text-blue lh-lg mb-3">
               {{ this.$store.state.careersData.singleCareer.job_overView }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid">
    <div class="container">
      <div class="p-4 second-bg-cus">
        <div class="module mb-5" data-aos="fade-right" data-aos-duration="2000">
          <h5 class="text-blue fw-bold font-20 border-blue-cus border-bottom border-2 mb-4">Job Responsibilities and
            Duties</h5>
          <!-- <ul class="career-list">
            <li class="text-blue font-16 fw-600 ls-lg mb-3">Assures correctness and completeness of quality management
              documents.</li>
            <li class="text-blue font-16 fw-600 ls-lg mb-3">Monitors implementation of QA processes and plans
              (Inspection Test Plans and Quality Control Plans).</li>
            <li class="text-blue font-16 fw-600 ls-lg mb-3">Conducts periodic team meetings to ensure alignment with QA
              process and address issues with QA tools.</li>
            <li class="text-blue font-16 fw-600 ls-lg mb-3">Gathers comments and feedbacks to optimize systems and
              processes.</li>
            <li class="text-blue font-16 fw-600 ls-lg mb-3">Reviews documentation and resolves identified issues.</li>
            <li class="text-blue font-16 fw-600 ls-lg mb-3">Maintains automated testing procedures.</li>
          </ul> -->
          <p class="text-blue font-16 fw-600 ls-lg mb-3">{{ this.$store.state.careersData.singleCareer.description }}</p>
        </div>
        <div class="module" data-aos="fade-right" data-aos-duration="2000">
          <h5 class="text-blue fw-bold font-20 border-blue-cus border-bottom border-2 mb-4">Job Requirements</h5>
          <!-- <ul class="career-list">
            <li class="text-blue font-16 fw-600 ls-lg mb-3">Minimum 3 years of QA experience.</li>
            <li class="text-blue font-16 fw-600 ls-lg mb-3">Certification in standard quality management system preferred.</li>
            <li class="text-blue font-16 fw-600 ls-lg mb-3">Experience in international quality standards such as ISO 9001.</li>
            <li class="text-blue font-16 fw-600 ls-lg mb-3">High proficiency in MS Office.</li>
            <li class="text-blue font-16 fw-600 ls-lg mb-3">Strong interpersonal, organizational, problem-solving skills.</li>
            <li class="text-blue font-16 fw-600 ls-lg mb-3">Bachelor’s degree in Computer Science, Engineering, or related field; Master’s degree a plus</li>
          </ul> -->
          <p class="text-blue font-16 fw-600 ls-lg mb-3">{{ this.$store.state.careersData.singleCareer.requirements }}</p>
        </div>
      </div>

      <div class="my-3" data-aos="fade-up" data-aos-duration="2000">
        <h5 class="font-20 fw-semibold text-blue">
          If you are interested please send your resume to <a class="text-blue border-blue-cus border-bottom border-2" href="mailto:info@guisrilanka.com ">info@guisrilanka.com </a>
        </h5>
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
      this.setCareers();
   },

   mounted() {

   },

   methods: {

      setCareers() {
        this.isLoading = true;
        const route = this.$route.params;
        this.$store.dispatch("careersData/getSingleCareer", {route})
        .then((response) => {
            if (response == 1) {
                this.isLoading = false;
                // console.log(this.$store.state.careersData.singleCareer);
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
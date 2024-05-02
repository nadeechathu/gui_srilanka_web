<template>
    <LoaderIcon :loading="isLoading" />
    <div class="content-head-image ecom-head-bg d-flex align-items-center">
        <div class="container-fluid">
            <div class="container">
                <h1 class="font-36 text-blue contact-us fw-bold">eCommerce and Web Development
                </h1>
            </div>
        </div>
    </div>

    <div class="container-fluid mt-3">
        <div class="container" data-aos="fade-up" data-aos-anchor-placement="top-bottom" ata-aos-easing="ease-out-cubic"
            data-aos-duration="1400">
            <h1 class="font-36 fw-bold text-blue mb-3">
                Tell the <span class="border-blue-cus border-bottom border-2">story of your brand &nbsp; &nbsp;
                    &nbsp;</span>
            </h1>
            <div class="row align-items-center">
                <div class="col-lg-6 col-sm-12">
                    <p class="font-20 fw-bold text-black-cus mb-3">
                        It's not a decent site design if it's not appealing, captivating, or converting. At Extreme Web
                        Design
                        Sri Lanka, we construct websites using a plan of action.
                    </p>
                    <p class="font-16 text-black-cus">
                        Web Design & Development is much more than the color combinations, images, and fonts of your
                        website. A
                        Web Design & Development is the process of learning and understanding about your business, and
                        applying
                        a sound process of strategy, user experience, design execution, programming, and marketing to
                        form a
                        successful online business presence. Every aspect of your website is built specifically for your
                        organizational goals. We believe this service is the most important aspect in creating an
                        effective Web
                        Design & Development with a highly positive ROI.
                    </p>
                </div>
                <div class="col-lg-6 col-sm-12">
                    <img src="../../../public/images/bg 1.png" class="w-100 object-fit-cover ecom-first-img rounded-15"
                        alt="eCommerce and Web Development">
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid second-bg-cus pt-5 my-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
        ata-aos-easing="ease-out-cubic" data-aos-duration="1400" v-if="this.$store.state.categoryData.singleCategory.length > 0">
        <div class="container">
            <h5 class="font-36 fw-bold text-center text-blue mb-5 mb-4">
                WHAT <span class="border-blue-cus border-bottom border-2">WE DO &nbsp; &nbsp;</span>
            </h5>
            <div class="row" v-if="this.$store.state.categoryData.singleCategory != null">
                <div class="col-lg-3 col-6 d-flex align-items-center flex-column gap-3 hvr-wobble-horizontal mb-cus" v-for="service in this.$store.state.categoryData.singleCategory.services" v-bind:key="service.id">
                    <img :src="service.image" alt="eCommerce and Web Development">
                    <h5 class="font-20 fw-bold text-center">
                        {{ service.title }}
                    </h5>
                    <p class="font-16 text-black lh-base text-center">
                        {{ service.description }}
                    </p>9
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid my-4 " data-aos="fade-up" data-aos-anchor-placement="top-bottom"
        ata-aos-easing="ease-out-cubic" data-aos-duration="1400" v-if="this.$store.state.categoryData.singleCategory != null">
        <div class="container py-2">
            <div class="col-12 owl-carousel ecom-custom-project">
                <div class="item" v-for="project in this.$store.state.categoryData.singleCategory.projects" v-bind:key="project.id">
                    <div class="py-5">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-sm-6 col-6 d-flex align-items-center flex-column">
                                <img class="d-block ecom-project-logo mb-3 w-100" :src="project.logo"
                                    alt="GUI Solutions Lanka (Pvt) Ltd">
                                <p class="text-center font-16 text-dar line-hight-p w-75">
                                    {{ project.description }}
                                </p>
                            </div>
                            <div
                                class="col-lg-6 col-sm-6 col-6 d-flex align-items-center justify-content-center flex-column ecom-img-bg">
                                <img :src="project.image"
                                    class="w-100 d-block project-img-cus" alt="eCommerce and Web Development">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid my-5" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
        ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
        <div class="container">
            <h5 class="font-36 fw-bold text-center text-blue mb-5 mb-4">
                Our <span class="border-blue-cus border-bottom border-2">Fundamentals &nbsp; &nbsp;</span>
            </h5>
            <div class="row gap-lg-5 mb-4">
                <div
                    class="col-lg-2 col-6 text-center d-flex justify-content-center d-flex align-items-center mb-4 flex-column">
                    <img src="../../../public/images/icons/lan (7).png" class="lan-img"
                        alt="eCommerce and Web Development">
                </div>
                <div
                    class="col-lg-2 col-6 text-center d-flex justify-content-center d-flex align-items-center mb-4 flex-column">
                    <img src="../../../public/images/icons/lan (6).png" class="lan-img"
                        alt="eCommerce and Web Development">
                </div>
                <div
                    class="col-lg-2 col-6 text-center d-flex justify-content-center d-flex align-items-center mb-4 flex-column">
                    <img src="../../../public/images/icons/lan (8).png" class="lan-img"
                        alt="eCommerce and Web Development">
                </div>
                <div
                    class="col-lg-2 col-6 text-center d-flex justify-content-center d-flex align-items-center mb-4 flex-column">
                    <img src="../../../public/images/icons/lan (2).png" class="lan-img"
                        alt="eCommerce and Web Development">
                </div>
                <div
                    class="col-lg-2 col text-center d-flex justify-content-center d-flex align-items-center mb-4 flex-column">
                    <img src="../../../public/images/icons/lan (10).png" class="lan-img"
                        alt="eCommerce and Web Development">
                </div>
            </div>
            <div class="row gap-lg-5 ">
                <div
                    class="col-lg-2 col-6 text-center d-flex justify-content-center d-flex align-items-center mb-4 flex-column">
                    <img src="../../../public/images/icons/lan (3).png" class="lan-img"
                        alt="eCommerce and Web Development">
                </div>
                <div
                    class="col-lg-2 col-6 text-center d-flex justify-content-center d-flex align-items-center mb-4 flex-column">
                    <img src="../../../public/images/icons/lan (4).png" class="lan-img"
                        alt="eCommerce and Web Development">
                </div>
                <div
                    class="col-lg-2 col-6 text-center d-flex justify-content-center d-flex align-items-center mb-4 flex-column">
                    <img src="../../../public/images/icons/lan (5).png" class="lan-img"
                        alt="eCommerce and Web Development">
                </div>
                <div
                    class="col-lg-2 col-6 text-center d-flex justify-content-center d-flex align-items-center mb-4 flex-column">
                    <img src="../../../public/images/icons/lan (1).png" class="lan-img"
                        alt="eCommerce and Web Development">
                </div>
                <div
                    class="col-lg-2 col text-center d-flex justify-content-center d-flex align-items-center mb-4 flex-column">
                    <img src="../../../public/images/icons/lan (9).png" class="lan-img"
                        alt="eCommerce and Web Development">
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid second-bg-cus py-4 my-3" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
        ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
        <div class="container d-flex justify-content-center align-items-center flex-column">
            <h5 class="font-24 text-blue fw-bold text-center border-blue-cus border-bottom border-2 mb-3">
                We Assure 24/7 Support and Maintenance of Websites
            </h5>
            <p class="font-16 text-dark text-center w-75">
                Where web developments makes a difference. We at GUI, provides 24 hour service to each and every service
                you buy from us. Our team is dedicated to support in any steps on the web life.
            </p>
        </div>
    </div>

    <div class="container-fluid" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
        ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
        <div class="container">
            <h5 class="font-24 fw-bold text-blue my-3">
                Why we <span class="border-blue-cus border-bottom border-2">are special?&nbsp; &nbsp;</span>
            </h5>
            <div class="row">
                <div class="col-lg-5 col-sm-6 col-12">
                    <ul class="mt-4 erp-list" data-aos="fade-right" data-aos-anchor-placement="top-bottom"
                        ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
                        <li class="font-16 fw-semibold line-height-p mb-3 erp-list-li">Our company is equipped with well
                            qualified and fresh talents</li>
                        <li class="font-16 fw-semibold line-height-p mb-3 erp-list-li">SWe are affordable and provide
                            the best to what you pay</li>
                        <li class="font-16 fw-semibold line-height-p mb-3 erp-list-li">We are best in Web marketing and
                            latest technologies</li>
                        <li class="font-16 fw-semibold line-height-p mb-3 erp-list-li">We work with worldwide client
                            base & international experience</li>
                        <li class="font-16 fw-semibold line-height-p mb-3 erp-list-li">Identify & understand your
                            requirement</li>
                    </ul>
                </div>
                <div class="col-lg-3 col-sm-6 col-12">
                    <ul class="mt-3 erp-list" data-aos="fade-right" data-aos-anchor-placement="top-bottom"
                        ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
                        <li class="font-16 fw-semibold line-height-p mb-3 erp-list-li">Analyze your objectives and goals
                        </li>
                        <li class="font-16 fw-semibold line-height-p mb-3 erp-list-li">Conceptualize your design</li>
                        <li class="font-16 fw-semibold line-height-p mb-3 erp-list-li">Present concept designs</li>
                        <li class="font-16 fw-semibold line-height-p mb-3 erp-list-li">Consulting for Digital marketing
                        </li>
                        <li class="font-16 fw-semibold line-height-p mb-3 erp-list-li">Weekly analytics reports</li>
                    </ul>
                </div>
                <div class="col-lg-3 col-sm-6 col-12">
                    <ul class="mt-4 erp-list" data-aos="fade-right" data-aos-anchor-placement="top-bottom"
                        ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
                        <li class="font-16 fw-semibold line-height-p mb-3 erp-list-li">Lorem ipsum dolor sit amet</li>
                        <li class="font-16 fw-semibold line-height-p mb-3 erp-list-li">Nullam scelerisque diam facilisis
                        </li>
                        <li class="font-16 fw-semibold line-height-p mb-3 erp-list-li">Pellentesque ac nunc sodales</li>
                        <li class="font-16 fw-semibold line-height-p mb-3 erp-list-li">Aenean sed nunc ut orci</li>
                        <li class="font-16 fw-semibold line-height-p mb-3 erp-list-li">Vivamus viverra magna mollis,
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid my-4 second-bg-cus" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
        ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
        <div class="container py-3">
            <h5 class="font-24 fw-bold text-blue my-3 text-center">
                <span class="border-blue-cus border-bottom border-2 text-center mx-auto">Testimonials</span>
            </h5>
            <div class="col-12 owl-carousel testimonial-carousel">
                <div class="item" v-for="review in this.$store.state.careersData.testimonialData" :key="review.id">
                    <div class="second-bg-cus py-5">
                        <h5 class="font-24 text-blue fw-bold text-center">
                            {{ review.title }}
                        </h5>
                        <p class="font-16 text-center text-black my-4 w-75 testi-text"> <img class="comm-img cus-right"
                                src="../../../public/images/comm.png" alt="GUI Solutions Lanka (Pvt) Ltd">
                                {{review.description}}
                            <img
                                class="comm-img cus-left" src="../../../public/images/comm.png"
                                alt="GUI Solutions Lanka (Pvt) Ltd">
                        </p>
                        <!-- <img class="d-block testi-logo" src="../../../public/images/logo-1 1.png"
                            alt="GUI Solutions Lanka (Pvt) Ltd"> -->
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
    components: {
      LoaderIcon
   },
   data() {
      return {
         isLoading: false
      };
   },
   created() {
       this.getServices();
       
    },
    mounted() {

        this.$store.dispatch("careersData/getTestimonials").then(() => {
            this.testimonialsCarousel();
        });
        
    },

    methods: {

        testimonialsCarousel() {
            this.$nextTick(() => {
                    window.$('.owl-carousel').owlCarousel({
                    loop: true,
                    autoplay: true,
                    speed: 4000,
                    dots: false,
                    nav: true,
                    items: 1,
                });
            });
        },

        getServices() {
            this.isLoading = true;
           const route = this.$route.name;
          
            this.$store.dispatch("categoryData/getCategoryServices", {route})
            .then((response) => {
                if (response == 1) {
                    this.isLoading = false;
                    // Initialize Owl Carousel for logos
                        this.$nextTick(() => {
                        
                        // Initialize Owl Carousel for projects
                        window.$('.ecom-custom-project').owlCarousel({
                            loop: true,
                            margin: 30,
                            autoplay: true,
                            speed: 1000,
                            dots: false,
                            nav: true,
                            items: 1,
                            autoplayTimeout: 2000,
                            autoplayHoverPause: true,
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

<style>
.testimonial-carousel .owl-nav.disabled,
.project-carousel .owl-nav.disabled {
    display: block !important;
    z-index: 3;
}

.testimonial-carousel .owl-nav button.owl-next,
.testimonial-carousel .owl-nav button.owl-prev,
.project-carousel .owl-nav button.owl-next,
.project-carousel .owl-nav button.owl-prev {
    font-size: 40px !important;
    color: #302E7A;
    position: absolute;
    transition: 0.5s ease-in-out;
    display: inline-block;
}

.testimonial-carousel .owl-nav button.owl-next {
    right: 4px;
    top: 38%;
}

.testimonial-carousel .owl-nav button.owl-next::before {
    content: "";
    font-family: fontawesome;
}

.testimonial-carousel .owl-nav button.owl-prev {
    left: 4px;
    top: 38%;
}

.testimonial-carousel .owl-nav button.owl-prev::before {
    content: "";
    font-family: fontawesome;
}

.owl-nav button::before {
    font-size: 25px;
}

.owl-nav button span {
    display: none;
}

.project-carousel .owl-nav button.owl-next {
    bottom: 35px;
    left: 20px !important;
}

.project-carousel .owl-nav button.owl-prev {
    bottom: 35px;
    left: -4px;
}
</style>
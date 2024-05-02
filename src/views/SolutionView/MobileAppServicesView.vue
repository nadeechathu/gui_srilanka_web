<template>
<LoaderIcon :loading="isLoading" />
    <div class="container-fluid content-head-image mobile-app-head d-flex align-items-center">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="font-36 text-blue fw-bold">Mobile App Solutions & <br>
                        Developments</h1>
                </div>
            </div>
        </div>
    </div>


    <div class="container-fluid">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 col-sm-12 col-md-12" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                    ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
                    <p class="font-16 mb-4 line-hegiht-p">
                        Designing and development of Field Resource Planning solutions is one of the core competences of
                        GUI
                        Solutions Lanka.
                    </p>
                    <p class="font-16 mb-4 line-hegiht-p">
                        Automation of all the activities of an organization that take place in the field outside of an
                        organization, using mobile applications, connectinky various mobile devices, and integrating
                        these
                        solutions with prominent back-end ERP applications, is a unique offering from GUI Solutions
                        Lanka
                    </p>
                    <p class="font-16 mb-3 line-hegiht-p">
                        The GUI Solutions Lanka team, built this competency over a period of one decade by providing these
                        solutions to enterprises of multiple industry- markets such as Singapore, Malaysia, Australia, USA
                        etc.
                    </p>
                </div>
                <div class="col-lg-5 col-sm-12 col-md-12 mb-cus-m" data-aos="fade-left"
                    data-aos-anchor-placement="top-bottom" ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
                    <div class="specila-text-bg rounded-3">
                        <h5 class="font-18 text-blue fw-bold lh-base py-4 px-5 rounded-15">
                            Our mobile application development team is a group of creative, business-minded problem
                            solvers who work together as a team with you and your brand, your company to develop mobile
                            application design based upon your business objectives to achieve your targets.
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid second-bg-cus py-5 mb-3" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
        ata-aos-easing="ease-out-cubic" data-aos-duration="1400" 
        v-if="this.$store.state.categoryData.singleCategory">
        <div class="container d-flex flex-column gap-lg-5">
            <h1 class="font-36 fw-bold text-blue mb-5 text-center mb-4" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
                Mobile App <span class="border-blue-cus border-bottom border-2">Solutions &nbsp; &nbsp;
                    &nbsp;</span>
            </h1>
            <div class="row" v-if="this.$store.state.categoryData.singleCategory !== null">
                <div
                    class="col-lg-3 col-sm-6  " v-for="service in this.$store.state.categoryData.singleCategory.services" v-bind:key="service.id">

<div class="d-flex align-items-center flex-column gap-3 hvr-wobble-horizontal mb-cus-m   border border-dark rounded-3 py-3 px-1 mb-3 mobile-app-service-box">
    <img :src="service.image" alt="" srcset="">
                    <h5 class="text-dark font-18 fw-bold text-center px-lg-4">
                        {{ service.title }}
                    </h5>
                    <p class="font-15 text-black lh-base text-center">
                        {{ service.description }}
                    </p>
</div>

                    



                    
                </div>
            </div>

        </div>
    </div>

    <div class="container-fluid my-4 " data-aos="fade-up" data-aos-anchor-placement="top-bottom"
        ata-aos-easing="ease-out-cubic" data-aos-duration="1400" v-if="this.$store.state.categoryData.singleCategory != null">
        <div class="container py-2">
            <div class="row">
                <div class="col-12 owl-carousel custom-project">
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

    <div class="container-fluid" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
        ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p class="text-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
                        <span class="border-blue-cus border-bottom border-2 text-blue fw-bold font-24 text-center">
                            We develop programs for Windows, Web, and Mobile applications
                        </span>
                    </p>
                </div>
            </div>
            <div class=" px-lg-5 py-4 PartnersLogo-section" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                ata-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <div class="row">
                    <div class="col-12 owl-carousel programs-carousel">
                        <div class="item">
                            <img class="d-block partners-logo" src="../../../public/images/m-d-logo (4).png"
                                alt="GUI Solutions Lanka (Pvt) Ltd">
                        </div>
                        <div class="item">
                            <img class="d-block partners-logo" src="../../../public/images/m-d-logo (3).png"
                                alt="GUI Solutions Lanka (Pvt) Ltd">
                        </div>
                        <div class="item">
                            <img class="d-block partners-logo" src="../../../public/images/m-d-logo (6).png"
                                alt="GUI Solutions Lanka (Pvt) Ltd">
                        </div>
                        <div class="item">
                            <img class="d-block partners-logo" src="../../../public/images/m-d-logo (5).png"
                                alt="GUI Solutions Lanka (Pvt) Ltd">
                        </div>
                        <div class="item">
                            <img class="d-block partners-logo" src="../../../public/images/m-d-logo (1).png"
                                alt="GUI Solutions Lanka (Pvt) Ltd">
                        </div>
                        <div class="item">
                            <img class="d-block partners-logo" src="../../../public/images/m-d-logo (2).png"
                                alt="GUI Solutions Lanka (Pvt) Ltd">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="containerr-fluid mobile-worked-bg" id="mobileBg" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
        <div class="d-flex align-items-center mobile-work">
            <img src="../../../public/images/82993971.png" class="h-100 mobile-worked-image" alt="Mobile App"
                data-aos="fade-right" data-aos-anchor-placement="top-bottom" ata-aos-easing="ease-out-cubic"
                data-aos-duration="1400">
            <div class="col-12 col-lg-6 w-39 ranges-section px-4" data-aos="fade-left"
                data-aos-anchor-placement="top-bottom" ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
                <div class="mb-4">
                    <h5 class="text-blue fw-bold font-24 mb-2">
                        We Worked With Reputed Companies in The World
                    </h5>
                    <p class="font-16 lh-base text-dark">
                        We donec pulvinar magna id leoersi pellentesque impered dignissim rhoncus euismod euismod eros
                        vitae.
                    </p>
                </div>
                <div class="ranges">
                    <div class="range-group mb-4">
                        <div class="d-flex justify-content-between">
                            <h5 class="text-blue fw-bold text-uppercase mb-2 font-20">The standard Lorem Ipsum </h5>
                            <h5 class="text-blue fw-bold text-uppercase mb-2 font-20"><span id="count89">89</span>%</h5>
                        </div>
                        <div class="range w-auto">
                            <div class="range-count-89 rg-count"></div>
                        </div>
                    </div>
                    <div class="range-group mb-4">
                        <div class="d-flex justify-content-between">
                            <h5 class="text-blue fw-bold text-uppercase mb-2 font-20">The standard Lorem Ipsum </h5>
                            <h5 class="text-blue fw-bold text-uppercase mb-2 font-20"><span id="count50">50</span>%</h5>
                        </div>
                        <div class="range w-auto">
                            <div class="range-count-50 rg-count"></div>
                        </div>
                    </div>
                    <div class="range-group mb-4">
                        <div class="d-flex justify-content-between">
                            <h5 class="text-blue fw-bold text-uppercase mb-2 font-20">The standard Lorem Ipsum </h5>
                            <h5 class="text-blue fw-bold text-uppercase mb-2 font-20"><span id="count60">60</span>%</h5>
                        </div>
                        <div class="range w-auto">
                            <div class="range-count-60 rg-count"></div>
                        </div>
                    </div>
                    <div class="range-group mb-4">
                        <div class="d-flex justify-content-between">
                            <h5 class="text-blue fw-bold text-uppercase mb-2 font-20">The standard Lorem Ipsum </h5>
                            <h5 class="text-blue fw-bold text-uppercase mb-2 font-20"><span id="count90">90</span>%</h5>
                        </div>
                        <div class="range w-auto">
                            <div class="rangeCount90 rg-count"></div>
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
   
        this.initOwlCarousel();
        this.initScrollAnimations();
    }, 
    methods: {
        getServices() {
            this.isLoading = true;
           const route = this.$route.name;
          
            this.$store.dispatch("categoryData/getCategoryServices", {route})
            .then((response) => {
                if (response == 1) {

                    this.isLoading = false;
                     // Initialize Owl Carousel for projects
                    window.$('.custom-project').owlCarousel({
                        loop: true,
                        margin: 30,
                        autoplay: true,
                        speed: 4000,
                        dots: false,
                        nav: true,
                        items: 1,
                        autoplayTimeout: 4000,
                        autoplayHoverPause: true,
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


        initOwlCarousel() {
            // Initialize Owl Carousel for logos
            this.$nextTick(() => {
                window.$('.programs-carousel').owlCarousel({
                    loop: true,
                    margin: 30,
                    autoplay: true,
                    speed: 1000,
                    dots: false,
                    nav: false,
                    autoplayTimeout: 2000,
                    autoplayHoverPause: true,
                    items: 7,
                    responsive: {
                        0: {
                            items: 2
                        },
                        600: {
                            items: 4
                        },
                        1000: {
                            items: 6
                        }
                    }
                });

                // Initialize Owl Carousel for mobile app portfolio
                window.$('.mobile-app-carousel').owlCarousel({
                    loop: true,
                    margin: 30,
                    autoplay: true,
                    speed: 2000,
                    dots: false,
                    nav: false,
                    autoplayTimeout: 3000,
                    autoplayHoverPause: true,
                    items: 7,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 1
                        },
                        1000: {
                            items: 1
                        }
                    }
                });

               
            });
        },


        //   progress bars
        initScrollAnimations() {
            let countAnimationTriggered = false;

            window.addEventListener('scroll', () => {
                if (!countAnimationTriggered) {
                    const classToWidth = {
                        'range-count-89': '89%',
                        'range-count-50': '50%',
                        'range-count-60': '60%',
                        'rangeCount90': '90%'
                    };

                    Object.keys(classToWidth).forEach(className => {
                        const elements = document.getElementsByClassName(className);
                        for (let i = 0; i < elements.length; i++) {
                            setTimeout(() => {
                                elements[i].style.width = classToWidth[className];
                            }, i * 5000);
                        }
                    });

                    countAnimationTriggered = true;

                    this.animateCount(89, 5000, 'count89');
                    this.animateCount(50, 5000, 'count50');
                    this.animateCount(60, 5000, 'count60');
                    this.animateCount(90, 5000, 'count90');
                }
            });
        },
        animateCount(targetNumber, duration) {
            let count = 0;
            const interval = duration / targetNumber;

            const counter = setInterval(() => {
                if (count >= targetNumber) {
                    clearInterval(counter);
                } else {
                    count++;
                    // document.getElementById(elementId).textContent = count;
                }
            }, interval);
        }
    }
};


</script>
<style>
.mobile-app-carousel .owl-nav button.owl-next::before {
    color: white;
}

.mobile-app-carousel .owl-nav button.owl-prev::before {
    color: white;
}

.testimonial-carousel .owl-nav.disabled,
.custom-project .owl-nav.disabled {
    display: block !important;
    z-index: 3;
}

.testimonial-carousel .owl-nav button.owl-next,
.testimonial-carousel .owl-nav button.owl-prev,
.custom-project .owl-nav button.owl-next,
.custom-project .owl-nav button.owl-prev {
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

.custom-project .owl-nav button.owl-next {
    bottom: 10px;
    left: 20px !important;
}

.custom-project .owl-nav button.owl-prev {
    bottom: 10px;
    left: -4px;
}
</style>
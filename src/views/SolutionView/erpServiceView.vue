<template>
    <LoaderIcon :loading="isLoading" />
    <div class="content-head-image erp-head d-flex align-items-center">
        <div class="container-fluid">
            <div class="container">
                <h1 class="font-36 text-blue fw-bold">ERP Consultancy & Management <br>
                    Services</h1>
            </div>
        </div>
    </div>


    <div class="container-fluid mt-4 py-5" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7">
                    <h5 class="font-36 mb-4 fw-bold text-blue" data-aos="fade-right" data-aos-anchor-placement="top-bottom"
                        ata-aos-easing="ease-out-cubic" data-aos-duration="1400">ERP solution for
                        <span class="border-blue-cus border-bottom border-2">Retail Business</span> </h5>
                    <p class="font-16 text-black mb-cus mb-sm-4 line-hight-p">
                        Often, Organizations struggle to evaluate, select and implement the right ERP (Enterprise
                        Resource
                        Planning) solutions for their organization. GUI Solutions has the competency as a trusted
                        advisor
                        and consultants to provide the service to evaluate, select and implement the right ERP solution
                        for
                        an organization.
                    </p>
                    <p class="font-16 text-black line-hight-p">
                        Among developed and provided services by GUI, our ERP solutions consists of a fully integrated
                        comprehensive solution which covers the main core functionalities in an organization. Modules
                        incorporated with the solution will take care of your needs in the organization to automate
                        tasks and streamline processes
                    </p>
                </div>
                <div class="col-lg-5 col-sm-12" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                    ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
                    <img src="../../../public/images/ERP-solution.png" class="erp-img w-100 rounded-15" alt="">
                </div>
            </div>
        </div>
    </div>

    <div class="conatiner-fluid light-background-cus py-5 my-5" data-aos="fade-up"
    v-if="this.$store.state.categoryData.singleCategory.length > 0"
        data-aos-anchor-placement="top-bottom" ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
        <div class="container">
            <h5 class="fw-bold text-blue text-center font-36 mb-5">
                Main key <span class="border-blue-cus border-bottom border-2">Modules &nbsp; &nbsp;</span>
            </h5>
            <div class="row">
                <div class="col-lg-3 col-sm-6 col-6 col-md-4 d-flex align-items-center  flex-column gap-3 mb-3"
                    data-aos="fade-right" data-aos-anchor-placement="top-bottom" ata-aos-easing="ease-out-cubic"
                    data-aos-duration="1400" v-for="service in this.$store.state.categoryData.singleCategory.services"
                    v-bind:key="service.id">
                    <img class="modul-img" :src="service.image" alt="">
                    <h5 class="fw-bold font-24 text-dark text-center">
                        {{ service.title }}
                    </h5>
                    <p class="font-16 text-dark text-center line-hight-p">
                        {{ service.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid mb-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
        ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
        <div class="container">
            <h5 class="fw-bold text-blue text-center font-36 mb-5">
                Our Associated <span class="border-blue-cus border-bottom border-2">Services &nbsp; &nbsp;</span>
            </h5>
        </div>
        <div class="container" data-aos="fade-up" data-aos-anchor-placement="top-bottom" ata-aos-easing="ease-out-cubic"
            data-aos-duration="1400">
            <div class="row d-flex justify-content-center gap-lg-3">
                <div
                    class="col-lg-3 col-md-4 col-sm-4 col-6 col-md-4 align-items-center d-flex justify-content-center align-items-center">
                    <img class="w-50" src="../../../public/images/dynamics.png" alt="">
                </div>
                <div
                    class="col-lg-3 col-md-4 col-sm-4 col-6 col-md-4 align-items-center d-flex justify-content-center align-items-center">
                    <img class="w-50" src="../../../public/images/saperp.png" alt="">
                </div>
                <div
                    class="col-lg-3 col-md-4 col-sm-4 col-6 col-md-4 align-items-center d-flex justify-content-center align-items-center">
                    <img class="w-50" src="../../../public/images/busysoft.png" alt="">
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid light-background-cus py-5 mt-4" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7">
                    <h5 class="font-24 fw-bold text-blue" data-aos="fade-right" data-aos-anchor-placement="top-bottom"
                        ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
                        How it helps you
                    </h5>
                    <ul class="mt-4 erp-list" data-aos="fade-right" data-aos-anchor-placement="top-bottom"
                        ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
                        <li class="text-black-cus font-16 line-height-p mb-3 erp-list-li fw-500">Significant data will
                            be centralized
                            in the system to provide the easy access to the user</li>
                        <li class="text-black-cus font-16 line-height-p mb-3 erp-list-li fw-500">System is fully
                            compatible with
                            latest hardware components with new technologies.</li>
                        <li class="text-black-cus font-16 line-height-p mb-3 erp-list-li fw-500">Very user friendly
                            interactive user
                            interfaces are provided with the system</li>
                        <li class="text-black-cus font-16 line-height-p mb-3 erp-list-li fw-500">System can maintain
                            Stock items and
                            Non Stock in the same time</li>
                        <li class="text-black-cus font-16 line-height-p mb-3 erp-list-li fw-500">Stock can be transfer
                            branch to
                            branch through system</li>
                        <li class="text-black-cus font-16 line-height-p mb-3 erp-list-li fw-500">Special offers and
                            discounts can be
                            visible to entire branch network</li>
                        <li class="text-black-cus font-16 line-height-p mb-3 erp-list-li fw-500">Feature to the user to
                            deal with
                            international customers</li>
                        <li class="text-black-cus font-16 line-height-p mb-3 erp-list-li fw-500">Consignment Items can
                            manage through
                            the same system</li>
                    </ul>
                </div>
                <div class="col-lg-5 mx-auto text-center">
                    <img src="../../../public/images/rest.png" alt="REST" class="w-100 w-md-50" data-aos="fade-left"
                        data-aos-anchor-placement="top-bottom" ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
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
            isLoading: false,
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

            this.$store.dispatch("categoryData/getCategoryServices", { route })
                .then((response) => {
                    if (response == 1) {
                        this.isLoading = false;
                        // console.log(this.$store.state.categoryData.singleCategory.services);
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
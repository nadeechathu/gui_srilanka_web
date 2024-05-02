<template>
    <LoaderIcon :loading="isLoading" />
    <div class="content-head-image reaq-head-image d-flex align-items-center">
        <div class="container-fluid">
            <div class="container">
                <h1 class="font-36 text-blue contact-us fw-bold">Request a Call</h1>
            </div>
        </div>
    </div>

    <div class="container-fluid my-4" data-aos-anchor-placement="top-bottom" ata-aos-easing="ease-out-cubic"
        data-aos-duration="1400">
        <div class="container">
            <h2 class="font-36 text-blue fw-bold mb-5 text-center" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" ata-aos-easing="ease-out-cubic" data-aos-duration="1400">Send a
                <span class="border-blue-cus border-bottom border-2">Message&nbsp; &nbsp;</span>
            </h2>
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-6 col-sm-12 col-12">
                    <form action="" method="post" @submit.prevent="submitForm">
                        <input type="hidden" v-model="inputData.request_method" name="request_method"
                            value="Request a Call">
                        <div class="row" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                            ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
                            <div class="col-lg-6">
                                <input class="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-2 border-muted"
                                    type="text" placeholder="Your Name:*" aria-label="default input example"
                                    v-model="inputData.name" name="name" required>
                            </div>
                            <div class="col-lg-6 pt-lg-0 pt-3">
                                <input class="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-2 border-muted"
                                    type="email" placeholder="Your Email:*" aria-label="default input example"
                                    v-model="inputData.email" name="email" required>
                            </div>
                            <div class="col-lg-6 pt-3">
                                <input class="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-2 border-muted"
                                    type="text" placeholder="Your Phone:*" aria-label="default input example"
                                    v-model="inputData.phone_number" name="phone_number" required>
                            </div>
                            <div class="col-lg-6 pt-3">
                                <select class="form-select py-3 text-dark fw-bolder font-14 rounded-2 border-muted "
                                    v-model="inputData.inquiry_type_id" name="inquiry_type_id"
                                    aria-label="Default select example" required>
                                    <option value="" disabled selected>Inquiry:*</option>
                                    <option value="1">Mobile App Development</option>
                                    <option value="2">ERP Consultancy</option>
                                    <option value="3">eCommerce and Web Development</option>
                                    <option value="4">Business Software Solution</option>
                                    <option value="5">Become A Partner</option>
                                    <option value="6">General</option>
                                </select>
                            </div>
                            <div class="col-12 pt-4">
                                <textarea
                                    class="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-2 border-muted"
                                    type="text" placeholder="Message:*" aria-label="default input example" rows="3"
                                    name="message" v-model="inputData.message" required></textarea>
                            </div>
                            <div class="col-12 px-lg-3 pt-4">
                                <button
                                    class="w-100 fw-bolder text-white btn border-0 font-16 py-lg-3 py-2 bg-blue1 text-center rounded-pill hvr-btn">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LoaderIcon from '@/components/icons/loader-icon.vue';
import Swal from 'sweetalert2';

export default {
    components: {
        LoaderIcon
    },
    data() {
        return {
            inputData: {
                name: '',
                email: '',
                phone_number: '',
                inquiry_type_id: '',
                message: '',
                request_method: 'Request a Call'
            },
            isLoading: false,
            message: '',
            isError: false,
            isSubmitted: true
            
        };
    },
    computed: {
    },
    methods: {

        submitForm() {
            this.isLoading = true;
            let name = this.inputData.name;
            let email = this.inputData.email;
            let phone_number = this.inputData.phone_number;
            let inquiry_type_id = this.inputData.inquiry_type_id;
            let message = this.inputData.message;
            let request_method = this.inputData.request_method;

            this.$store.dispatch("inquiryForm/inquirySubmitForm", { name, email, phone_number, inquiry_type_id, message, request_method })
                .then((response) => {
                    if (response[0] == 1) {
                        this.isLoading = false;
                        this.inputData = {
                            name: '',
                            email: '',
                            phone_number: '',
                            inquiry_type_id: '',
                            message: '',
                        };

                        this.message = response[1];
                        this.isError = false;
                        this.isSubmitted = true;
                        console.log(this.message);

                        // Success
                        Swal.fire({
                            icon: 'success',
                            title: 'Success!',
                            text: this.message,
                        });

                    } else {
                        this.isLoading = false;

                        this.message = "Failed to submit the inquiry. Please try again.";
                        this.isError = true;

                        // Failure
                        Swal.fire({
                            icon: 'error',
                            title: 'Error!',
                            text: this.message,
                        });
                    }
                })
                .catch((error) => {

                    this.isLoading = false;
                    console.error("Inquiry response error:", error);
                    this.message = `Error submitting the form: ${error.message}`;
                    this.isError = true;

                    // Error
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: this.message,
                    });
                });

        }
    }
};
</script>
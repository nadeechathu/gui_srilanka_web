<template>
  <LoaderIcon :loading="isLoading" />
  <div class="content-head-image partner-head-bg d-flex align-items-center">
    <div class="container-fluid">
      <div class="container">
        <h1 class="font-36 text-blue fw-bold">Become Our Partner
        </h1>
      </div>
    </div>
  </div>

  <div class="container-fluid">
    <div class="container">
      <h1 class="font-36 fw-bold text-blue mb-3" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
        ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
        Partner <span class="border-blue-cus border-bottom border-2">Benefits &nbsp;
          &nbsp;</span>
      </h1>
      <div class="row justify-content-center align-items-center" data-aos="fade-right"
        data-aos-anchor-placement="top-bottom" ata-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <div class="col-lg-6 col-sm-12 col-12 mb-cus-m">
          <p class="font-16 text-black mb-4 line-hight-p">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>
          <p class="font-16 text-black line-hight-p">
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
            more
            recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div class="col-lg-6 col-sm-12 col-12">
          <img class="d-block partners-logo w-100" src="../../../public/images/partner-benefits.png"
            alt="GUI Solutions Lanka (Pvt) Ltd">
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid my-5">
    <div class="container">
      <div class="row gap-20">
        <div class="col-lg-4 col-sm-12 col-12 mb-cus-m" data-aos="fade-right" data-aos-anchor-placement="top-bottom"
          ata-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <div class="module shadow rounded d-flex justify-content-center align-items-center flex-column p-3 h-100">
            <img class="d-block partners-logo mb-3" src="../../../public/images/icons/our-partner (3).png"
              alt="GUI Solutions Lanka (Pvt) Ltd">
            <h5 class="text-blue font-20 text-center mb-2 fw-bold">
              Reach New Aaudiences
            </h5>
            <p class="font-16 text-black line-hight-p text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-12 col-12 mb-cus-m" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
          ata-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <div class="module shadow rounded d-flex justify-content-center align-items-center flex-column p-3 h-100">
            <img class="d-block partners-logo mb-3" src="../../../public/images/icons/our-partner (2).png"
              alt="GUI Solutions Lanka (Pvt) Ltd">
            <h5 class="text-blue font-20 text-center mb-2 fw-bold">
              Drive Revenue
            </h5>
            <p class="font-16 text-black line-hight-p text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-12 col-12 mb-cus-m" data-aos="fade-left" data-aos-anchor-placement="top-bottom"
          ata-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <div class="module shadow rounded d-flex justify-content-center align-items-center flex-column p-3 h-100">
            <img class="d-block partners-logo mb-3" src="../../../public/images/icons/our-partner (1).png"
              alt="GUI Solutions Lanka (Pvt) Ltd">
            <h5 class="text-blue font-20 text-center mb-2 fw-bold">
              Advance Your Business
            </h5>
            <p class="font-16 text-black line-hight-p text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid my-4" data-aos-anchor-placement="top-bottom" ata-aos-easing="ease-out-cubic"
    data-aos-duration="1400">
    <div class="container">
      <h2 class="font-36 text-blue fw-bold mb-5 text-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
        ata-aos-easing="ease-out-cubic" data-aos-duration="1400">Become a <span
          class="border-blue-cus border-bottom border-2">Our Partner&nbsp;</span></h2>
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-6 col-sm-12 col-12">
          <form @submit.prevent="submitForm" method="post">
            <div class="row" data-aos="fade-up" data-aos-anchor-placement="top-bottom" ata-aos-easing="ease-out-cubic"
              data-aos-duration="1400">
              <div class="col-lg-6">
                <input class="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-2 border-muted" type="text"
                  placeholder="Full Name:*" aria-label="default input example" name="name"
                  v-model="partnerFormData.name">
              </div>
              <div class="col-lg-6 pt-lg-0 pt-3">
                <input class="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-2 border-muted" type="text"
                  placeholder="Tiitle:*" aria-label="default input example" name="title"
                  v-model="partnerFormData.title">
              </div>
              <div class="col-lg-6 pt-3">
                <input class="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-2 border-muted" type="text"
                  placeholder="Company:*" aria-label="default input example" name="company"
                  v-model="partnerFormData.company">
              </div>
              <div class="col-lg-6 pt-3">
                <input class="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-2 border-muted" type="text"
                  placeholder="Work Email:*" aria-label="default input example" name="email"
                  v-model="partnerFormData.email">
              </div>
              <div class="col-lg-6 pt-3">
                <input class="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-2 border-muted" type="text"
                  placeholder="Work Phone:*" aria-label="default input example" name="phone_number"
                  v-model="partnerFormData.phone_number">
              </div>
              <div class="col-lg-6 pt-3">
                <input class="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-2 border-muted" type="text"
                  placeholder="Website:*" aria-label="default input example" name="website"
                  v-model="partnerFormData.website">
              </div>
              <div class="col-12 pt-4">
                <textarea class="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-2 border-muted" type="text"
                  placeholder="Details:*" aria-label="default input example" rows="3" name="details"
                  v-model="partnerFormData.details"></textarea>
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
  name: "OurPartnerView",
  components: {
    LoaderIcon
  },
  data() {
    return {
      partnerFormData: {
        name: '',
        title: '',
        email: '',
        phone_number: '',
        company: '',
        website: '',
        details: '',
      },
      isLoading: false,
      message: '',
      isError: false,
      isSubmitted: false
    }
  },
  computed: {},
  methods: {
    submitForm() {
      this.isLoading = true;
      let name = this.partnerFormData.name;
      let title = this.partnerFormData.title;
      let email = this.partnerFormData.email;
      let phone_number = this.partnerFormData.phone_number;
      let company = this.partnerFormData.company;
      let website = this.partnerFormData.website;
      let details = this.partnerFormData.details;

      this.$store.dispatch("inquiryForm/partnerSubmitForm", { name, title, email, phone_number, company, website, details })
        .then((response) => {
          if (response[0] == 1) {
            this.isLoading = false;
            this.partnerFormData = {
              name: '',
              title: '',
              email: '',
              phone_number: '',
              company: '',
              website: '',
              debitis: '',
            };

            this.message = response[1];
            this.isError = false;
            this.isSubmitted = true;
            console.log(this.message);

            // Show success alert
            this.$nextTick(() => {
              Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: this.message,
              });
            });

          } else {
            this.isLoading = false;

            this.message = response[0];
            this.isError = true;
            console.log(response[0]);

            // Show error alert
            this.$nextTick(() => {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: this.message,
              });
            });
          }
        })
        .catch((error) => {

          this.isLoading = false;
          console.error("Partner response error:", error);
          this.message = `Error submitting the form: ${error.message}`;
          this.isError = true;

          // Show error alert
          this.$nextTick(() => {
            Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: this.message,
            });
          });
        });
    }


  }
};
</script>
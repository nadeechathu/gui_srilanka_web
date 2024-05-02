<template>
   <AppSlider />
   <!-- About us section -->
   <LoaderIcon :loading="isLoading" />
   <div class="container-fluid bg-light-white pt-5 about-section">
      <div class="container">
         <div class="row justify-content-center">
            <div class="col-lg-11 text-center">
               <h1 class="text-blue font-36 fw-bold text-center pb-3">
                  About GUI Solution <span class="gradient-text">Lanka</span>
               </h1>
               <p class="text-dark fw-light font-16 lh-base">
                  GUI Solutions Lanka (Pvt) Ltd is a global Software Development company in Sri Lanka, providing
                  software solutions to enterprises worldwide since 2011. We believe that building a powerful
                  corporation in this globally competitive business environment means being able to anticipate current
                  industry characteristics and react quickly to changing the business conditions to achieve maximum
                  benefits to every entity in the industry.
               </p>
            </div>
            <div class="row justify-content-center pt-4">
               <div class="col-lg-3 col-sm-6 pt-3">
                  <router-link to="about" @click="scrollToTop">
                     <div class="hvr-wobble-horizontal px-4 py-2 bg-blue1 w-100 text-center rounded-pill ">
                        <p class="text-white font-16 fw-bold">
                           Read More
                        </p>
                     </div>
                  </router-link>
               </div>
            </div>

         </div>
      </div>
      <div class="row pt-lg-5 pt-4">
         <div class="col-lg-3 col-sm-6 pt-3 " data-aos="fade-up" data-aos-anchor-placement="top-bottom"
            ata-aos-easing="ease-out-cubic" data-aos-duration="1400" v-for="category in this.$store.state.categoryData.categoryData" v-bind:key="category.id">
            <router-link :to="category.slug">
               <div class="rounded-3 gradient-background1  w-100 py-4 shadow-sm px-3 hvr-shrink">
                  <div class="row  align-items-center">
                     <div class="col-4">
                        <img class="d-block w-100" :src="category.images"
                           alt="GUI Solutions Lanka (Pvt) Ltd">
                     </div>
                     <div class="col-8">
                        <p class="fw-bolder font-16 text-dark lh-base">{{category.name}}
                        </p>
                     </div>
                  </div>
               </div>
            </router-link>
         </div>
      </div>
   </div>
   <div class="container-fluid ">
      <div class="row">
         <div class="col-12 px-0">
            <img class="d-block w-100" src="../../../public/images/about-bg.png" alt="GUI Solutions Lanka (Pvt) Ltd">
         </div>
      </div>
   </div>
   <!-- Service Section -->
   <div class="container-fluid  py-5 service-section">
      <div class="container pt-lg-5">
         <div class="row justify-content-center">
            <div class="col-lg-6 text-center">
               <img class="d-block w-100 " src="../../../public/images/tablet_and_laptop.png"
                  alt="GUI Solutions Lanka (Pvt) Ltd" data-aos="flip-left" data-aos-easing="ease-out-cubic"
                  data-aos-duration="1900">
            </div>
            <div class="col-lg-6 pt-lg-0 pt-3">
               <h2 class="text-blue font-36 fw-bold pb-2">
                  Built With Best<span class="gradient-text"> Features </span> <br>& Good UX
               </h2>
               <p class="text-dark fw-500 font-16 lh-base">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
               </p>
               <div class="row pt-3">
                  <div class="col-lg-1 col-sm-1 col-2">
                     <img class="d-block w-100" src="../../../public/images/icon1.png" alt="GUI Solutions Lanka (Pvt) Ltd">
                  </div>
                  <div class="col-lg-11  col-10 ps-lg-0">
                     <p class="font-14 fw-bolder text-dark">Lorem Ipsum is simply dummy text of the printing.</p>
                  </div>
               </div>
               <div class="row pt-2">
                  <div class="col-lg-1 col-sm-1 col-2">
                     <img class="d-block w-100" src="../../../public/images/icon2.png" alt="GUI Solutions Lanka (Pvt) Ltd">
                  </div>
                  <div class="col-lg-11  col-10 ps-lg-0">
                     <p class="font-14 fw-bolder text-dark">Lorem Ipsum is simply dummy text of the printing.</p>
                  </div>
               </div>
               <div class="row pt-2">
                  <div class="col-lg-1 col-sm-1 col-2">
                     <img class="d-block w-100" src="../../../public/images/icon3.png" alt="GUI Solutions Lanka (Pvt) Ltd">
                  </div>
                  <div class="col-lg-11  col-10 ps-lg-0">
                     <p class="font-14 fw-bolder text-dark">Lorem Ipsum is simply dummy text of the printing.</p>
                  </div>
               </div>
            </div>
         </div>
         <div class="row justify-content-center pt-5">
            <div class="col-lg-7 ">
               <h2 class="text-blue font-36 fw-bold py-lg-5 pb-3">
                  We Advise You, You <span class="gradient-text"> Call the </span> <br> Right Decision!
               </h2>
               <div class="row" id="counting-section">
                  <div class="col-lg-6 col-6">
                     <div class="row">
                        <div class="col-lg-2 col-sm-2  col-3 pe-0">
                           <img class="d-block w-100" src="../../../public/images/icon-1-1.png"
                              alt="GUI Solutions Lanka (Pvt) Ltd">
                        </div>
                        <div class="col-lg-10 col-9">
                           <h4 class="fw-bold font-30 text-blue"> {{ count1 }} + </h4>
                           <p class="fw-bold font-18 text-dark text-uppercase">Project</p>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-6 col-6">
                     <div class="row">
                        <div class="col-lg-2 col-sm-2  col-3 pe-0">
                           <img class="d-block w-100" src="../../../public/images/icon-1-2.png"
                              alt="GUI Solutions Lanka (Pvt) Ltd">
                        </div>
                        <div class="col-lg-10 col-9">
                           <h4 class="fw-bold font-30 text-blue">{{ count2 }} + </h4>
                           <p class="fw-bold font-18 text-dark text-uppercase">Satisfied Customers</p>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-6  col-6 pt-4">
                     <div class="row">
                        <div class="col-lg-2 col-sm-2  col-3 pe-0">
                           <img class="d-block w-100" src="../../../public/images/icon-1-3.png"
                              alt="GUI Solutions Lanka (Pvt) Ltd">
                        </div>
                        <div class="col-lg-10 col-9">
                           <h4 class="fw-bold font-30 text-blue">{{ count3 }} + </h4>
                           <p class="fw-bold font-18 text-dark text-uppercase">countries</p>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-6 col-6 pt-4">
                     <div class="row">
                        <div class="col-lg-2 col-sm-2  col-3 pe-0">
                           <img class="d-block w-100" src="../../../public/images/icon-1-4.png"
                              alt="GUI Solutions Lanka (Pvt) Ltd">
                        </div>
                        <div class="col-lg-10 col-9">
                           <h4 class="fw-bold font-30 text-blue">{{ count4 }} + </h4>
                           <p class="fw-bold font-18 text-dark text-uppercase">Awards Winning</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-lg-5 col-sm-7 pt-lg-0 pt-4 text-end">
               <img class="d-block w-100" src="../../../public/images/mobiles.png" alt="GUI Solutions Lanka (Pvt) Ltd"
                  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1900">
            </div>
         </div>
      </div>
   </div>
   <!-- Global Expansion section -->
   <div class="container-fluid location-section py-5">
      <div class="container">
         <div class="row justify-content-lg-end marign-top-10 ">
            <div class="col-lg-4 col-sm-5 align-items-center d-none d-sm-block">
               <h2 class="text-blue font-36 fw-bold">Global <span class="gradient-text">Expansion</span> </h2>
               <p class="text-dark fw-light font-15 ms-3 lh-base">
                  GUI Solutions Lanka entered the international software industry as a partner company of GUI Solutions
                  Pte Ltd Singapore, which was established in Singapore in 2001. As they offer the best software
                  solutions to move their customers to the highest level of their business for the past 17 years, by
                  accommodating a variety of industries in Singapore, we also could be a part of it and develop our
                  business abilities to an advanced level.
                  <br> <br> Concerning the expansion of the business GUI Singapore and GUI Sri Lanka Joined together in
                  succeeding Software Projects in the Asian region, European region, and Australia.
               </p>
            </div>
         </div>
      </div>
   </div>
   <div class="container-fluid  pt-5 d-block d-sm-none">
      <div class="row  marign-top-10">
         <div class="  col-12 ">
            <h2 class="text-blue font-36 fw-bold">Global <span class="gradient-text">Expansion</span> </h2>
            <p class="text-dark fw-light font-15 ms-3">
               GUI Solutions Lanka entered the international software industry as a partner company of GUI Solutions
                  Pte Ltd Singapore, which was established in Singapore in 2001. As they offer the best software
                  solutions to move their customers to the highest level of their business for the past 17 years, by
                  accommodating a variety of industries in Singapore, we also could be a part of it and develop our
                  business abilities to an advanced level.
                  <br> <br>Concerning the expansion of the business GUI Singapore and GUI Sri Lanka Joined together in
                  succeeding Software Projects in the Asian region, European region, and Australia.
            </p>
         </div>
      </div>
   </div>
   <!-- Request section -->
   <div class="container-fluid mines-mt-3">
      <div class="row px-lg-5  align-items-center">
         <div class="col-lg-8 col-sm-12 py-5">
            <h2 class="text-blue font-36 fw-bold pt-5 pb-2">Request a Call <span class="gradient-text">Back</span></h2>
            <p class="text-dark fw-light font-16 lh-base">
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <form action="" method="post" @submit.prevent="submitForm">
               <input type="hidden" v-model="inputData.request_method" name="request_method" value="Inquiry">
            <div class="row pt-3">
               <div class="col-lg-6">
                  <select class="form-select py-3 text-dark fw-bolder font-14 rounded-2 border-muted "
                     aria-label="Default select example" v-model="inputData.inquiry_type_id" required>
                     <option value="" disabled selected>How can we help:*</option>
                     <option value="1">Mobile App Development</option>
                     <option value="2">ERP Consultancy</option>
                     <option value="3">eCommerce and Web Development</option>
                     <option value="4">Business Software Solution</option>
                     <option value="5">Become A Partner</option>
                     <option value="6">General</option>
                  </select>
               </div>
               <div class="col-lg-6 pt-lg-0 pt-3">
                  <input class="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-2 border-muted" type="email"
                     placeholder="Email:*" aria-label="default input example" v-model="inputData.email" required>
               </div>
               <div class="col-lg-6 pt-3">
                  <input class="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-2 border-muted" type="text"
                     placeholder="Phone Number:*" aria-label="default input example" v-model="inputData.phone_number" required>
               </div>
               <div class="col-lg-6 pt-3">
                  <input class="form-control py-3 h-55 text-dark fw-bolder font-14 rounded-2 border-muted" type="text"
                     placeholder="Your Name:*" aria-label="default input example" v-model="inputData.name" required>
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
         <div class="col-lg-4  col-sm-4 text-sm-center d-md-none d-lg-block">
            <img class="d-block w-100 " src="../../../public/images/requset-bg.png" alt="GUI Solutions Lanka (Pvt) Ltd"
               data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
         </div>
      </div>
   </div>
   <!-- client logo section -->
   <div
      class="container-fluid px-lg-5 py-lg-4 py-2 clientLogo-section border border-light1 border-top border-bottom border-end-0 border-start-0">
      <div class="row">
         <div class="col-12 client-logo-carousel  owl-carousel">
            <div class="item">
               <img class="d-block" src="../../../public/images/logo-01.png" alt="GUI Solutions Lanka (Pvt) Ltd">
            </div>
            <div class="item">
               <img class="d-block" src="../../../public/images/logo-02.png" alt="GUI Solutions Lanka (Pvt) Ltd">
            </div>
            <div class="item">
               <img class="d-block" src="../../../public/images/logo-03.png" alt="GUI Solutions Lanka (Pvt) Ltd">
            </div>
            <div class="item">
               <img class="d-block" src="../../../public/images/logo-04.png" alt="GUI Solutions Lanka (Pvt) Ltd">
            </div>
            <div class="item">
               <img class="d-block" src="../../../public/images/logo-05.png" alt="GUI Solutions Lanka (Pvt) Ltd">
            </div>
            <div class="item">
               <img class="d-block" src="../../../public/images/logo-06.png" alt="GUI Solutions Lanka (Pvt) Ltd">
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import 'jquery';
import 'owl.carousel/dist/owl.carousel.min';
import AppSlider from '../../components/sliders/AppSlider.vue';
import LoaderIcon from "../../components/icons/loader-icon.vue";
import Swal from 'sweetalert2';

export default {
   name: 'HomeView',
   components: {
      AppSlider,
      LoaderIcon
   },
   data() {
      return {
         products: [],
         count1: 0,
         count2: 100,
         count3: 0,
         count4: 0,
         inputData: {
                name: '',
                email: '',
                phone_number: '',
                inquiry_type_id: '',
                message: '',
                request_method: 'Inquiry'
            },
         isLoading: false,
         message: '',
         isError: false
      };
   },
   created() {
      this.setToken();
      this.setCategories();
      this.$store.dispatch("careersData/getCareers");
   },

   mounted() {

      // Initialize Owl Carousel
      this.$nextTick(() => {

         window.$('.client-logo-carousel').owlCarousel({
            loop: true,
            margin: 30,
            autoplay: true,
            speed: 1000,
            dots: false, // Remove the semicolon and fix the syntax
            nav: false, // Remove the semicolon and fix the syntax
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
                  items: 7
               }

            }
         });
         // Call the count function with parameters for each counter
         this.count("count1", 0, 400, 3000);
         this.count("count2", 100, 50, 2500);
         this.count("count3", 0, 40, 3000);
         this.count("count4", 50, 140, 3000);
      });




   },
   methods: {

      setToken() {
        if(this.$store.state.token == null) {
            this.$store.dispatch("getToken");
        }
      },

      setCategories() {
         this.isLoading = true;
         this.$store.dispatch("categoryData/getCategories")
         .then((response) => {
            if (response == 1) {
                this.isLoading = false;
            } else {
                this.isLoading = true;
            }
            })
            .catch((error) => {
            this.isLoading = false;
            console.error("Category response error:", error);
            });
      },

      setSlug(categorySlug) {
         // const slug = '/' + categorySlug;
         console.log(categorySlug);
      },

      count(id, start, end, duration) {
         let current = start;
         const range = end - start;
         const increment = end > start ? 1 : -1;
         const step = Math.abs(Math.floor(duration / range));
         const timer = setInterval(() => {
            current += increment;
            this[id] = current;
            if (current === end) {
               clearInterval(timer);
            }
         }, step);
      },

      submitForm() {
            this.isLoading = true;
            let name = this.inputData.name;
            let email = this.inputData.email;
            let phone_number = this.inputData.phone_number;
            let inquiry_type_id = this.inputData.inquiry_type_id;
            let message = this.inputData.message;
            let request_method = this.inputData.request_method;

            this.$store.dispatch("inquiryForm/inquirySubmitForm", {name, email, phone_number, inquiry_type_id, message, request_method})
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
                
                this.message = "Your inquiry has been successfully submitted.";
                this.isError = false;

                // Success
                Swal.fire({
                  icon: 'success',
                  title: 'Success!',
                  text: this.message,
                  });

            } else {
                this.isLoading = false;

                this.message = response[1];
                this.isError = true;
                // error
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

            // error
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
<template>
<canvas id="world" width="auto" height="auto"></canvas>
   <div class="container-fluid  gradient-background2 py-2"></div>
   <div class="container-fluid header-section py-lg-3 bg-white">
      <div class="container pt-lg-3">
         <div class="row">
            <div class="col-lg-3 col-sm-5 col-8 webiiste-logo">
               <router-link to="/" class="" title="GUI Solutions Lanka (Pvt) Ltd | Home page"> <img
                     class="d-block w-100" src="../../../public/images/logo.png"
                     alt="GUI Solutions Lanka (Pvt) Ltd"></router-link>
            </div>
            <div class="col-lg-9">


               <nav class="navbar navbar-expand-lg ">
                  <button class="navbar-toggler border-dark py-2" type="button" data-bs-toggle="collapse"
                     data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                     aria-label="Toggle navigation">
                     <i class="fa fa-bars text-dark"></i>
                  </button>
                  <div class="collapse navbar-collapse justify-content-end pt-1" id="navbarNav">
                     <ul class="navbar-nav nav-custom">
                        <li class="nav-item pe-4">
                           <router-link to="/" active-class="active"
                              class="nav-link font-15 fw-bolder text-blue">Home</router-link>
                        </li>
                        <li class="nav-item pe-4">
                           <router-link to="/about" active-class="active"
                              class="nav-link font-15 fw-bolder text-blue">About Us</router-link>
                        </li>
                        <li class="nav-item dropdown pe-4" @mouseover="showDropdown" @mouseleave="hideDropdown">
                           <a class="nav-link dropdown-toggle font-15 fw-bolder text-blue" href="#" id="navbarDropdown"
                              role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Our Solutions
                           </a>
                           <ul class="dropdown-menu" aria-labelledby="navbarDropdown" ref="dropdownMenu" v-if="this.$store.state.categoryData != null">
                              <li v-for="category in this.$store.state.categoryData.categoryData" v-bind:key="category.id">
                                 <router-link :to="category.slug"
                                    class="nav-link font-14 fw-500 text-dark  dropdown-item">{{category.name}}
                                 </router-link>
                              </li>
                           </ul>
                        </li>
                        <li class="nav-item pe-2">
                           <router-link to="/contact" active-class="active"
                              class="nav-link font-15 fw-bolder text-blue ">Contact</router-link>
                        </li>
                        <li class="  nav-item ps-5 text-lg-end text-center">
                           <router-link to="/request-call"
                              class="hvr-wobble-horizontal font-15 fw-bolder text-blue rounded-pill px-4 py-2 border-blue ">Request
                              a Call</router-link>


                        </li>
                     </ul>
                  </div>
               </nav>





            </div>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   methods: {
      showDropdown(event) {
         const dropdownMenu = this.$refs.dropdownMenu;
         event.currentTarget.classList.add('show');
         dropdownMenu.classList.add('show');
      },
      hideDropdown(event) {
         const dropdownMenu = this.$refs.dropdownMenu;
         event.currentTarget.classList.remove('show');
         dropdownMenu.classList.remove('show');
      }
   },
   data() {
      return {
         isHomePage: window.location.href === 'https://guiweb.demoguisrilanka.com/' || window.location.href === 'https://localhost:8080/'
      };
   },
   created() {
      this.$store.dispatch("categoryData/getCategories");
   }
};
</script>

<style>
.show {
   display: block !important;
}

.dropdown-menu .dropdown-item {
   padding: 5px;
}

.dropdown-menu a:hover {
   background-color: #453CD6;
   color: #fff;
}

.dropdown-menu {
   padding: 0 !important;
}
</style>
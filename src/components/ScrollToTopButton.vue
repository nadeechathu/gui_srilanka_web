<!-- ScrollToTopButton.vue -->
<template>
  <button v-if="showButton" @click="scrollToTop" id="scroll-to-top-btn" class="border-0">
  <i class="fa fa-angle-up fs-4 icon-bottom"></i>
  </button>
</template>

<script>
export default {
  data() {
    return {
      showButton: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showButton = window.pageYOffset > 100; // Adjust 100 to your preference
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style scoped>
#scroll-to-top-btn {
  position: fixed;
  
  right: 20px;
 
 
  cursor: pointer;
  width: 35px;
  height: 35px;
  
  bottom: 20px;
 
  border-radius: 50%;
  background-color: #333182 ;
 
  color: rgb(255 255 255);
  text-align: center;
  transition: 500ms;
  z-index: 10;
}

</style>

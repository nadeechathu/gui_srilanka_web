<template>
  
<div class="container-fluid py-3  position-fixed bottom-0 cookie-policy-alert" v-if="!accepted" >
   <div class="container">
      <div class="row justify-content-center">
         <div class="col-lg-8 col-sm-9">
            <p class="font-16  fw-500 text-white pt-2 pb-lg-0 pb-sm-0 pb-3 text-lg-start text-sm-start text-center"><span class="cookie">🍪</span> This website uses cookies to ensure you get the best experience on our website.</p>
         </div>
         <div class="col-lg-2 col-sm-3">
            <button class=" px-4 py-2 gradient-background w-100  fw-500 text-white font-14  text-center rounded-3 hvr-grow" @click="acceptCookies">Accept</button>
         </div>
      </div>
   </div>
</div>

  
</template>

<script>
import Cookies from 'js-cookie';

export default {
  data() {
    return {
      accepted: false
    };
  },
  mounted() {
  
    this.accepted = Cookies.get('cookies_accepted') === 'true';
  },
  methods: {
    acceptCookies() {
     
      Cookies.set('cookies_accepted', 'true', { expires: 365 });  
      this.accepted = true;
    }
  }
};
</script>

<style scoped>
.cookie-policy-alert {
   width: 100%;
    position: fixed;
    bottom: 0;
     background-color: #333;
    color: #fff;
    padding: 15px 5em;
}
.cookie-policy-alert button {
  background-color: #4b47b9;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 3px;
}
</style>


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import customN from  '../public/css/web-custom-N.css'
import customResponsiveN from  '../public/css/web-custom-responsive-N.css'
import customP from  '../public/css/web-custome-p.css'
import customResponsiveP from  '../public/css/web-custome-p-responsive-p.css'
import bootstrap from 'bootstrap'
import OwlCarousel from 'vue-owl-carousel';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import customC from  '../public/css/web-custom-C.css';
import store from './store'


createApp(App).use(store).use(router).use(customN).use(customResponsiveN).use(customP).use(customResponsiveP).use(customC).use(OwlCarousel).use(bootstrap).mount('#app')

// Initialize AOS
AOS.init();

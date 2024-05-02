<template>
   <AppHeader />
    <router-view />
    <AppFooter />
<ScrollToTopButton />
    <CookiePolicyAlert  />
</template>

<script>
import AppHeader from './components/headers/AppHeader.vue' 
import AppFooter from '../src/components/footers/AppFooter.vue' 
import CookiePolicyAlert  from '../src/components/cookiesPolicy/CookiePolicyAlert.vue' 
import ScrollToTopButton   from '../src/components/ScrollToTopButton.vue' 

export default {
  name: 'HomeView',
  components: {
    AppHeader,
    AppFooter,
    CookiePolicyAlert,
    ScrollToTopButton,
  }
}
</script>
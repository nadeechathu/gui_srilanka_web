import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
 
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutUsView/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
   
    component: () => import('../views/ContactView/ContactView.vue')
  },
  {
    path: '/request-call',
    name: 'request-call',
   
    component: () => import('../views/ContactView/RequestCallView.vue')
  },
  {
    path: '/erp-solution-for-retail-business',
    name: 'erp-solution-for-retail-business',
   
    component: () => import('../views/SolutionView/erpServiceView.vue')
  },
  {
    path: '/mobile-app-development',
    name: 'mobile-app-development',
 
    component: () => import('../views/SolutionView/MobileAppServicesView.vue')
  },
  {
    path: '/ecommerce-website-srilanka',
    name: 'ecommerce-website-srilanka',
 
    component: () => import('../views/SolutionView/ECommerceView.vue')
  },
  {
    path: '/custom-software-solutions',
    name: 'custom-software-solutions',
 
    component: () => import('../views/SolutionView/BusinessSoftwareView.vue')
  },
  {
    path: '/industries',
    name: 'industries',
 
    component: () => import('../views/IndustriesView/IndustriesView.vue')
  },

  // AboutUsView

  {
    path: '/awards-and-recognitions',
    name: 'awards-and-recognitions',
 
    component: () => import('../views/AdditionalPageViews/AwardsRecognitionsView.vue')
  },
 

  {
    path: '/blogs',
    name: 'blogs',
 
    component: () => import('../views/BlogsView/BlogsView.vue')
  },
  {
    path: '/blog/:slug',
    name: 'single-blog',
 
    component: () => import('../views/BlogsView/SingleBlogView.vue')
  },
  {
    path: '/latest-news',
    name: 'latest-news',
 
    component: () => import('../views/AdditionalPageViews/LatestNewsView.vue')
  },
  {
    path: '/conversational-eCommerce-webinar',
    name: 'conversational-eCommerce-webinar',
 
    component: () => import('../views/AdditionalPageViews/ConversationalWebinarView.vue')
  },

  {
    path: '/career',
    name: 'career',
 
    component: () => import('../views/CareersView/CareersView.vue')
  },

  {
    path: '/careers/:slug',
    name: 'careers',
 
    component: () => import('../views/CareersView/SingleCareersView.vue')
  },

  {
    path: '/social-media-influencer-collaboration',
    name: 'social-media-influencer-collaboration',
 
    component: () => import('../views/AdditionalPageViews/SocialMediaView.vue')
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
 
    component: () => import('../views/AdditionalPageViews/PrivacyPolicyView.vue')
  },

  {
    path: '/partners',
    name: 'partners',
 
    component: () => import('../views/PartnersView/OurPartnerView.vue')
  },
 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

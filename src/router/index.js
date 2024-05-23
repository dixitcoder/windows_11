// auth firebase


import { createRouter, createWebHistory } from "vue-router";

import windowslogin from "@/components/windowslogin.vue";
import Home from "@/components/home.vue"
import NotFound from "@/pages/404.vue"

const router = createRouter({
  history: createWebHistory(),
routes :  [
  {
    to:'/',
    redirect:'login'
  },
  {
    path:'/home',
    component:Home

  },
  {
    path:'/login',
    component:windowslogin,
  },
  { path: '/:pathMatch(.*)*', component: NotFound }
]
})

// router.beforeEach(async (to, from, next) => {
//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

//   // Wait for the authentication state to be resolved
//   await new Promise(resolve => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       unsubscribe(); // Unsubscribe to avoid multiple calls
//       resolve(user);
//     });
//   });

//   const user = auth.currentUser;

//   if (requiresAuth && !user) {
//     // User is not authenticated, and the route requires authentication
//     next('/login'); // Redirect to the login page
//   } else {
//     next(); // Continue navigation
//   }
// });

export default router;

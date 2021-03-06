import Vue from "vue";
import Router from "vue-router";
import Layout from "@/view/layout/Layout";
import VuetifyLayout from '@/view/pages/vuetify/Vuetify.vue';

import Dashboard from "@/view/pages/Dashboard.vue";
import Book from '@/view/pages/booking/Book';
import Appointments from '@/view/pages/booking/Appointments';
import Appointment from '@/view/pages/booking/Appointment';
import Approval from '@/view/pages/booking/Approval';
import Calendar from '@/view/pages/schedule/Calendar';
import Summary from '@/view/pages/reports/Summary';
Vue.use(Router);

export default new Router({

  routes: [
    {
      path: "/",
      redirect: "/dashboard",
      component: Layout,
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: Dashboard
        },
        {
          path: '/book',
          name: 'book',
          component: Book
        },
        {
          path: '/appointments',
          name: 'appointments',
          component: Appointments
        },
        {
          path: '/appointment/:appointmentId',
          name: 'appointment',
          props: true,
          component: Appointment
        },
        {
          path: '/appointment/:action/:appointmentId',
          name: 'appointment',
          props: true,
          component: Appointment
        },
        {
          path: '/book/:appointmentId',
          name: 'update-booking',
          props: true,
          component: Book
        },
        {
          path: '/approval',
          name: 'approval',
          component: Approval
        },
        {
          path: '/summary',
          name: 'summary',
          component: Summary
        },
     /*    {
          path: '/calendar',
          name: 'calendar',
          component: Calendar
        }, */
        {
          path: "/vuetify",
          name: "vuetify",
          component: VuetifyLayout,
          children: [
            {
              path: "/calendar",
              name:  "calendar",
              component: Calendar
            },
          ]
        }

      ]
    },
   
    {
      path: "/",
      component: () => import("@/view/pages/auth/Auth"),
      children: [
        {
          name: "login",
          path: "/login",
          component: () => import("@/view/pages/auth/Login")
        },
        {
          name: "register",
          path: "/register",
          component: () => import("@/view/pages/auth/Register")
        }
      ]
    },
    
    {
      path: "*",
      redirect: "/404"
    },
    {
      // the 404 route, when none of the above matches
      path: "/404",
      name: "404",
      component: () => import("@/view/pages/error/Error-1.vue")
    }
  ]
});

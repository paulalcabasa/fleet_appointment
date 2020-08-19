<template>
  <!--begin::List Widget 9-->
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0 mt-4">
      <h3 class="card-title align-items-start flex-column">
        <span class="font-weight-bolder text-dark">
          Today's Schedule
        </span>
        <span class="text-muted mt-3 font-weight-bold font-size-sm">
          50 Appointments
        </span>
      </h3>
     
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-4">
      <div class="timeline timeline-6 mt-3">
        <template v-for="(item, i) in list">
          <!--begin::Item-->
          <div class="timeline-item align-items-start" v-bind:key="i">
            <!--begin::Label-->
            <div
              class="timeline-label font-weight-bolder text-dark-75 font-size-lg"
            >
              {{ item.time }}
            </div>
            <!--end::Label-->

            <!--begin::Badge-->
            <div class="timeline-badge">
              <i class="icon-xxl" v-bind:class="item.badge"></i>
            </div>
            <!--end::Badge-->

            <!--begin::Text-->
            <div
              class="font-weight-mormal font-size-sm timeline-content text-muted pl-3"
            >
              <span
                v-bind:class="{
                  'font-weight-bolder text-dark-75': item.bold,
                  'mr-4': item.images
                }"
                v-html="item.desc"
              ></span>

              <!--begin::Section-->
              <div class="d-flex align-items-start mt-n2">
                <template v-for="(image, i) in item.images">
                  <!--begin::Symbol-->
                  <a
                    href="#"
                    class="symbol symbol-35 symbol-light-success mr-2"
                    v-bind:key="i"
                  >
                    <span class="symbol-label">
                      <img
                        :src="image.img"
                        class="h-75 align-self-end"
                        :alt="image.alt"
                      />
                    </span>
                  </a>
                  <!--end::Symbol-->
                </template>
              </div>
              <!--end::Section-->
            </div>
            <!--end::Text-->
          </div>
          <!--end::Item-->
        </template>
      </div>
      <!--end: Items-->
    </div>
    <!--end: Card Body-->
  </div>
  <!--end: Card-->
  <!--end: List Widget 9-->
</template>

<script>
import Dropdown2 from "@/view/content/dropdown/Dropdown2.vue";
import { mapGetters } from "vuex";

export default {
  name: "TodaysSchedule",
  data() {
    return {
      list: [
        {
          time: "08:42",
          desc: "John Doe from Coke Sta Rosa at Isuzu Alabang",
          badge: "fa fa-genderless text-success"
        },
        {
          time: "3 hr",
          desc: "Christina from Mindana at Isuzu Mina De Oro",
         
          badge: "fa fa-genderless text-danger"
        },
        {
          time: "14:37",
          desc: "Junie from Sta Rosa at Isuzu Sta Rosa",
          badge: "fa fa-genderless text-info",
        },
        {
          time: "08:42",
          desc: "John Doe from Coke Sta Rosa at Isuzu Alabang",
          badge: "fa fa-genderless text-success"
        },
        {
          time: "3 hr",
          desc: "Christina from Mindana at Isuzu Mina De Oro",
         
          badge: "fa fa-genderless text-danger"
        },
        {
          time: "14:37",
          desc: "Junie from Sta Rosa at Isuzu Sta Rosa",
          badge: "fa fa-genderless text-info",
        },
        {
          time: "08:42",
          desc: "John Doe from Coke Sta Rosa at Isuzu Alabang",
          badge: "fa fa-genderless text-success"
        },
        {
          time: "3 hr",
          desc: "Christina from Mindana at Isuzu Mina De Oro",
         
          badge: "fa fa-genderless text-danger"
        },
        {
          time: "14:37",
          desc: "Junie from Sta Rosa at Isuzu Sta Rosa",
          badge: "fa fa-genderless text-info",
        },
        
      ]
    };
  },
  components: {
    Dropdown2
  },
  computed: {
    ...mapGetters(["layoutConfig"])
  }
};
</script>

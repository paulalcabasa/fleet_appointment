<template>
  <div>
    <!-- Statistics -->
    <div class="row">
      <div class="col-lg-3 col-xl-3 order-lg-1 order-xl-1">
        <Card :class="'bg-primary text-white'">
          <template v-slot:body>
            <Statistics :title="'10'" desc="PENDING" icon="la la-hourglass-o text-white" />
          </template>
        </Card>
      </div>
      <div class="col-lg-3 col-xl-3 order-lg-1 order-xl-1">
        <Card :class="'bg-info text-white'">
          <template v-slot:body>
            <Statistics :title="20" desc="CONFIRMED" icon="la la-calendar-o text-white" />
          </template>
        </Card>
      </div>
      <div class="col-lg-3 col-xl-3 order-lg-1 order-xl-1">
        <Card :class="'bg-warning text-white'">
          <template v-slot:body>
            <Statistics :title="30" desc="ON GOING" icon="la la-wrench text-white" />
          </template>
        </Card>
      </div>
      <div class="col-lg-3 col-xl-3 order-lg-1 order-xl-1">
        <Card :class="'bg-success text-white'">
          <template v-slot:body>
            <Statistics :title="30" desc="COMPLETED" icon="la la-check-circle-o text-white" />
          </template>
        </Card>
      </div>
       
    </div>
    <!-- end of statistics -->

    <div class="row">
      <div class="col-md-6">
        <TodaysSchedule></TodaysSchedule>
      </div>
      <div class="col-md-6">
        <Upcoming></Upcoming>
      </div>
    </div>
  </div>
</template>

<script>

import Statistics from '@/view/content/widgets/Statistics.vue';
import TodaysSchedule from '@/view/content/widgets/TodaysSchedule.vue';
import Upcoming from '@/view/content/widgets/Upcoming.vue';
import Card from '@/view/content/Card.vue';
export default {
  name: "dashboard",
  components: {
    TodaysSchedule,
    Upcoming,
    Statistics,
    Card
  },
  mounted() {
 
  },
  methods: {
  
  }
};
</script>

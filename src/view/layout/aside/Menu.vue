<template>
  <ul class="menu-nav">
    <router-link
      to="/dashboard"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-architecture-and-city"></i>
          <span class="menu-text">Dashboard</span>
        </a>
      </li>
    </router-link>

    <li class="menu-section">
      <h4 class="menu-text">APPOINTMENT</h4>
      <i class="menu-icon flaticon-more-v2"></i>
    </li>

    <router-link
      to="/book"
      v-if="user.userType == 'customer'"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon-calendar-with-a-clock-time-tools"></i>
          <span class="menu-text">Book</span>
        </a>
      </li>
    </router-link>

    <router-link
      to="/appointments"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon-list"></i>
          <span class="menu-text">List</span>
        </a>
      </li>
    </router-link>

    <router-link
      to="/approval"
      v-if="user.userType == 'dealer' || user.userType == 'ipc'"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-hourglass-1"></i>
          <span class="menu-text">Pending</span>
        </a>
      </li>
    </router-link>

    <li class="menu-section">
      <h4 class="menu-text">SCHEDULE</h4>
      <i class="menu-icon flaticon-more-v2"></i>
    </li>

    <router-link
      to="/calendar"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-calendar"></i>
          <span class="menu-text">Calendar</span>
        </a>
      </li>
    </router-link>

    <li class="menu-section">
      <h4 class="menu-text">REPORTS</h4>
      <i class="menu-icon flaticon-more-v2"></i>
    </li>

    <router-link
      to="/summary"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon-list"></i>
          <span class="menu-text">Summary</span>
        </a>
      </li>
    </router-link>


  
  </ul>
</template>

<script>
export default {
  name: "KTMenu",
  data() {
    return {
      user : this.$store.getters.currentUser
    }
  },
  methods: {
    hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    }
  }
};
</script>

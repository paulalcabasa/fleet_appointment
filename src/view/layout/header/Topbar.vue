<template>
  <!-- begin:: Header Topbar -->
  <div class="topbar">
    <!--begin: Search -->
    <b-dropdown
      size="sm"
      id="kt_quick_search_toggle"
      variant="link"
      toggle-class="topbar-item text-decoration-none"
      no-caret
      right
      no-flip
    >
      <template v-slot:button-content>
        <div class="btn btn-icon btn-clean btn-lg btn-dropdown mr-1">
          <span class="svg-icon svg-icon-xl svg-icon-primary">
            <inline-svg src="media/svg/icons/General/Search.svg" />
          </span>
        </div>
      </template>
      <b-dropdown-text tag="div" class="min-w-md-350px">
        <KTSearchDefault></KTSearchDefault>
      </b-dropdown-text>
    </b-dropdown>
    <!--end: Search -->
    
    <!--begin: User Bar -->
    <KTQuickUser></KTQuickUser>
    <!--end: User Bar -->
  </div>
  <!-- end:: Header Topbar -->
</template>

<style lang="scss">
.topbar {
  .dropdown-toggle {
    padding: 0;
    &:hover {
      text-decoration: none;
    }

    &.dropdown-toggle-no-caret {
      &:after {
        content: none;
      }
    }
  }

  .dropdown-menu {
    margin: 0;
    padding: 0;
    outline: none;
    .b-dropdown-text {
      padding: 0;
    }
  }
}
</style>

<script>
import KTSearchDefault from "@/view/layout/extras/dropdown/SearchDefault.vue";
import KTQuickUser from "@/view/layout/extras/offcanvas/QuickUser.vue";

export default {
  name: "KTTopbar",
  components: {
    KTSearchDefault,
    KTQuickUser,
  }
  
};
</script>

<template>
  <side-menu />
  <div class="w-full">
    <h3>{{ pageName }}</h3>
    <router-view />
  </div>
</template>
<script>
import sideMenu from "@/components/sideMenu.vue";
import { useMain } from "@/store/main";
export default {
  components: {
    sideMenu,
  },
  data() {
    return {
      mainStore: useMain(),
    };
  },
  computed: {
    pageName: function () {
      console.log(this.mainStore.page)
      return this.mainStore.pages.find((i) => i.value == this.mainStore.page).text;
    },
  },
};
</script>

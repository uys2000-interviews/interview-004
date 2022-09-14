<template>
  <side-menu />
  <!-- Page -->
  <div class="w-full flex flex-col">
    <div
      class="text-2xl p-0 pl-10 py-1 sm:my-10 sm:py-5 sm:pl-10 bg-bg2 w-full overflow-hidden"
    >
      {{ pageName }}
    </div>
    <div class="px-5 mb-5 h-full w-full  overflow-auto">
      <router-view />
    </div>
  </div>
</template>
<script>
import sideMenu from "@/components/sideMenu.vue";
import { getAllData } from "@/services/service";
import { useMain } from "@/store/main";
import { useOrder } from "@/store/order";
export default {
  components: {
    sideMenu,
  },
  data() {
    return {
      mainStore: useMain(),
      orderStore: useOrder(),
    };
  },
  computed: {
    pageName: function () {
      const page = this.mainStore.pages.find(
        (i) => i.value == this.mainStore.page
      );
      return page?.text;
    },
  },
  mounted() {
    getAllData().then((res) => {
      this.orderStore.setOrders(res.data.body);
      console.log(res.data.body);
    });
  },
};
</script>

<template>
  <router-view />
</template>
<script>
import { useMain } from "./store/main";
export default {
  name: "app",
  data() {
    return {
      mainStore: useMain(),
    };
  },
  computed: {
    page() {
      return this.mainStore.getPage;
    },
  },
  mounted() {
    this.$router.push({ name: this.mainStore.getPage });
  },
  watch: {
    page() {
      this.$router.push({ name: this.mainStore.getPage });
    },
  },
};
</script>

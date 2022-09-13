<template>
    test
</template>
<script>
import { useMain } from "@/store/main";
export default {
  data() {
    return {
      mainStore: useMain(),
    };
  },
};
</script>

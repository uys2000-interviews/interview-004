<template>
  <div class="w-full h-full bg-bg1 p-1">
    <entry-part-upper />
    <entry-part-bottom />
    <show-part>
      <data-part />
    </show-part>
  </div>
</template>
<script>
import { useMain } from "@/store/main";
import { useOrder } from "@/store/order";
import entryPartUpper from "@/components/orderview/entryPartUpper.vue";
import entryPartBottom from "@/components/orderview/entryPartBottom.vue";
import dataPart from "@/components/orderview/dataPart.vue";
import showPart from "@/components/orderview/showPart.vue";
export default {
  components: {
    entryPartUpper,
    entryPartBottom,
    dataPart,
    showPart,
  },
  data() {
    return {
      mainStore: useMain(),
      orderStore: useOrder(),
    };
  },
  methods: {},
};
</script>
<style>
.t {
  scroll-behavior: smooth;
}
</style>

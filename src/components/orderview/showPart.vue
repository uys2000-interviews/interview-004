<template>
  <div class="w-full overflow-auto t" ref="data">
    <div class="grid grid-cols-5 mt-5 min-w-[400px]">
      <slot name="add" />
      <div class="bg-bg2 col-span-2">Production Name</div>
      <div class="bg-bg2">Amount</div>
      <div class="bg-bg2">Price</div>
      <div class="bg-bg2" />
      <div class="col-span-5 h-2" />
      <!--Data comes after this-->
      <slot name="data" />
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    //scroll data table for too small screen
    this.$refs.data.scrollLeft = this.$refs.data.scrollWidth;
  },
};
</script>

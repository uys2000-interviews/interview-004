<template>
  <div class="w-full overflow-auto t" ref="data">
    <div class="grid grid-cols-8 mt-5 min-w-[400px]">
      <div class="bg-bg2 col-span-2">Company Name</div>
      <div class="bg-bg2 col-span-2">Production Name</div>
      <div class="bg-bg2">Amount</div>
      <div class="bg-bg2">Price</div>
      <div class="bg-bg2">Date</div>
      <div class="bg-bg2" />
      <!--Data comes after this-->
      <slot />
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

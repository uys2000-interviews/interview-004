<template>
  <div />
</template>
<script>
import { useMain } from "@/store/main";
export default {
  data() {
    return {
      mainStore: useMain(),
    };
  },
  mounted() {
    this.mainStore.setUser({
      user_d: "",
      username: "",
      password: "",
      mail: "",
      created_on: "",
      last_login: "",
    });
    this.mainStore.isLogged = false;
    this.mainStore.setPage("");
  },
};
</script>

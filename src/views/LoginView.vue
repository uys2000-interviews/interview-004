<template>
  <div class="w-screen h-screen flex justify-center place-items-center">
    <form onsubmit="return false">
      <div class="grid grid-cols-3">
        <label for="id">Username</label>
        <input
          name="id"
          type="text"
          placeholder="username"
          v-model="user.username"
          class="col-span-2"
        />
        <label for="pass">Password</label>
        <input
          name="pass"
          type="password"
          placeholder="****"
          v-model="user.password"
          class="col-span-2"
        />
        <div class="col-span-2" />
        <button type="submit" @click="loginEvent">Login</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import { useMain } from "../store/main";
export default {
  data() {
    return {
      mainStore: useMain(),
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    loginSuccesful: function (response) {
      this.mainStore.setUser({
        ...this.user,
        ...response.body,
      });
      this.mainStore.isLogged = true;
      this.mainStore.setPage("DashView")
    },
    loginEvent: function () {
      axios
        .post("http://localhost:3001/api/login", this.user)
        .then((response) => this.loginSuccesful(response))
        .catch((err) => {
          console.log(err);
          alert("Try 'user', 'pass'");
        });
    },
    autoLogin: function () {
      setTimeout(() => {
        this.user = {
          username: "user",
          password: "pass",
        };
        setTimeout(() => {
          this.loginEvent();
        }, 100);
      }, 100);
    },
  },
  mounted() {
    this.autoLogin();
  },
};
</script>

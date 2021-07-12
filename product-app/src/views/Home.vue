<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <img
      alt="Laravel logo"
      style="height: 10rem; width: 10rem"
      src="../assets/laravel.png"
      class="m-3"
    />
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login";

export default {
  name: "Home",
  components: {
    Login,
  },
  methods: {
    async login() {},
  },
};
</script>

<style scoped>
</style>
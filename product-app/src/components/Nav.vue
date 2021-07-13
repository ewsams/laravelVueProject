<template>
  <div>
    <!-- Nav Pre Logged In -->
    <div id="nav" v-if="!loggedInStatus">
      <router-link to="/">Home</router-link>
      <router-link to="/register" class="p-2">Register</router-link>
    </div>
    <!-- Nav Logged In -->
    <div id="nav" v-if="loggedInStatus">
      <router-link to="/" @click.prevent="logOut">Log Out</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Nav",
  computed: mapGetters({ loggedInStatus: "user/GET_LOGGED_IN_STATUS" }),
};
</script>

<style src="@/style.css" scoped>
</style>
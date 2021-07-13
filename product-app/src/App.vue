<template>
  <div>
    <!-- Nav Pre Logged In -->
    <div id="nav" v-if="!GET_LOGGED_IN_STATUS">
      <router-link to="/">Home</router-link>
      <router-link to="/register" class="p-2">Register</router-link>
    </div>
     <!-- Nav Logged In -->
    <div id="nav" v-if="GET_LOGGED_IN_STATUS">
      <router-link to="/" @click.prevent="logOut">Log Out</router-link>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<style src="@/style.css">
</style>

<script>
import { mapGetters,mapActions } from "vuex";

export default {
  name: "App",
  computed: mapGetters(["GET_LOGGED_IN_STATUS"]),
  methods:{
    ...mapActions(["LOG_OUT"]),
    logOut(){
      this.LOG_OUT();
    }
  }
};
</script>


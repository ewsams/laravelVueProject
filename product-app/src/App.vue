<template>
  <div>
    <div id="nav" v-if="!GET_LOGGED_IN_STATUS">
      <router-link to="/">Home</router-link>
      <router-link to="/register" class="p-2">Register</router-link>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<style src="@/style.css">
</style>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: mapGetters(["GET_LOGGED_IN_STATUS"]),
};
</script>


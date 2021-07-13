<template>
  <div>
    <Nav />
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Nav from "@/components/Nav";

export default {
  name: "App",
  components: {
    Nav,
  },
  computed: mapGetters({ loggedInStatus: "user/GET_LOGGED_IN_STATUS" }),
};
</script>

<style src="@/style.css">
</style>
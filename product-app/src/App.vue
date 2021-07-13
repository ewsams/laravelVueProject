<template>
  <div>
    <Nav />
    <router-view />
  </div>
</template>

<style src="@/style.css">
</style>

<script>
import { mapGetters, mapActions } from "vuex";
import Nav from "@/components/Nav";

export default {
  name: "App",
  components: {
    Nav,
  },
  computed: mapGetters({ loggedInStatus: "user/GET_LOGGED_IN_STATUS" }),
  methods: {
    ...mapActions({ logOutUser: "user/LOG_OUT" }),
    logOut() {
      this.logOutUser();
    },
  },
};
</script>


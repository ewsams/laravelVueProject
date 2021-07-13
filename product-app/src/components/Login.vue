<template>
  <div class="p-3">
    <div v-if="!loggedInStatus">
      <h3>Returning? Log In...</h3>
      <form @submit.prevent="login">
        <input
          class="m-2"
          size="30"
          type="text"
          placeholder="email"
          v-model="email"
        />
        <input
          class="m-2"
          size="30"
          type="text"
          placeholder="password"
          v-model="password"
        />
        <button class="btn success-btn" type="submit">Log In</button>
      </form>
    </div>
    <div v-if="loggedInStatus">
      <h3>You are currently Logged In...</h3>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters({ loggedInStatus: "user/GET_LOGGED_IN_STATUS" }),
  },
  methods: {
    ...mapActions({ userLogin: "user/LOGIN" }),
    login() {
      this.userLogin({
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style src="@/style.css" scoped>
</style>
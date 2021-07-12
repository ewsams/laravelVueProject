<template>
  <div class="p-3">
    <h3>Returning? Log In...</h3>
    <form @submit="login">
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
  methods: {
    ...mapActions(["LOGIN"]),
    login(e) {
      e.preventDefault();
      this.LOGIN({
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style src="@/style.css" scoped>
</style>
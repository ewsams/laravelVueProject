<template>
  <div>
    <h3>Please Register...</h3>
    <form @submit="createUser" class="d-block">
      <div class="p-2">
        <input
          type="email"
          required
          size="40"
          placeholder="email"
          v-model="email"
        />
      </div>
      <div class="p-2">
        <input
          type="password"
          required
          size="40"
          placeholder="password"
          v-model="password"
        />
      </div>
      <div class="p-2">
        <input
          type="text"
          required
          size="40"
          placeholder="user name"
          v-model="userName"
        />
      </div>
      <div>
        <button @submit="createUser" class="btn success-btn" type="submit">
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      userName: "",
    };
  },
  methods: {
    ...mapActions(["REGISTER"]),
    createUser(e) {
      e.preventDefault();
      this.REGISTER({
        name: this.userName,
        email: this.email,
        password: this.password,
        password_confirmation:this.password
      });
    },
  },
};
</script>

<style src="@/style.css" scoped>
</style>

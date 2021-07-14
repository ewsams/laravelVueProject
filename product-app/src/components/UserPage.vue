<template>
  <div>
    <h4>Welcome back {{ currentUser.name.toUpperCase() }}</h4>
    <h5>Current Available Products</h5>
    <div v-for="product in products" :key="product.id">
      <table class="table p-4">
        <thead>
          <tr class="table-primary p-3">
            <th scope="col">{{ product.name }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ product.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import store from "../store/index";

export default {
  name: "UserPage",
  mounted() {
    store.dispatch("product/RETRIEVE_PRODUCTS");
  },
  computed: {
    ...mapGetters({
      currentUser: "user/GET_USER",
      products: "product/GET_PRODUCTS",
    }),
  },
};
</script>

<style scoped>
</style>
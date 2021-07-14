<template>
  <div>
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
  name: "ProductTable",
  mounted() {
    store.dispatch("product/RETRIEVE_PRODUCTS");
  },
  computed: {
    ...mapGetters({
      products: "product/GET_PRODUCTS",
    }),
  },
};
</script>

<style>
</style>
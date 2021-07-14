<template>
  <div>
    <h4>Welcome back {{ currentUser.name.toUpperCase() }}</h4>
    <h5>Current Available Products</h5>
    <ProductTable />
  </div>
</template>

<script>
import ProductTable from "../components/ProductTable.vue";
import { mapGetters} from "vuex";
import store from "../store/index";

export default {
  name: "UserPage",
  components: {
    ProductTable,
  },
  computed: {
    ...mapGetters({
      currentUser: "user/GET_USER",
    }),
  },
};
</script>

<style scoped>
</style>
<template>
  <div>
     {{currentUser}}
  </div>
</template>

<script>
import { mapGetters,mapActions } from "vuex";

export default {
    name:'UserPage',
    computed: {
      ...mapGetters({ currentUser: "user/GET_USER" }),
    }

}
</script>

<style scoped>

</style>
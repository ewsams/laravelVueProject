<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Login/>
    </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login';

export default {
  name: "Home",
  components: {
    Login
  },
  methods:{
    async login(){

    }
  }
};
</script>

<style scoped>
</style>
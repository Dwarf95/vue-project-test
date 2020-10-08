<template>
  <div class="app">
    <Header v-if="this.$route.path !== '/'" />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: { Header },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  background-color: #fff;
  font-family: "Roboto", sans-serif !important;
  font-size: 18px;
}
</style>

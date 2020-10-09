<template>
  <div class="header"><h1>SKELETON</h1></div>
</template>

<script>
export default {
  name: "Header",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 65px;
  width: calc(100% - 30px);
  display: flex;
  align-items: center;
  background-color: transparent;
  font-family: 'Bebas Neue', cursive;
  font-size: 25px;
  color: #333;
  padding: 0 15px;
  position: absolute;
}
</style>
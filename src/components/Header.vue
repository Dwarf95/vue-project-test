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
  color: #333;
  background-color: transparent;
  font-family: "Big Shoulders Display", cursive !important;
  font-size: auto;
  padding: 0 15px;
  position: absolute;
}
</style>
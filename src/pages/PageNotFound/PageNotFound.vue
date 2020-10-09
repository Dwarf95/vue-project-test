<template>
  <div class="h-100 d-flex flex-column justify-center align-center">
    <h1>404</h1>
    <p>Oops! Something is wrong.</p>
    <a class="button" href="/"
      ><i class="icon-home"></i> Go back in initial page, is better.</a
    >
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.h-100 { height: 100%; }
.d-flex { display: flex; }
.flex-column { flex-direction: column; }
.justify-center { justify-content: center; }
.align-center { align-items: center; }
.button {
  font-weight: 300;
  color: #333;
  font-size: 1.2em;
  text-decoration: none;
  border: 1px solid #efefef;
  padding: .5em;
  border-radius: 3px;
  float: left;
  margin: 6em 0 0 0;
  transition: all .2s linear;
  text-align: center;
  &:hover{
      background-color: #333;
      color: white;
  }
}

p {
  font-size: 2em;
  text-align: center;
  font-weight: 100;
}

h1 {
  text-align: center;
  font-size: 15em;
  font-weight: 100;
}
</style>
<template>
    <div style="border-bottom: 1px solid #333;">
        ovde ce search
        </div>
</template>

<script>
export default {
  name: "SearchFilterUser",
  methods: {
      search(){
          console.log("hey");
      }
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.d-flex {
  display: flex;
}
.flex-row {
  flex-direction: row;
}
.justify-between {
  justify-content: space-between;
}
.ml-1{
    margin-left: .5em;
}
button{
    height: 50px;
    width: 100%;
    font-size: 24px;
    margin-top: 20px;
    background: white;
    color: #333;
    letter-spacing: 6px;
    padding: 10px;
    font-family: "Roboto", sans-serif !important;
    border: 1px solid #333;
    border-radius: 6px;
}
.pointer{
    cursor: pointer;
}

</style>
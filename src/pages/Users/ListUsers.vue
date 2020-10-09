<template>
    <div class="signup">
    <div class="signup-container">
        <search-filter-users />
    </div>
    </div>
</template>

<script>
import SearchFilterUsers from './SearchFilterUsers.vue';

export default {
    name: "ListUsers",
    components: {
        SearchFilterUsers
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
.signup {
  min-height: 50%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif !important;
  font-size: 18px;
}
.signup-container {
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: center;
  align-self: center;
  margin: 10px;
}
.signup-container form {
  width: 100%;
}
</style>
<template>
        <form @submit="forgotPassword">
            <input
          type="email"
          id="email"
          name="email"
          v-model="email"
          placeholder="Enter your E-mail"
        />
      <button type="submit">Submit</button>
        </form>
</template>

<script>
export default {
    name: "ForgotPassword",
    data(){
        return {
            email: null,
            error: false,
            message: ""
        }
    },
    methods: {
        forgotPassword(e){
            e.preventDefault();
            console.log(this.$data.email);
        }
    },
    setup () {
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>
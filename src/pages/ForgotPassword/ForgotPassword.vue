<template>
<div class="signup">
    <div class="signup-container">
      <h1>FORGOT PASSWORD</h1>
      <form @submit="forgotPassword">
            <input
          type="email"
          id="email"
          name="email"
          v-model="email"
          placeholder="Enter your E-mail"
        />
      <button type="submit" class="pointer">SUBMIT</button>
        </form>
    </div>
</div>
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
.pointer{
    cursor: pointer !important;
}
.signup {
  height: 80%;
  width: 30%;
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
.signup h1 {
  font-size: 50px;
  font-family: "Big Shoulders Display", cursive;
  margin-bottom: -10px;
}

.signup input:not([type="checkbox"]) {
  height: 50px;
  width: calc(100% - 22px);
  margin-top: 10px;
  padding: 0 10px 0 10px;
  font-family: "Roboto", sans-serif !important;
  border: 1px solid #333;
  border-radius: 4px;
}
.signup button {
  height: 50px;
  width: 100%;
  font-size: 24px;
  margin-top: 20px;
  background: #333;
  color: #fff;
  letter-spacing: 6px;
  font-family: "Roboto", sans-serif !important;
  border: 1px solid transparent;
  border-radius: 6px;
}
/* EXTRA EXTRA small devices */
@media only screen and (max-width: 400px){
  .signup{
        width: 100% !important;
        .signup-container{
          width: 90%;
        }
  }
}
/* Extra small devices (phones, 600px and down) */
@media (min-width: 400px) and (max-width: 600px) {
    .signup{
        width: 90% !important;
    }
  }
  
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    .signup{
        width: 90% !important;
    }
  }
  
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .signup{
        width: 90% !important;
    }
  } 
  
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
   .signup{
        width: 60% !important;
    }
  } 
  
  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    .signup{
        width: 30% !important;
    }
  }
</style>
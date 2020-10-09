<template>
  <div class="signup">
    <div class="signup-container">
      <h1>RESET PASSWORD</h1>
      <form @submit="resetPassword">
        <div v-for="item in resetPasswordFormItems" :key="item.id">
          <input
            :type="item.type"
            :id="item.id"
            :name="item.id"
            v-model="item.value"
            :placeholder="item.placeholder"
          />
          <small style="color: crimson" v-if="item.error">{{
            item.message
          }}</small>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResetPassword",
  data() {
    return {
      resetPasswordFormItems: [
        {
          label: "Password",
          id: "password",
          value: "",
          placeholder: "Password",
          type: "password",
          required: true,
          error: false,
          message: "",
        },
        {
          label: "Confirm Password",
          id: "confirmPassword",
          value: "",
          placeholder: "Confirm Password",
          type: "password",
          required: true,
          error: false,
          message: "",
        },
      ],
    };
  },
  methods:{
      resetPassword(e){
          e.preventDefault();
          console.log(this.resetPasswordFormItems);
      }
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.signup {
  height: auto;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 65px;
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

.signup input {
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
</style>
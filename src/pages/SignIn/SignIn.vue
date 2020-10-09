<template>
  <div class="signup">
    <div class="signup-container">
      <h1>SIGN IN</h1>
      <form @submit="signin">
        <div v-for="item in signInFormItems" :key="item.id">
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
        <div class="d-flex flex-row justify-between align-baseline">
          <div>
            <input
              type="checkbox"
              id="remember-me"
              name="remember-me"
              class="mt-2"
            />
            <label for="remember-me" class="ml-1">Remember me</label>
          </div>
          <a href="/forgot-password">Forgot password</a>
        </div>
        <div class="sign-in-registration">
          <p>New to Skeleton?</p>
          <a href="/sign-up">Sign up now</a>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  </div>
</template>

<script>
import { authValidationService } from "../../services/validationService";

export default {
  name: "SignIn",
  data() {
    return {
      signInFormItems: [
        {
          label: "E-mail",
          id: "email",
          value: "",
          placeholder: "Enter your E-mail",
          type: "email",
          required: true,
          error: false,
          message: "",
        },
        {
          label: "Password",
          id: "esc-password",
          value: "",
          placeholder: "Enter your Password",
          type: "password",
          required: true,
          error: false,
          message: "",
        },
      ],
    };
  },
  methods: {
    signin(e) {
      e.preventDefault();
      let validatedData = authValidationService(this.$data.signInFormItems);
      this.updateChangedFields(validatedData);
      console.log("signInFormItems", this.$data.signInFormItems);
    },
    updateChangedFields(data) {
      data.map((value, index) => {
        this.$data.signInFormItems[index].message = value.message;
        this.$data.signInFormItems[index].error = value.error;
      });
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.mt-2 {
  margin-top: 1.5em !important;
}
.ml-1 {
  margin-left: 0.5em !important;
}
.d-flex {
  display: flex;
}
.flex-row {
  flex-direction: row;
}
.justify-between {
  justify-content: space-between;
}
.align-baseline {
  align-items: baseline;
}
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

.signup input:not([type="checkbox"]) {
  height: 50px;
  width: calc(100% - 22px);
  margin-top: 10px;
  padding: 0 10px 0 10px;
  font-family: "Roboto", sans-serif !important;
  font-size: 16px;
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
.sign-in-registration {
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 25px;
}
.sign-in-registration p {
  font-size: 16px;
  margin-right: 5px;
}
a {
  font-size: 14px;
  font-weight: 600;
  color: #000;
  text-decoration: none;
}
label {
  font-size: 14px;
}
.sign-in-registration a {
  font-size: 16px;
  font-weight: 600;
  color: #000;
  text-decoration: none;
}
</style>

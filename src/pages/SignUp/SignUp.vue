<template>
  <div class="signup">
    <div class="signup-container">
      <h1>SIGN UP</h1>
      <form @submit="signup">
        <div v-for="item in signupFormItems" :key="item.id">
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
        <div class="signup-login mt-2 d-flex">
          <p>Already have an account?</p><a href="/sign-in">Sign in</a>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  </div>
</template>

<script>
import { UISignUpValidationService } from "../../services/validationService";

export default {
  name: "SignUp",
  data() {
    return {
      signupFormItems: [
        {
          label: "First Name",
          id: "firstName",
          value: "",
          placeholder: "First Name",
          type: "text",
          required: true,
          error: false,
          message: "",
        },
        {
          label: "Last Name",
          id: "lastName",
          value: "",
          placeholder: "Last Name",
          type: "text",
          required: true,
          error: false,
          message: "",
        },
        {
          label: "E-mail",
          id: "email",
          value: "",
          placeholder: "E-mail",
          type: "email",
          required: true,
          error: false,
          message: "",
        },
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
  methods: {
    signup(e) {
      e.preventDefault();

      let validatedData = UISignUpValidationService(this.$data.signupFormItems);
      this.updateChangedFields(validatedData);
    },
    updateChangedFields(data) {
      data.map((value, index) => {
        this.$data.signupFormItems[index].message = value.message;
        this.$data.signupFormItems[index].error = value.error;
      });
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.mt-2 { margin-top: 1.5em !important; }
.ml-1 { margin-left: .5em !important;}
.d-flex { display: flex; }
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
.signup-login p {
  font-size: 16px;
  margin-right: 5px;
}
.signup-login a {
  font-size: 16px;
  text-decoration: none;
  font-weight: 600;
  color: #000;
}
</style>

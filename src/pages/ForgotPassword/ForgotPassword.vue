<template>
  <div class="signup">
    <div class="signup-container" >
      <h1 v-if="forgotPassInProgress">FORGOT PASSWORD</h1>
      <form @submit="forgotPassword" v-if="forgotPassInProgress">
        <div v-for="item in forgotPasswordFormItems" :key="item.id">
          <input
            :type="item.type"
            :id="item.id"
            :name="item.id"
            v-model="item.value"
            :placeholder="item.placeholder"
          />
          <div class="h-20px">
            <small style="color: crimson" v-if="item.error">{{
            item.message
          }}</small>
          </div>
        </div>
        <button type="send" class="pointer">SEND</button>
      </form>
      <div v-if="!forgotPassInProgress">
        Done!
      </div>
    </div>
  </div>
</template>

<script>
import { authValidationService } from "../../services/validationService";
export default {
  name: "ForgotPassword",
  data() {
    return {
      forgotPasswordFormItems: [
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
      ],
      forgotPassInProgress: true
    };
  },
  methods: {
    forgotPassword(e) {
      e.preventDefault();
      let validatedData = authValidationService(
        this.$data.forgotPasswordFormItems
      );
      this.updateChangedFields(validatedData);
      const someError = validatedData.some((item) => item.error === true);
      someError ? this.forgotPassInProgress = true : this.forgotPassInProgress = false;
    },
    updateChangedFields(data) {
      data.map((value, index) => {
        this.$data.forgotPasswordFormItems[index].message = value.message;
        this.$data.forgotPasswordFormItems[index].error = value.error;
      });
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.h-20px { height: 20px; }
.pointer {
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
/* EXTRA EXTRA small devices */
@media only screen and (max-width: 400px) {
  .signup {
    width: 100% !important;
    .signup-container {
      width: 90%;
    }
  }
}
/* Extra small devices (phones, 600px and down) */
@media (min-width: 400px) and (max-width: 600px) {
  .signup {
    width: 90% !important;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .signup {
    width: 90% !important;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .signup {
    width: 90% !important;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .signup {
    width: 60% !important;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .signup {
    width: 30% !important;
  }
}
</style>

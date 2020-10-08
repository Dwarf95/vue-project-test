<template>
  <div>
    <form @submit="signup">
      <div v-for="item in signupFormItems" :key="item.id">
        <label :for="item.id">{{ item.label }}</label>
        <input
          :type="item.type"
          :id="item.id"
          :name="item.id"
          v-model="item.value"
          :placeholder="item.placeholder"
        />
        <small style="color: crimson;" v-if="item.error">{{
          item.message
        }}</small>
      </div>
      <button type="submit">Submit</button>
    </form>
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

<style lang="scss" scoped></style>

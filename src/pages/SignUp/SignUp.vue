<template>
    <div>
        <form @submit="signup">
            <div v-for="item in signupFormItems" :key="item.id">
                <label :for="item.id">{{item.label}}</label>
                <input :type="item.type" :id="item.id" :name="item.id" v-model="item.value"
                :placeholder="item.placeholder">
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
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
                    required: true
                },
                {
                    label: "Last Name",
                    id: "lastName",
                    value: "",
                    placeholder: "Last Name",
                    type: "text",
                    required: true
                },
                {
                    label: "E-mail",
                    id: "email",
                    value: "",
                    placeholder: "E-mail",
                    type: "email",
                    required: true
                },
                {
                    label: "Password",
                    id: "password",
                    value: "",
                    placeholder: "Password",
                    type: "password",
                    required: true
                },
                {
                    label: "Confirm Password",
                    id: "confirmPassword",
                    value: "",
                    placeholder: "Confirm Password",
                    type: "password",
                    required: true
                }
            ]
        }
    },
    methods: {
        signup: (e)=>{
            e.preventDefault();
            console.log(e.srcElement[0].validity.valid);
            console.log(e);
        }
    },
    setup () {
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>

const PASS_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;


export const authValidationService = (dataArray) => {

    const validatedDataArray = [];
    const passwordValue = "";

    dataArray.map((data) => {
        const validatedData = data;
        validatedData.error = false;
        validatedData.message = "";

        if ((data.id === "firstName" || data.id === "lastName") && data.value === "") {

            validatedData.error = true;
            validatedData.message = `Please enter your ${data.label} correct!`;

        } else if (data.id === "email" && !data.value.match(EMAIL_REGEX)) {

            validatedData.error = true;
            validatedData.message = `Please enter a valid ${data.label}!`;

        } else if (data.id === "password" && !data.value.match(PASS_REGEX)) {

            validatedData.error = true;
            validatedData.message = `Please enter a valid ${data.label}!`;

        } else if (data.id === "password" && data.value.match(PASS_REGEX)) {

            passwordValue.concat(data.id.value);

        } else if (data.id === "confirmPassword" && !data.value.match(PASS_REGEX)) {
            validatedData.error = true;
            validatedData.message = `Please enter a valid Password!`;

            if (data.value !== passwordValue) {
                validatedData.error = true;
                validatedData.message = `Password do not match!`;
            }
        }
        validatedDataArray.push(validatedData);
    });

    return validatedDataArray;
};

const PASS_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;


export const UISignUpValidationService = (firstName, lastName, email, password, confirmPassword) => {

    const errors = [];

    if (firstName === "") errors.push({firstName: true, message: "Please enter your first name"});
    else 
    if (lastName === "") errors.push({lastName: true, message: "Please enter your last name"});
    if (!email.match(EMAIL_REGEX)) errors.push({email: true, message: "Please enter a valid e-mail address"});
    if (!password.match(PASS_REGEX)) errors.push({password: true, message: "Please enter a valid password"});
    if (password !== confirmPassword || !confirmPassword.match(PASS_REGEX)) errors.push({confirmPassword: true, message: "Passwords do not match"})

    return errors;
};
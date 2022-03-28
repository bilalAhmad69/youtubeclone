import { UserForm } from "../../Molecules";
const SignUp = () => {
  return (
    <>
      <UserForm
        userEmail="email"
        userPassword="password"
        formName="Create Account"
        userConfirmPassword="userConfirmPassword"
        userName="userName"
      />
    </>
  );
};

export default SignUp;

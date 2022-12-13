import SignUpForm from "../sign-up/sign-up-form.components";
import SignInForm from "../sign-in/sign-in-form.components";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;

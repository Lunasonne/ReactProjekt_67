import Input from "../Input/Input";
import Button from "../Button/Button";
import "./styles.css";

function LoginForm() {
  return (
    <div className= "login_form">
      <h2 className= "login_title">Login form</h2>

      <Input
        label= "Email"
        name= "email"
        type= "email"
        placeholder= "Enter your email"
      />

      <Input
        label= "Password"
        name= "password"
        type= "password"
        placeholder= "Enter your password"
      />

      <Button name= "Login" type= "submit" />
    </div>
  );
}
export default LoginForm;
import { Button } from "@material-ui/core";
import { useRef } from "react";
import { useHistory } from "react-router";
import { axiosInstance } from "../../config";
import "./register.css";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if(passwordAgain.current.value !== password.current.value){
      passwordAgain.current.setCustomValidity("Please check your passwords match.")
    } else{
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      }
      try {
        await axiosInstance.post("/auth/register", user);
        history.push("/login");
      }catch (err){
        console.log(err);
      }

    }
  };






  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Nunya Connect</h3>
          <span className="loginDesc">
          Connect with your fellow employees securely with Nunya Connect.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Username" required ref={username} className="loginInput" />
            <input placeholder="Email" required ref={email} className="loginInput" type="email" />
            <input placeholder="Password" required ref={password} className="loginInput" type="password" minLength="4" />
            <input placeholder="Password Again" required ref={passwordAgain} className="loginInput" type="password" minLength="4"/>
            <Button variant="contained" color="primary" className="loginButton" type="submit">
  Create Account
</Button>


<Button variant="contained" color="secondary" className="loginButton">Log In</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
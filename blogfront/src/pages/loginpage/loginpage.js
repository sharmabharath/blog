import React from "react";
import useForm from "./useForm";
import Validate from "./validateLogin";
import { Link } from "react-router-dom";
import "./loginpage.css";
const Loginpage = () => {
  const { Item, handleChange, handleSubmit, error } = useForm(submit, Validate);

  function submit() {
    console.log("success");
  }
  return (
    <div className="logincontainer">
      <form noValidate onSubmit={handleSubmit}>
        <div>
          <label>Phone</label>
          <div>
            <input
              name="phone"
              type="text"
              value={Item.phone}
              onChange={handleChange}
            />
            {error.phone && <p>{error.phone}</p>}
          </div>
        </div>
        <div>
          <label>password</label>
          <div>
            <input
              name="password"
              type="password"
              value={Item.password}
              onChange={handleChange}
            />
            {error.password && <p>{error.password}</p>}
          </div>
        </div>
        <button type="submit" className="loginbutton">
          Login
        </button>
          </form>
          <div className="signupcontainer">
          <Link path to="/signup">
              <small>if not signedup signin here</small>
          </Link>   
          </div>
        
    </div>
  );
};
export default Loginpage;

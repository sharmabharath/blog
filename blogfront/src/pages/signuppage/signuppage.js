import React from "react";
import useForm from "./useForm";
import Validate from './validateSignup'
const SignUp = () => {
  const { Item, handleChange, handleSubmit,error } = useForm(submit,Validate);

  function submit() {
    console.log("success");
  }
  return (
    <div>
      <form noValidate onSubmit={handleSubmit}>
      <div>
          <label>FirstName</label>
          <div>
            <input
              name="firstname"
              type="text"
              value={Item.firstname}
              onChange={handleChange}
            />
            {error.firstname && <p>{error.firstname}</p>}
          </div>
        </div>
        <div>
          <label>Lastname</label>
          <div>
            <input
              name="lastname"
              type="text"
              value={Item.lastname}
              onChange={handleChange}
            />
            {error.lastname && <p>{error.lastname}</p>}
          </div>
        </div>
        <div>
          <label>email</label>
          <div>
            <input
              name="email"
              type="email"
              value={Item.email}
              onChange={handleChange}
            />
            {error.email && <p>{error.email}</p>}
          </div>
        </div>
        <div>
          <label>Phone.No</label>
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
        <button type="submit" className="loginbutton">Signup</button>
      </form>
    </div>
  );
};
export default SignUp;

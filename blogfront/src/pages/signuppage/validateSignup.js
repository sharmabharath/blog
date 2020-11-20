export default function Validate(Item) {
    let errors = {};
    if (!Item.email) {
      errors.email = "Email is Required";
    } else if (!/\S+@\S+\.\S+/.test(Item.email)) {
      errors.email = "Email address is invalid";
    }
    if (!Item.password) {
      errors.password = "Password is required";
    } else if (Item.password.length < 6) {
      errors.password = "Password needs to be more than 6 characters";
    }
    if (!Item.firstname) {
      errors.firstname = "Firstname is required";
    } else if (Item.password.length < 3) {
      errors.firstname = "Firstname needs to be more than 3 characters";
    }
    if (!Item.lastname) {
      errors.lastname = "Lastname is required";
    } else if (Item.lastname.length < 3) {
      errors.lastname = "Lastname needs to be more than 3 characters";
    }
    if (!Item.phone) {
      errors.phone = "Phone number is required";
    } else if (Item.phone.length !== 10 ) {
      errors.phone = "Phone number needs to be 10 numbers";
    }
    
  
    return errors;
  }
  
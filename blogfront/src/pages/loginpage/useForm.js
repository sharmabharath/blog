import { useState, useEffect } from "react";
import history from '../../history/history'
const useForm = (callback, Validate) => {
  const [Item, setItem] = useState({
    phone: "",
    password: "",
  });

  const [error, setError] = useState({});
  const [isSubmitting, SetisSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target; //destructured here
    setItem({ ...Item, [name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    setError(Validate(Item));
    SetisSubmitting(true);
    try{
      const response = await fetch('http://localhost:5000/users/login',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
             
          
              mobileNo: Item.phone,
             
              password: Item.password
          })
      });

      const responseData = await response.json();
      console.log(responseData);
      history.goBack()
      
      //dispatch item and push to add car page
  } catch (err) {
      console.log(err);
  }
    console.log(Item);
  }
  //dispatch prevebent with recieved array from backend

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
      callback();
    }
  }, [error, callback, isSubmitting]);

  return {
    handleChange,
    handleSubmit,
    Item,
    error,
  };
};
export default useForm;

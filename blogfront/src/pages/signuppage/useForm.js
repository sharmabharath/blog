import { useState,useEffect } from "react";
 
const useForm = (callback,Validate) => {
  const [Item, setItem] = useState({
    email: "",
    password: "",
    firstname: '',
    lastname: '',
    phone:''
  });
  const [error, setError] = useState({ 
  });
const [isSubmitting, SetisSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target; //destructured here
    setItem({ ...Item, [name]: value });
    
  };
   
  async  function handleSubmit(e){
    e.preventDefault();
        
      setError(Validate(Item));
    SetisSubmitting(true);
    try{
      const response = await fetch('http://localhost:5000/users/signup',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstname: Item.firstname,
            lastname:Item.lastname,
              mobileNo: Item.phone,
              email: Item.email,
              password: Item.password
          })
      });

      const responseData = await response.json();
      console.log(responseData);
      
      //dispatch item and push to add car page
  } catch (err) {
      console.log(err);
  }
    };
    
    useEffect(() => {
        if (Object.keys(error).length === 0 && isSubmitting) {
            callback();
        }
    }, [error,callback,isSubmitting]);

  return {
    handleChange,
    handleSubmit,
      Item,
    error
  };
};
export default useForm;

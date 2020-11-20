import { useState, useEffect } from "react";

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

  function handleSubmit(e) {
    e.preventDefault();

    setError(Validate(Item));
    SetisSubmitting(true);

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

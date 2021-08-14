import { useState } from "react";

// write your custom hook here to control your checkout form
export default function useForm(initialValue) {
  const [values, setValues] = useState("formValues", initialValue);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const clearForm = (e) => {
    setValues(initialValue);
  };

  return [values, handleChanges, clearForm];
}

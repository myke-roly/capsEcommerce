import { useState, useEffect } from 'react';
/**
 * initialValues @object
 * validate @function
 * fn @function
 */

const useValidateInputs = (initialValues, validate, fn) => {
  const [state, setState] = useState(initialValues);
  const [errors, setErrors] = useState([]);
  const [submitForm, setSubmitForm] = useState(false);

    useEffect(() => {
      if(submitForm) {
        const notErrors = Object.keys(errors).length === 0;
        if(notErrors) fn(state);
      }
      setSubmitForm(false);
  }, [errors]);

  const handleChange = (e) => {
    const value = e.target.name === 'terms' ? e.target.checked : e.target.value;
    setState({ ...state, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsValidation = validate(state);
    setErrors(errorsValidation.errors);
    setSubmitForm(true);
  }

  const handleBlur = () => {
    const errorsValidation = validate(state);
    setErrors(errorsValidation.errors);
  }

  return { state, errors, handleChange, handleSubmit, handleBlur };
};

export default useValidateInputs;

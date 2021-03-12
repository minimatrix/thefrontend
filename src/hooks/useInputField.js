import React, { useEffect, useState, useRef } from 'react';

const useInputField = ({ label, defaultValue = undefined, type, validationRules = [], customValidator, ...props }) => {
  const [value, setValue] = useState(defaultValue);
  const [errors, setErrors] = useState([]);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  const inputRef = useRef();
  const onChange = e => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    validate();
  };

  // set value on change
  useEffect(() => {
    validate();
  }, [value]);

  useEffect(() => {
    if (isInvalid == false) {
      setErrors([]);
    }
  }, [isInvalid]);

  const addError = errorMessage => {
    const newErrors = errors;
    errors.filter(e => e == errorMessage).length < 1 && newErrors.push(errorMessage);

    setErrors([...newErrors]);
  };

  const validate = () => {
    //check the value type matches
    setErrors([]);

    let typeValidation = true;

    switch (type) {
      case 'text':
        // typeValidation = value.match(/^[0-9a-zA-Z]+$/);

        break;
      case 'number':
        typeValidation = value.match(/^[0-9]+$/);
        if (!typeValidation) {
          addError('Value must be numeric');
        }
        break;

      case 'email':
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        typeValidation = value !== undefined ? pattern.test(value) : true;
        if (!typeValidation) {
          addError('Value must be a valid email address');
        }

        break;

      case 'boolean':
        typeValidation = value == true || value == false || value == 1 || value == 0 || value == 'true' || value == 'false';
        break;

      case 'date':
      default:
        // no validation
        typeValidation = true;
    }

    const validationRuleResults = validationRules.map(rule => {
      let isValid;
      switch (rule.type) {
        case 'required':
          isValid = value !== '' && value !== undefined;
          if (!isValid) {
            addError('This value is required');
          }
          //   console.log({ isValid });
          break;

        case 'isNumeric':
          isValid = value.match(/^[0-9]+$/);
          if (!isValid) {
            addError('This value must be numeric');
          }
          break;

        case 'isAlpha':
          isValid = value.match(/^[a-zA-Z]+$/);
          if (!isValid) {
            addError('This value must be alphanumeric only');
          }
          break;

        case 'isAlphaNumeric':
          isValid = value.match(/^[0-9a-zA-Z]+$/);
          if (!isValid) {
            addError('This value must be alphanumeric only');
          }
          break;

        case 'min':
          isValid = value >= rule.value;
          if (!isValid) {
            addError(`This value must be greater than ${rule.value}`);
          }
          break;
        case 'max':
          isValid = value <= rule.value;
          if (!isValid) {
            addError(`This value must be less than ${rule.value}`);
          }
          break;

        case 'isUppercase':
          isValid = value.match(/^[A-Z]+$/);
          if (!isValid) {
            addError(`This value must be uppercase`);
          }
          break;
      }
    });

    // default to passing the customValidator if there isn't one, otherwise call the customValidator method for the result
    const customValidationResult = customValidator ? customValidator() : true;

    // check if there are any validationRules or customValidator that return false
    // if so then the validation has failed

    const valid = validationRuleResults.filter(validationResult => validationResult == false).length > 0 !== true && customValidationResult !== false && typeValidation !== false;

    setIsInvalid(valid ? false : true);
    return valid;
  };

  return {
    label,
    value,
    onChange,
    onBlur,
    type,
    validate,
    isInvalid,
    errors,
    isRequired,
    inputRef,
    ...props,
  };
};

export default useInputField;

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

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

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

    let validationOutcomes = [];

    let typeValidation = true;

    switch (type) {
      case 'text':
        // typeValidation = value.match(/^[0-9a-zA-Z]+$/);

        break;
      case 'number':
        const numberValidation = value.match(/^[0-9]+$/);
        if (!numberValidation) {
          addError('Value must be numeric');
        }
        validationOutcomes.push(numberValidation);
        break;

      case 'email':
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        const emailValidation = pattern.test(value);
        if (!emailValidation) {
          addError('Value must be a valid email address');
        }
        validationOutcomes.push(emailValidation);

        break;

      case 'boolean':
        const booleanValidation = value == true || value == false || value == 1 || value == 0 || value == 'true' || value == 'false';
        validationOutcomes.push(booleanValidation);
        break;

      case 'date':
      default:
      // no validation
    }

    validationRules.map(rule => {
      switch (rule.type) {
        case 'required':
          const requiredResult = value !== '' && value !== undefined;
          if (!requiredResult) {
            addError('This value is required');
          }
          setIsRequired(true);
          validationOutcomes.push(requiredResult);
          break;

        case 'isNumeric':
          const isNumericResult = value.match(/^[0-9]+$/);
          if (!isNumericResult) {
            addError('This value must be numeric');
          }
          validationOutcomes.push(isNumericResult);
          break;

        case 'isAlpha':
          const isAlphaResult = value.match(/^[a-zA-Z]+$/);
          if (!isAlphaResult) {
            addError('This value must be alphanumeric only');
          }
          validationOutcomes.push(isAlphaResult);
          break;

        case 'isAlphaNumeric':
          const isAlphaNumericResult = value.match(/^[0-9a-zA-Z]+$/);
          if (!isAlphaNumericResult) {
            addError('This value must be alphanumeric only');
          }
          validationOutcomes.push(isAlphaNumericResult);
          break;

        case 'min':
          const minResult = value >= rule.value;
          if (!minResult) {
            addError(`This value must be greater than ${rule.value}`);
          }
          validationOutcomes.push(minResult);
          break;

        case 'max':
          const maxResult = value <= rule.value;
          if (!maxResult) {
            addError(`This value must be less than ${rule.value}`);
          }
          validationOutcomes.push(maxResult);
          break;

        case 'isUppercase':
          const isUppercaseResult = value.match(/^[A-Z]+$/);
          if (!isUppercaseResult) {
            addError(`This value must be uppercase`);
          }
          validationOutcomes.push(isUppercaseResult);
          break;
      }
    });

    // default to passing the customValidator if there isn't one, otherwise call the customValidator method for the result
    const customValidationResult = customValidator ? customValidator() : true;

    // check if there are any validationRules or customValidator that return false
    // if so then the validation has failed

    const valid = validationOutcomes.filter(validationResult => validationResult == false).length > 0 !== true && customValidationResult !== false && typeValidation !== false;

    setIsInvalid(valid ? false : true);

    return valid;
  };

  return {
    label,
    value,
    defaultValue,
    onChange,
    onBlur,
    type,
    validate: () => validate(true),
    isInvalid,
    errors,
    isRequired,
    inputRef,
    ...props,
  };
};

export default useInputField;

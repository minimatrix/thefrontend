const validateInputs = inputs => {
  const isValid = inputs && inputs.filter(input => input == false).length < 1;
  return isValid;
};

export default validateInputs;

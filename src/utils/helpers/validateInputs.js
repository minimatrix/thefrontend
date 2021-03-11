const validateInputs = inputs => {
  console.log({ inputs });
  const isValid = inputs && inputs.filter(input => input == false).length < 1;
  console.log({ isValid });
  return isValid;
};

export default validateInputs;

const validateInputs = inputs => {
  const isValid =
    inputs &&
    inputs.filter(input => {
      console.log({ input });
      return input == false;
    }).length < 1;
  return isValid;
};

export default validateInputs;

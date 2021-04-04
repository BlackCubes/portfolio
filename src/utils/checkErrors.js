const checkErrors = (errorList) => {
  let valid = true;
  Object.values(errorList).forEach((err) => {
    if (err.length) {
      valid = false;
    }
  });
  return valid;
};

export default checkErrors;

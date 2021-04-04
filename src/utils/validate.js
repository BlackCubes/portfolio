import regex from './regex';

const validateForm = (inputName, inputValue, errors) => {
  switch (inputName) {
    case 'email':
      if (!inputValue.length) {
        errors((err) => ({ ...err, [inputName]: 'Required.' }));
      } else if (!regex.email.test(inputValue)) {
        errors((err) => ({
          ...err,
          [inputName]: 'Please provide a valid email.',
        }));
      } else {
        errors((err) => ({ ...err, [inputName]: '' }));
      }
      break;

    case 'name':
      if (!inputValue.split(' ')[0]) {
        errors((err) => ({ ...err, [inputName]: 'Required first name.' }));
      } else if (!inputValue.split(' ')[1]) {
        errors((err) => ({ ...err, [inputName]: 'Required last name.' }));
      } else if (inputValue.length < 2) {
        errors((err) => ({
          ...err,
          [inputName]: 'Must be a minimum of 2 characters.',
        }));
      } else if (inputValue.length > 70) {
        errors((err) => ({
          ...err,
          [inputName]: 'Must be less than or equal to 70 characters.',
        }));
      } else if (!regex.name.test(inputValue)) {
        errors((err) => ({ ...err, [inputName]: 'Please use a valid name' }));
      } else {
        errors((err) => ({ ...err, [inputName]: '' }));
      }
      break;

    case 'message':
      if (!inputValue.length) {
        errors((err) => ({ ...err, [inputName]: 'Required.' }));
      } else if (inputValue.length < 20) {
        errors((err) => ({
          ...err,
          [inputName]: 'Must be a minimum of 20 characters.',
        }));
      } else if (inputValue.length > 280) {
        errors((err) => ({
          ...err,
          [inputName]: 'Must be less than or equal to 280 characters.',
        }));
      } else {
        errors((err) => ({ ...err, [inputName]: '' }));
      }
      break;

    default:
      break;
  }
};

export default validateForm;

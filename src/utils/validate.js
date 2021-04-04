import regex from './regex';

const validateForm = (inputName, inputValue, errors) => {
  switch (inputName) {
    case 'email':
      if (!inputValue.length) {
        errors[inputName] = 'Required.';
      } else if (!regex.email.test(inputValue)) {
        errors[inputName] = 'Please provide a valid email.';
      } else {
        errors[inputName] = '';
      }
      break;

    case 'name':
      if (!inputValue.split(' ')[0]) {
        errors[inputName] = 'Required first name.';
      } else if (!inputValue.split(' ')[1]) {
        errors[inputName] = 'Required last name.';
      } else if (inputValue.length < 2) {
        errors[inputName] = 'Must be a minimum of 2 characters.';
      } else if (inputValue.length > 70) {
        errors[inputName] = 'Must be less than or equal to 70 characters.';
      } else if (!regex.name.test(inputValue)) {
        errors[inputName] = 'Please use a valid name.';
      } else {
        errors[inputName] = '';
      }
      break;

    case 'message':
      if (!inputValue.length) {
        errors[inputName] = 'Required.';
      } else if (inputValue.length < 20) {
        errors[inputName] = 'Must be a minimum of 20 characters.';
      } else if (inputValue.length > 280) {
        errors[inputName] = 'Must be less than or equal to 280 characters.';
      } else {
        errors[inputName] = '';
      }
      break;

    default:
      break;
  }
};

export default validateForm;

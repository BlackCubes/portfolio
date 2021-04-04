import { checkErrors, validateForm } from '../utils';

const submitController = (errorStack, ...elements) => {
  elements.forEach((element) => {
    const { name, value } = element;
    const messageElement = element.nextElementSibling.nextElementSibling;

    // Remove any potential error/success classes from previously
    element.classList.remove('error');
    element.classList.remove('success');
    messageElement.classList.remove('error');
    messageElement.classList.remove('success');

    validateForm(name, value, errorStack);

    if (checkErrors(errorStack)) {
      messageElement.classList.remove('error');
      messageElement.classList.add('success');
      messageElement.textContent = 'Noice!';
      element.classList.remove('error');
      element.classList.add('success');
    } else {
      element.classList.remove('success');
      element.classList.add('error');
      messageElement.classList.remove('success');
      messageElement.classList.add('error');
      messageElement.textContent = errorStack[name];
    }
  });
};

export default submitController;

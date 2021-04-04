import { checkErrors, validateForm } from '../utils';

const submitController = (errorStack, ...elements) => {
  elements.forEach((element) => {
    const { name, value } = element;
    const messageElement = element.nextElementSibling.nextElementSibling;

    validateForm(name, value, errorStack);

    if (checkErrors(errorStack)) {
      element.classList.remove('error');
      messageElement.textContent = 'Noice!';
    } else {
      element.classList.add('error');
      messageElement.textContent = errorStack[name];
    }
  });
};

export default submitController;

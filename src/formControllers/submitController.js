import { checkErrors, validateForm } from '../utils';

const submitController = (errorStack, ...elements) => {
  elements.forEach((element) => {
    const { name, value } = element;
    const messageElement = element.nextElementSibling.nextElementSibling;

    validateForm(name, value, errorStack);

    if (checkErrors(errorStack)) {
      name.classList.remove('error');
      messageElement.textContent = 'Noice!';
    } else {
      name.classList.add('error');
      messageElement.textContent = errorStack[name];
    }
  });
};

export default submitController;

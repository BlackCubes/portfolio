import { checkErrors, validateForm } from '../utils';

const submitController = (errorStack, ...elements) => {
  elements.forEach((element) => {
    const { name, value } = element;
    const messageElement = element.nextElementSibling.nextElementSibling;

    validateForm(name, value, errorStack);

    if (checkErrors(errorStack)) {
      messageElement.textContent = 'Noice!';
      element.classList.remove('error');
      element.target.classList.add('success');
    } else {
      element.classList.add('error');
      messageElement.textContent = errorStack[name];
    }
  });
};

export default submitController;

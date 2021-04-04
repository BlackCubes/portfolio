import { checkErrors, validateForm } from '../utils';

const inputController = (element, errorStack) => {
  const messageElement = element.nextElementSibling.nextElementSibling;

  element.addEventListener('input', (e) => {
    const { name, value } = e.target;

    validateForm(name, value, errorStack);

    if (checkErrors(errorStack)) {
      messageElement.textContent = 'Noice!';
      e.target.classList.remove('error');
    } else {
      e.target.classList.add('error');
      messageElement.textContent = errorStack[name];
    }
  });
};

export default inputController;

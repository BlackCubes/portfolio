import { checkErrors, validateForm } from '../utils';

const inputController = (element, errorStack) => {
  const messageElement = element.nextElementSibling.nextElementSibling;

  element.addEventListener('input', (e) => {
    const { name, value } = e.target;

    validateForm(name, value, errorStack);

    if (checkErrors(errorStack)) {
      e.target.classList.remove('error');
      messageElement.textContent = 'Noice!';
    } else {
      e.target.classList.add('error');
      messageElement.textContent = errorStack[name];
    }
  });
};

export default inputController;

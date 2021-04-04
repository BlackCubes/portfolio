import { checkErrors, validateForm } from '../utils';

const inputController = (element, errorStack) => {
  const messageElement = element.nextElementSibling.nextElementSibling;

  element.addEventListener('input', (e) => {
    const { name, value } = e.target;

    if (value.length > 0) {
      e.target.classList.add('not-empty');
    } else {
      e.target.classList.remove('not-empty');
    }

    validateForm(name, value, errorStack);

    if (checkErrors(errorStack)) {
      messageElement.classList.remove('error');
      messageElement.classList.add('success');
      messageElement.textContent = 'Noice!';
      e.target.classList.remove('error');
      e.target.classList.add('success');
    } else {
      e.target.classList.remove('success');
      e.target.classList.add('error');
      messageElement.classList.remove('success');
      messageElement.classList.add('error');
      messageElement.textContent = errorStack[name];
    }
  });
};

export default inputController;

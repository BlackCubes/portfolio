import { checkErrors, validateForm } from '../utils';

const inputController = (element, errorStack) => {
  element.addEventListener('input', (e) => {
    const { name, value } = e.target;

    // This is for styling the custom placeholder
    if (value.length > 0) {
      e.target.classList.add('not-empty');
    } else {
      e.target.classList.remove('not-empty');
    }

    validateForm(name, value, errorStack);

    if (checkErrors(errorStack)) {
      e.target.classList.remove('error');
      e.target.classList.add('success');
    } else {
      e.target.classList.remove('success');
      e.target.classList.add('error');
    }
  });
};

export default inputController;

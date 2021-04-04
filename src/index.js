import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
  formReset,
  inputController,
  submitController,
} from './formControllers';
import { checkErrors, sendEmail } from './utils';

// DOM ELEMENTS
const contactForm = document.getElementById('contactForm');

// DELEGATION
// -- contact form
if (contactForm) {
  const errorStack = { name: '', email: '', message: '' };

  // Check if the input values are empty/not empty
  // This is used for styling the custom placeholder
  inputController(document.getElementById('name'));
  inputController(document.getElementById('email'));
  inputController(document.getElementById('message'));

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate the form
    submitController(
      errorStack,
      document.getElementById('name'),
      document.getElementById('email'),
      document.getElementById('message')
    );

    if (checkErrors(errorStack)) {
      document.getElementById('contactFormBtn').textContent = 'Submitting...';

      await sendEmail(e.target);

      document.getElementById('contactFormBtn').textContent = 'Send';

      // Reset form elements
      formReset(
        document.getElementById('name'),
        document.getElementById('email'),
        document.getElementById('message')
      );
    }
  });
}

const formReset = (...elements) => {
  elements.forEach((element) => {
    // The element that displays the custom message
    const messageElement = element.nextElementSibling.nextElementSibling;

    // Reset the 'check empty' custom classes for inputs
    element.classList.remove('not-empty');

    // Reset the custom error classes for inputs/messages
    element.classList.remove('error');
    messageElement.classList.remove('error');

    // Reset the custom success classes for inputs/messages
    element.classList.remove('success');
    messageElement.classList.remove('success');

    // Reset the custom message
    messageElement.textContent = '';

    // Reset input values
    element.value = '';
  });
};

export default formReset;

const inputController = (element) => {
  element.addEventListener('input', (e) => {
    const { value } = e.target;

    // This is for styling the custom placeholder
    if (value.length > 0) {
      e.target.classList.add('not-empty');
    } else {
      e.target.classList.remove('not-empty');
    }
  });
};

export default inputController;

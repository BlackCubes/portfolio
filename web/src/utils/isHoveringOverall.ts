const isHoveringOverall = (...isHoveringStates: Array<boolean>): boolean => {
  for (
    let isHoveringStateIndex: number = 0;
    isHoveringStateIndex < isHoveringStates.length;
    isHoveringStateIndex += 1
  ) {
    if (isHoveringStates[isHoveringStateIndex]) return true;
  }

  return false;
};

export default isHoveringOverall;

const isLoadingOverall = (...isLoadingStates: Array<boolean>): boolean => {
  for (
    let isLoadingStateIndex: number = 0;
    isLoadingStateIndex < isLoadingStates.length;
    isLoadingStateIndex += 1
  ) {
    if (isLoadingStates[isLoadingStateIndex]) return true;
  }

  return false;
};

export default isLoadingOverall;

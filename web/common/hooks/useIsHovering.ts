import { useState } from 'react';

const useIsHoveringState = () => {
  const [isHovering, setIsHovering] = useState(false);

  return [isHovering, setIsHovering] as const;
};

export default useIsHoveringState;

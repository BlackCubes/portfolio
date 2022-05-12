import { useEffect, useState } from 'react';

const useScreenDimensions = () => {
  const [screenDimensions, setScreenDimensions] = useState({
    screenHeight: window.innerHeight,
    screenWidth: window.innerWidth,
  });

  const getScreenDimensions = (): void =>
    setScreenDimensions((currentScreenDimensions) => ({
      ...currentScreenDimensions,
      screenHeight: window.innerHeight,
      screenWidth: window.innerWidth,
    }));

  useEffect(() => {
    window.addEventListener('resize', getScreenDimensions);

    return () => {
      window.removeEventListener('resize', getScreenDimensions);
    };
  }, [screenDimensions]);

  return screenDimensions;
};

export default useScreenDimensions;

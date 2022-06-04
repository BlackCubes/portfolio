import { useEffect, useState } from 'react';

const useScreenDimensions = () => {
  const [screenDimensions, setScreenDimensions] = useState({
    screenHeight: typeof window !== 'undefined' ? window.innerHeight : 768,
    screenWidth: typeof window !== 'undefined' ? window.innerWidth : 1366,
  });

  const getScreenDimensions = (): void =>
    setScreenDimensions((currentScreenDimensions) => ({
      ...currentScreenDimensions,
      screenHeight: window.innerHeight,
      screenWidth: window.innerWidth,
    }));

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', getScreenDimensions);

      return () => {
        window.removeEventListener('resize', getScreenDimensions);
      };
    }
  }, [screenDimensions]);

  return screenDimensions;
};

export default useScreenDimensions;

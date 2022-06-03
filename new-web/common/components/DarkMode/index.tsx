import { FC, useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { useThemeContext } from 'common/contexts';

import { DarkModeButton, DarkModeCircle, DarkModeWrapper } from './styles';

interface IDarkModeToggle {
  isFirstMount: boolean;
}

const DarkModeToggle: FC<IDarkModeToggle> = ({ isFirstMount }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const { isDark, toggleDark } = useThemeContext();

  const wrapperAnimateControls = useAnimation();
  const { inView: wrapperInView, ref: wrapperRef } = useInView();

  useEffect(() => {
    if (!isFirstMount && wrapperInView) wrapperAnimateControls.start('visible');
  }, [isFirstMount, wrapperAnimateControls, wrapperInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isButtonClicked) {
        setIsButtonClicked(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isButtonClicked]);

  if (!toggleDark) {
    return null;
  }

  return (
    <DarkModeWrapper
      animate={wrapperAnimateControls}
      className="default-container"
      ref={wrapperRef}
    >
      <DarkModeButton
        className={isDark ? 'dark-mode' : ''}
        onClick={() => {
          toggleDark();

          setIsButtonClicked(true);
        }}
      >
        <DarkModeCircle
          key="dark-mode-circle"
          className={isButtonClicked ? 'clicked' : ''}
        />
      </DarkModeButton>
    </DarkModeWrapper>
  );
};

export default DarkModeToggle;

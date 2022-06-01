import React, { FC, useEffect, useState } from 'react';

import { useThemeContext } from 'common/contexts';

import { DarkModeButton, DarkModeCircle, DarkModeWrapper } from './styles';

const DarkModeToggle: FC = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const { isDark, toggleDark } = useThemeContext();

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
    <DarkModeWrapper className="default-container">
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

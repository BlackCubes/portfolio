import React, { FC } from 'react';

import { useThemeContext } from 'common/contexts';

import { DarkModeButton, DarkModeCircle, DarkModeWrapper } from './styles';

const DarkModeToggle: FC = () => {
  const { toggleDark } = useThemeContext();

  if (!toggleDark) {
    return null;
  }

  return (
    <DarkModeWrapper className="default-container">
      <DarkModeButton onClick={() => toggleDark()}>
        <DarkModeCircle />
      </DarkModeButton>
    </DarkModeWrapper>
  );
};

export default DarkModeToggle;

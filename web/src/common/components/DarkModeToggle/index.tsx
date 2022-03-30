import React, { FC } from 'react';

import { useThemeContext } from 'common/contexts';

import { DarkModeWrapper, DarkModeButton } from './styles';

const DarkModeToggle: FC = () => {
  const { toggleDark } = useThemeContext();

  if (!toggleDark) {
    return null;
  }

  return (
    <DarkModeWrapper>
      <DarkModeButton onClick={() => toggleDark()}>Toggle</DarkModeButton>
    </DarkModeWrapper>
  );
};

export default DarkModeToggle;

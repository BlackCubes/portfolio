import React, { FC, useEffect, useMemo, useState } from 'react';

import { FirstMountContext } from 'common/contexts';

const FirstMountProvider: FC = ({ children }) => {
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isFirstMount) {
        setIsFirstMount(false);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [isFirstMount]);

  const providerValue = useMemo(() => ({ isFirstMount }), [isFirstMount]);

  return (
    <FirstMountContext.Provider value={providerValue}>
      {children}
    </FirstMountContext.Provider>
  );
};

export default FirstMountProvider;

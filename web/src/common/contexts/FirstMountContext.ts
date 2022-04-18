import { createContext, useContext } from 'react';

interface IFirstMountContext {
  isFirstMount: boolean;
}

const FirstMountContext = createContext<IFirstMountContext>({
  isFirstMount: true,
});

export const useFirstMountContext = () => useContext(FirstMountContext);

export default FirstMountContext;

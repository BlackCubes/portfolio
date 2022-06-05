import { FC, useEffect } from 'react';
import { useAnimation } from 'framer-motion';

import {
  Container,
  Defs,
  LinearGradient1,
  LinearGradient2,
  Polygon,
  Stop,
  Svg,
  Wrapper,
} from './styles';

interface IInitialSiteTransition {
  isFirstMount: boolean;
}

const InitialSiteTransition: FC<IInitialSiteTransition> = ({
  isFirstMount,
}) => {
  const containerControls = useAnimation();

  useEffect(() => {
    if (!isFirstMount) {
      containerControls.start('animate');

      const timer = setTimeout(() => {
        document.body.classList.remove('hidden-overflow');
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      document.body.classList.add('hidden-overflow');
    }
  }, [isFirstMount, containerControls]);

  return (
    <Container animate={containerControls}>
      <Wrapper>
        <Svg>
          <Defs>
            <LinearGradient1>
              <Stop offset="0" stopColor="#fff" />

              <Stop offset="0.35" stopColor="#231f20" />

              <Stop offset="1" stopColor="#000" />
            </LinearGradient1>

            <LinearGradient2>
              <Stop offset="0" stopColor="#fff" />

              <Stop offset="1" stopColor="#000" />
            </LinearGradient2>
          </Defs>

          <Polygon />
        </Svg>
      </Wrapper>
    </Container>
  );
};

export default InitialSiteTransition;

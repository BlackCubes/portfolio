import React, { FC } from 'react';

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
}) => (
  <Container
    onAnimationComplete={() =>
      document.body.classList.remove('hidden-overflow')
    }
    {...(!isFirstMount && {
      animate: {
        opacity: 0,
        transition: { duration: 2 },
      },
    })}
  >
    <Wrapper
      onAnimationStart={() => document.body.classList.add('hidden-overflow')}
    >
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

export default InitialSiteTransition;

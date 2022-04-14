import React, { FC } from 'react';

import {
  Defs,
  LinearGradient1,
  LinearGradient2,
  Polygon,
  Stop,
  Svg,
  Wrapper,
} from './styles';

const InitialSiteTransition: FC = () => (
  <Wrapper
    animate="animate"
    initial="initial"
    variants={{
      animate: {
        height: 0,
        transition: {
          when: 'afterChildren',
          duration: 2,
          ease: [0.87, 0, 0.13, 1],
        },
      },
      initial: { height: '100%', bottom: 0, left: 0 },
    }}
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
);

export default InitialSiteTransition;

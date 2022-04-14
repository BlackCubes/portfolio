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
);

export default InitialSiteTransition;

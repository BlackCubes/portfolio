import React, { FC } from 'react';

import {
  Defs,
  LinearGradient1,
  LinearGradient2,
  LoaderComponentWrapper,
  Polygon,
  Stop,
  Svg,
} from './styles';

const LoadingIcon: FC = () => (
  <LoaderComponentWrapper>
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

      <Polygon
        initial={{ pathLength: 0.018 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </Svg>
  </LoaderComponentWrapper>
);

export default LoadingIcon;

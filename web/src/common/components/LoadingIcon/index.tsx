import React, { FC } from 'react';

import {
  Defs,
  LinearGradient1,
  LinearGradient2,
  Polygon,
  Stop,
  Svg,
} from './styles';

const LoadingIcon: FC = () => (
  //   <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 550 550">
  //   <defs>
  //     <style>
  //       .cls-1 {
  //         stroke-miterlimit: 10;
  //         stroke-width: 40px;
  //         fill: url(#linear-gradient);
  //         stroke: url(#linear-gradient-2);
  //       }
  //     </style>

  //     <linearGradient id="linear-gradient" x1="24" y1="276" x2="506" y2="276" gradientUnits="userSpaceOnUse">
  //       <stop offset="0" stop-color="#fff"/>
  //       <stop offset="0.35" stop-color="#231f20"/>
  //       <stop offset="1" stop-color="#000"/>
  //     </linearGradient>

  //     <linearGradient id="linear-gradient-2" x1="23.98" y1="276" x2="522" y2="276" gradientUnits="userSpaceOnUse">
  //       <stop offset="0" stop-color="#fff"/>
  //       <stop offset="1" stop-color="#000"/>
  //     </linearGradient>
  //   </defs>

  //   <polygon class="cls-1" points="506 60.75 506 60.75 502 60.75 502 21.25 502 21.25 502 60.75 225.87 60.75 231.87 54.75 231.87 54.75 225.87 60.75 218 60.75 218 60.75 225.87 60.75 38.13 248.5 38.13 248.5 225.87 60.75 502 60.75 502 316.75 312 316.75 312 254.75 349.5 254.75 312 254.75 312 242.75 312 242.75 312 254.75 24.5 254.75 24.5 254.75 312 254.75 312 316.75 226 316.75 231.87 310.88 231.87 310.88 226 316.75 218 316.75 218 316.75 226 316.75 38.13 504.62 38.13 504.62 226 316.75 312 316.75 312 510.75 24 510.75 24 510.75 312 510.75 312 530.75 312 530.75 312 316.75 502 316.75 502 336.25 502 336.25 502 316.75 506 316.75 506 316.75 502 316.75 502 60.75 506 60.75"/>
  // </svg>
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
      initial={{ pathLength: 0.02 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration: 1.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    />
  </Svg>
);

export default LoadingIcon;

import React from 'react';

export type LogoProps = {
  textColor?: string,
  size?: number,
};

const ratio = 86 / 72;

const Logo: React.FC<LogoProps> = ({
  textColor = 'white',
  size = 72,
}) => {
  const height = size;
  const width = size * ratio;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 86 72"
    >
      <g fill={textColor}>
        <path d="M9.89,57.83h3.39v0.53l-5.86,13.47h-1.5l-5.92,-13.47v-0.53h3.39l3.24,7.83h0.1zM20.41,68.57h1.76v3.11h-7.01v-3.11h1.76v-7.66h-1.62v-3.09h6.73v3.09h-1.62zM28.51,68.49h5.01v3.19h-8.57v-13.85h3.56zM44.73,57.83h3.61v13.85h-1.26l-6.97,-6.81v6.81h-3.65v-10.91h-1.86v-3.03h3.13v0.04h0.02l6.99,6.84zM56.46,68.57h1.76v3.11h-7.01v-3.11h1.76v-7.66h-1.62v-3.09h6.73v3.09h-1.62zM71.85,57.83v9.24c0,0.61 -0.1,1.17 -0.3,1.67c-0.19,0.5 -0.46,0.95 -0.81,1.34c-0.35,0.39 -0.75,0.72 -1.21,0.99c-0.46,0.27 -0.96,0.47 -1.49,0.61c-0.54,0.14 -1.09,0.21 -1.66,0.21c-0.57,0 -1.12,-0.07 -1.65,-0.21c-0.54,-0.14 -1.03,-0.34 -1.5,-0.61c-0.46,-0.27 -0.87,-0.6 -1.22,-0.99c-0.35,-0.39 -0.62,-0.84 -0.82,-1.34c-0.2,-0.5 -0.3,-1.06 -0.3,-1.67v-9.24h3.38v9.18c0,0.28 0.06,0.53 0.18,0.74c0.12,0.21 0.28,0.39 0.49,0.53c0.21,0.14 0.43,0.24 0.68,0.31c0.25,0.07 0.5,0.11 0.76,0.11c0.26,0 0.51,-0.03 0.76,-0.11c0.25,-0.07 0.47,-0.17 0.67,-0.31c0.2,-0.14 0.36,-0.31 0.48,-0.53c0.12,-0.21 0.18,-0.45 0.18,-0.74v-9.18zM85.37,67.62c-0.01,0.65 -0.14,1.22 -0.39,1.73c-0.25,0.5 -0.59,0.94 -1.03,1.3c-0.44,0.36 -0.94,0.65 -1.5,0.87c-0.56,0.21 -1.15,0.36 -1.77,0.43c-0.62,0.07 -1.24,0.07 -1.86,-0.01c-0.62,-0.08 -1.21,-0.23 -1.76,-0.45c-0.56,-0.22 -1.05,-0.52 -1.48,-0.9c-0.43,-0.37 -0.77,-0.82 -1.02,-1.35c-0.24,-0.53 -0.37,-1.13 -0.36,-1.8h3.42c0,0.25 0.09,0.47 0.24,0.65c0.15,0.18 0.36,0.32 0.62,0.44c0.25,0.11 0.54,0.19 0.84,0.23c0.31,0.04 0.62,0.05 0.92,0.02c0.31,-0.03 0.59,-0.09 0.85,-0.19c0.26,-0.1 0.46,-0.23 0.62,-0.39c0.16,-0.17 0.24,-0.36 0.24,-0.59c0,-0.24 -0.07,-0.44 -0.2,-0.6c-0.13,-0.15 -0.31,-0.28 -0.54,-0.37c-0.23,-0.09 -0.5,-0.16 -0.81,-0.2c-0.3,-0.05 -0.63,-0.08 -0.98,-0.1c-0.75,-0.05 -1.44,-0.16 -2.04,-0.33c-0.61,-0.17 -1.14,-0.42 -1.57,-0.75c-0.44,-0.33 -0.78,-0.75 -1.02,-1.27c-0.24,-0.52 -0.36,-1.16 -0.38,-1.9c-0.01,-0.66 0.1,-1.25 0.33,-1.77c0.23,-0.51 0.55,-0.96 0.96,-1.33c0.41,-0.37 0.88,-0.66 1.41,-0.88c0.53,-0.22 1.09,-0.37 1.67,-0.44c0.59,-0.08 1.18,-0.08 1.77,0c0.59,0.07 1.15,0.22 1.68,0.44c0.53,0.22 1,0.52 1.41,0.88c0.41,0.37 0.73,0.82 0.97,1.33c0.23,0.52 0.35,1.11 0.34,1.77h-3.36c0,-0.26 -0.07,-0.48 -0.2,-0.67c-0.14,-0.19 -0.31,-0.33 -0.53,-0.44c-0.22,-0.1 -0.47,-0.17 -0.73,-0.2c-0.27,-0.03 -0.53,-0.03 -0.8,0.01c-0.27,0.04 -0.52,0.11 -0.74,0.22c-0.23,0.11 -0.42,0.25 -0.56,0.42c-0.15,0.17 -0.23,0.38 -0.25,0.61c-0.02,0.26 0.03,0.48 0.13,0.64c0.1,0.17 0.26,0.3 0.46,0.4c0.21,0.1 0.44,0.17 0.72,0.23c0.27,0.06 0.57,0.1 0.88,0.13c0.55,0.06 1.09,0.13 1.62,0.22c0.52,0.09 1.02,0.22 1.48,0.39c0.46,0.17 0.86,0.4 1.21,0.7c0.35,0.29 0.62,0.68 0.82,1.14c0.19,0.47 0.29,1.05 0.3,1.73z" />
        <path d="M52.42,0.65l8.75,2.95l4.66,36.18l-14.28,8.55l-8.51,0.02v0l-0.35,0l-0.35,0v0l-8.51,-0.02l-14.28,-8.55l4.66,-36.18l8.75,-2.95l0.89,4.11l2.69,-0.61l0.17,-4.15l5.63,0v0l0.35,0l0.35,0v0l5.63,0l0.17,4.15l2.69,0.61zM40.05,4.39l-0.02,3.81l-8.39,1.84l-0.85,-3.82l-2.14,0.63l-3.59,29.75l10.23,6.15l7.05,-0.03v0l0.35,0l0.35,0v0l7.05,0.03l10.23,-6.15l-3.59,-29.75l-2.14,-0.63l-0.85,3.82l-8.39,-1.84l-0.02,-3.81l-2.63,-0.01z" />
      </g>
    </svg>
  );
};

export default Logo;

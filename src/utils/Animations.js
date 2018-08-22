import { keyframes } from 'styled-components';

export const FadeOut = keyframes`
  to {
    background: rgba(0,0,0,.9);
  }
`;

export const FadeIn = keyframes`
  to {
    background: rgba(0,0,0,.15);
  }
`;

export const Flash = keyframes`
  0%, 49.9% {
    background: rgba(0,0,0,.15);
  }
  50%, 100% {
    background: rgba(0,0,0,1);
  }
`;

export const ShowScore = (score) => keyframes`
  to {
    stroke-dasharray: ${score * 10} 100;
  }
`;
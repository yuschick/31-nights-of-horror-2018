import React from 'react';
import styled from 'styled-components';
import { Stabbing, StabbingFlipped } from '../../utils/Animations';
import LoadingStab from '../../svg/stab.svg';

const Container = styled.div`
  align-content: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

const Image = styled.img.attrs({
  src: LoadingStab,
  alt: 'Loading'
})`
  animation: ${Stabbing} .35s ease infinite alternate;
  height: auto;
  opacity: .6;
  transform-origin: left center;
  width: 100px;

  ${props => props.flipped && `
    animation: ${StabbingFlipped} .35s ease infinite alternate;
    margin-left: 4rem;
    transform: scaleX(-1);
  `};
`;

const LoadingScreen = () => (
  <Container>
    <Image />
    <Image flipped />
  </Container>
);

export default LoadingScreen;

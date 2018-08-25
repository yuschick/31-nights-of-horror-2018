import React from 'react';
import styled from 'styled-components';
import LoadingSkull from '../../svg/skull.svg';

const Container = styled.div`
  align-content: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

const Image = styled.img.attrs({
  src: LoadingSkull,
  alt: 'Loading'
})`
  height: auto;
  width: 150px;
`;

const LoadingScreen = () => (
  <Container>
    <Image />
  </Container>
);

export default LoadingScreen;

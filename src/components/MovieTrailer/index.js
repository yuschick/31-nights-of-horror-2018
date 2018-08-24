import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
`;

const IFrame = styled.iframe.attrs({
  allow: 'autoplay',
  frameBorder: 0,
  height: '100%',
  src: `https://www.youtube.com/embed/${props => props.trailer}?rel=0&amp;controls=0&amp;showinfo=0`,
  width: '100%'
})`
  height: 100%;
  width: 100%;
`;

const MovieTrailer = ({ trailer }) => {
  return (
    <Container>
      <IFrame />
    </Container>
  );
};

MovieTrailer.propTypes = {
  trailer: PropTypes.string.isRequired
};

export default MovieTrailer;
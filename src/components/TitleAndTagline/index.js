import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {colors, fonts, space} from '../../styles/theme';

const MovieTitle = styled.h2`
  color: ${colors.white};
  font: 2.75rem/1 ${fonts.oswald};
  -webkit-text-fill-color: ${colors.white};
  -webkit-text-stroke: 1px ${colors.black};
  text-shadow:
       3px 3px 0 #000,
     -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;
  text-transform: uppercase;
`;

const MovieTagLine = styled.h3`
  color: ${colors.lightGrey};
  font: 1.2rem/1.15 ${fonts.raleway};
  padding: calc(${space.vert} / 2) 0;
`;

const TitleAndTagline = ({ title, tagline }) => {
  return ([
    <MovieTitle key='title'>
      {title}
    </MovieTitle>,
    <MovieTagLine key='tagline'>
      {tagline}
    </MovieTagLine>
  ]);
}

TitleAndTagline.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired
};

export default TitleAndTagline;

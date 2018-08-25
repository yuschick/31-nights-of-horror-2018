import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, space } from '../../styles/theme';

const RatingContainer = styled.div`
  background: ${props => props.rating === 'nr' ? colors.black : props.rating === 'r' ? colors.tertiary : colors.darkGrey};
  border-radius: 2px;
  color: ${colors.white};
  letter-spacing: 1.25px;
  line-height: 1.5;
  padding: 0 ${space.hori};
  text-transform: uppercase;
`;

const MovieRating = ({ rating }) => {
  return (
    <RatingContainer rating={rating.toLowerCase()}>
      <span>
        {rating}
      </span>
    </RatingContainer>
  );
}

MovieRating.propTypes = {
  rating: PropTypes.string.isRequired
};

export default MovieRating;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from '../../styles/theme';

const Overview = styled.p`
  letter-spacing: 1.2px;
  margin: ${space.vert} 0;
`;

class MovieOverview extends Component {
  render() {
    return (
      <Overview>
          {this.props.overview}
      </Overview>
    );
  }
}

MovieOverview.propTypes = {
  overview: PropTypes.string.isRequired
};

export default MovieOverview;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { size } from '../../styles/theme';

import DateBar from '../../components/DateBar/';

const Container = styled.section`
  display: flex;
  position: relative;
  width: 100%;

  &:nth-child(even) {
    justify-content: flex-end;
  }
`;

class Card extends Component {
  render() {
    return (
      <Container>
        <DateBar
          date={this.props.movie.date}
          day={this.props.movie.day}
        />
      </Container>
    );
  }
}

Card.propTypes = {
  movie: PropTypes.shape({
    date: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired
  })
};

export default Card;

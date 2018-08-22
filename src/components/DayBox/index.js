import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {colors, fonts, space} from '../../styles/theme';

const DayBoxContainer = styled.div `
  align-items: center;
  background: ${colors.secondary};
  color: ${colors.white};
  display: flex;
  font: 1.25rem/1 ${fonts.raleway};
  grid-column-end: span 3;
  justify-content: center;
  letter-spacing: 1.15px;
  outline: 1rem solid ${colors.black};
  padding: ${space.default};
  text-transform: uppercase;
`;

class DayBox extends Component {
  render() {
    return (
      <DayBoxContainer>
        {this.props.day}
      </DayBoxContainer>
    );
  }
}

DayBox.propTypes = {
  day: PropTypes.string.isRequired
};

export default DayBox;

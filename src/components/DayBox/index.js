import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {colors, fonts, space} from '../../styles/theme';

const DayBoxContainer = styled.div`
  align-items: center;
  background: ${colors.secondary};
  color: ${colors.white};
  display: flex;
  flex: 3;
  font: 1.25rem/1 ${fonts.raleway};
  justify-content: center;
  letter-spacing: 1.15px;
  outline: 1rem solid ${colors.black};
  padding: ${space.default};
  text-transform: uppercase;

  @media (max-width: 750px) {
    outline: none;
  }
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

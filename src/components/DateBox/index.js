import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {colors, fonts} from '../../styles/theme';

const DateBoxContainer = styled.div`
  align-items: center;
  background: ${colors.tertiary};
  color: ${colors.white};
  display: flex;
  flex: 1;
  font: 1.25rem/1 ${fonts.raleway};
  justify-content: center;
  margin-left: 1rem;
  min-width: 40px;
  outline: 1rem solid ${colors.black};

  @media (max-width: 750px) {
    outline: none;
  }
`;

class DateBox extends Component {
  render() {
    return (
      <DateBoxContainer>
        {this.props.date < 10
          ? `0${this.props.date}`
          : this.props.date}
      </DateBoxContainer>
    );
  }
}

DateBox.propTypes = {
  date: PropTypes.number.isRequired
};

export default DateBox;

import React from 'react';
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
  opacity: ${props => props.trailerActive ? '.2' : 1};
  outline: 1rem solid ${colors.black};
  transition: opacity .5s ease;

  @media (max-width: 750px) {
    outline: none;
  }
`;

const DateBox = ({ date, trailerActive }) => {
  return (
    <DateBoxContainer trailerActive={trailerActive}>
      {date < 10
        ? `0${date}`
        : date}
    </DateBoxContainer>
  );
}

DateBox.propTypes = {
  date: PropTypes.number.isRequired,
  trailerActive: PropTypes.bool.isRequired
};

export default DateBox;

import React from 'react';
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
  opacity: ${props => props.trailerActive ? '.2' : 1};
  outline: 1rem solid ${colors.black};
  padding: ${space.default};
  text-transform: uppercase;
  transition: opacity .5s ease;
`;

const DayBox = ({ day, trailerActive }) => {
  return (
    <DayBoxContainer trailerActive={trailerActive}>
      {day}
    </DayBoxContainer>
  );
}

DayBox.propTypes = {
  day: PropTypes.string.isRequired,
  trailerActive: PropTypes.bool.isRequired
};

export default DayBox;

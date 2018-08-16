import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, size, space } from '../../styles/theme';

const Container = styled.div`
  display: flex;
  height: ${size.dateBarHeight};

  ${props => props.date % 2 === 0 && `
    flex-direction: row-reverse;
  `}
`;

const DateBox = styled.div`
  align-items: center;
  background: ${colors.tertiary};
  color: ${colors.white};
  display: flex;
  justify-content: center;
  padding: 0 ${space.hori};
  min-width: 40px;
`;

const DayBox = styled.div`
  align-items: center;
  background: ${colors.primary};
  color: ${colors.white};
  display: flex;
  justify-content: center;
  padding: 0 calc(${space.hori} * 2);
  text-transform: uppercase;
`;

const DateBar = ({ date, day }) => (
  <Container date={date}>
    <DateBox>
      {date}
    </DateBox>
    <DayBox>
      {day}
    </DayBox>
  </Container>
);

DateBar.propTypes = {
  date: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired
};

export default DateBar;

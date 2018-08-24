import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../styles/theme';

const Container = styled.div`
  background: ${colors.black};
  height: 50px;
  position: relative;
  width: 50px;

  &:hover path {
    stroke: ${colors.lightGrey};
  }

  &:hover span {
    color: ${colors.white};
  }
`;

const CloseButton = styled.button`
  appearance: none;
  -webkit-appearance: none;
  background: none;
  border: 0;
  cursor: pointer;
  height: 100%;
  padding: 0;
  width: 100%;
`;

const SVGContainer = styled.svg.attrs({
  height: '100%',
  viewBox: '0 0 36 36',
  width: '100%'
})``;

const CloseOutline = styled.path.attrs({
  d: 'M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831'
})`
  fill: none;
  stroke: ${colors.scoreTrack};
  stroke-width: 2.5;
  transition: stroke .25s ease;
`;

const CloseText = styled.span`
  color: ${colors.lightGrey};
  display: block;
  font-size: 1.5rem;
  font.weight: 700;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translateY(calc(-50% + 1px));
  transition: color .25s ease;
  width: 100%;
`;

const CloseIcon = ({ toggleTrailer }) => {
  return (
    <Container>
      <CloseButton onClick={(e) => {
        e.preventDefault();
        toggleTrailer();
      }}>
        <SVGContainer>
          <CloseOutline />
        </SVGContainer>
        <CloseText>X</CloseText>
      </CloseButton>
    </Container>
  );
};

CloseIcon.propTypes = {
  toggleTrailer: PropTypes.func.isRequired
};

export default CloseIcon;
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, times } from '../../../styles/theme';
import { FadeIn, FadeOut, Flash } from '../../../utils/Animations.js';

const GridCell = styled.div`
  animation: ${FadeOut} ${times.base} ease infinite alternate;
  background: rgba(0,0,0,.15);
  grid-area: ${props => props.area};
  outline: 1rem solid ${colors.black};
  transition: background 1s ease;

  @media (max-width: 750px) {
    animation: none;
    display: none;
  }

  @media (max-width: 1000px) {
    ${props => props.hideAt === 'MD' && `
      display: none;
    `};
  }

  ${props => props.hide && `
    animation: ${FadeIn} calc(${times.base} * 1.1) infinite alternate;
    background: rgba(0,0,0,1);
  `}

  ${props => props.flash && `
    animation: ${Flash} ${times.base} infinite alternate;
  `}

  ${props => props.hide && props.flash && `
    animation: ${Flash} ${times.base} infinite alternate-reverse;
  `}

  ${props => props.delayXS && `
    animation-delay: ${times.delayXs};
  `}

  ${props => props.delaySM && `
    animation-delay: ${times.delaySm};
  `}

  ${props => props.delayMD && `
    animation-delay: ${times.delayMd};
  `}

  ${props => props.delayLG && `
    animation-delay: ${times.delayLg};
  `}

  ${props => props.delayXL && `
    animation-delay: ${times.delayXl};
  `}

  ${props => props.noFade && `
    animation: none;
  `}

  ${props => props.slow && `
    animation-duration: calc(${times.base} * 1.5);
  `}

  ${props => props.fast && `
    animation-duration: calc(${times.base} * .75);
  `}

  ${props => props.focus && `
    animation: ${FadeIn} calc(${times.base} * 1.1) ${times.delaySm} infinite alternate;
    background: rgba(0,0,0,1);
  `}

  ${props => props.dim && `
    animation: none;
    background: rgba(0,0,0,.9);
    transition: background 1s ease;
  `}
`;

const Cell = ({
  dim,
  focus,
  noFade,
  hide,
  hideAt,
  flash,
  delayXS,
  delaySM,
  delayMD,
  delayLG,
  delayXL,
  fast,
  slow,
  area,
  children
}) => {
  return (
    <GridCell
      dim={dim}
      focus={focus}
      noFade={noFade}
      hide={hide}
      hideAt={hideAt}
      flash={flash}
      delayXS={delayXS}
      delaySM={delaySM}
      delayMD={delayMD}
      delayLG={delayLG}
      delayXL={delayXL}
      fast={fast}
      slow={slow}
      area={area}
    >
      {children}
    </GridCell>
  );
}

Cell.propTypes = {
  dim: PropTypes.bool,
  focus: PropTypes.bool,
  noFade: PropTypes.bool,
  hide: PropTypes.bool,
  hideAt: PropTypes.oneOf(['MD', 'SM']),
  flash: PropTypes.bool,
  delayXS: PropTypes.bool,
  delaySM: PropTypes.bool,
  delayMD: PropTypes.bool,
  delayLG: PropTypes.bool,
  delayXL: PropTypes.bool,
  fast: PropTypes.bool,
  slow: PropTypes.bool,
  area: PropTypes.string.isRequired,
  children: PropTypes.any
};

export default Cell;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, times } from '../../../styles/theme';
import { FadeIn, FadeOut, Flash } from '../../../utils/Animations.js';

const GridCell = styled.div`
  animation: ${FadeOut} ${times.base} ease infinite alternate;
  background: rgba(0,0,0,.15);
  outline: 1rem solid ${colors.black};

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

  ${props => props.span2col && `
    grid-column-end: span 2;
  `}

  ${props => props.span3col && `
    grid-column-end: span 3;
  `}

  ${props => props.span4col && `
    grid-column-end: span 4;
  `}

  ${props => props.span2row && `
    grid-row-end: span 2;
  `}

  ${props => props.span3row && `
    grid-row-end: span 3;
  `}

  ${props => props.span4row && `
    grid-row-end: span 4;
  `}

  ${props => props.span2area && `
    grid-column-end: span 2;
    grid-row-end: span 2;
  `}

  ${props => props.span3area && `
    grid-column-end: span 3;
    grid-row-end: span 3;
  `}

  ${props => props.span4area && `
    grid-column-end: span 4;
    grid-row-end: span 4;
  `}

  ${props => props.span2col3row && `
    grid-column-end: span 2;
    grid-row-end: span 3;
  `}

  ${props => props.span2col4row && `
    grid-column-end: span 2;
    grid-row-end: span 4;
  `}

  ${props => props.span3col2row && `
    grid-column-end: span 3;
    grid-row-end: span 2;
  `}

  ${props => props.span3col4row && `
    grid-column-end: span 3;
    grid-row-end: span 4;
  `}

  ${props => props.span4col2row && `
    grid-column-end: span 4;
    grid-row-end: span 2;
  `}

  ${props => props.span4col3row && `
    grid-column-end: span 4;
    grid-row-end: span 3;
  `}

  ${props => props.dim && `
    animation: none;
    background: rgba(0,0,0,.1);
    transition: background .5s ease;
  `}

  ${props => props.focus && `
    animation: ${FadeIn} calc(${times.base} * 1.1) ${times.delaySm} infinite alternate;
    background: rgba(0,0,0,1);
  `}
`;

class Cell extends Component {
  render() {
    return (
      <GridCell
        dim={this.props.dim}
        focus={this.props.focus}
        noFade={this.props.noFade}
        hide={this.props.hide}
        flash={this.props.flash}
        delayXS={this.props.delayXS}
        delaySM={this.props.delaySM}
        delayMD={this.props.delayMD}
        delayLG={this.props.delayLG}
        delayXL={this.props.delayXL}
        fast={this.props.fast}
        slow={this.props.slow}
        span2col={this.props.span2col}
        span3col={this.props.span3col}
        span4col={this.props.span4col}
        span2row={this.props.span2row}
        span3row={this.props.span3row}
        span4row={this.props.span4row}
        span2area={this.props.span2area}
        span3area={this.props.span3area}
        span4area={this.props.span4area}
        span2col3row={this.props.span2col3row}
        span2col4row={this.props.span2col4row}
        span3col2row={this.props.span3col2row}
        span3col4row={this.props.span3col4row}
        span4col2row={this.props.span4col2row}
        span4col3row={this.props.span4col3row}
      >
        {this.props.children}
      </GridCell>
    );
  }
}

Cell.propTypes = {
  dim: PropTypes.bool,
  focus: PropTypes.bool,
  noFade: PropTypes.bool,
  hide: PropTypes.bool,
  flash: PropTypes.bool,
  delayXS: PropTypes.bool,
  delaySM: PropTypes.bool,
  delayMD: PropTypes.bool,
  delayLG: PropTypes.bool,
  delayXL: PropTypes.bool,
  fast: PropTypes.bool,
  slow: PropTypes.bool,
  span2col: PropTypes.bool,
  span3col: PropTypes.bool,
  span4col: PropTypes.bool,
  span2row: PropTypes.bool,
  span3row: PropTypes.bool,
  span4row: PropTypes.bool,
  span2area: PropTypes.bool,
  span3area: PropTypes.bool,
  span4area: PropTypes.bool,
  span2col3row: PropTypes.bool,
  span2col4row: PropTypes.bool,
  span3col2row: PropTypes.bool,
  span3col4row: PropTypes.bool,
  span4col2row: PropTypes.bool,
  span4col3row: PropTypes.bool,
  children: PropTypes.any
};

export default Cell;

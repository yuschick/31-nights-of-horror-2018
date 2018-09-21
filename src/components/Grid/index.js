import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../styles/theme';
import Cell from './Cell';
import DayBox from '../DayBox';
import DateBox from '../DateBox';
import MovieCardContainer from '../MovieCardContainer';

const DayWrapper = styled.div`
  background: ${colors.black};
  display: flex;
  grid-area: D;
  justify-content: space-between;
  outline: 1rem solid ${colors.black};
  position: relative;
`;

const Grid = ({
  day,
  date,
  movie,
  dim,
  focus1,
  focus2,
  focus3,
  trailerActive,
  toggleTrailer
}) => {
  return ([
    <DayWrapper key='cell-D'>
      <DayBox trailerActive={trailerActive} day={day} />
      <DateBox trailerActive={trailerActive} date={date} />
    </DayWrapper>,
    <MovieCardContainer
      key='cell-C'
      movie={movie}
      trailerActive={trailerActive}
      toggleTrailer={toggleTrailer}
    />,
    <Cell dim={dim} area='F1' focus={focus1} delayLG key='cell-F1' />,
    <Cell dim={dim} area='F2' focus={focus2} delayXL key='cell-F2' />,
    <Cell dim={dim} area='F3' focus={focus3} noFade key='cell-F3' />,
    <Cell dim={dim} area='a' noFade key='cell-a' />,
    <Cell dim={dim} area='b' key='cell-b' />,
    <Cell dim={dim} area='c' noFade key='cell-c' />,
    <Cell dim={dim} area='d' noFade key='cell-d' />,
    <Cell dim={dim} area='e' hide noFade key='cell-e' />,
    <Cell dim={dim} area='f' noFade key='cell-f' />,
    <Cell dim={dim} area='g' noFade key='cell-g' />,
    <Cell dim={dim} area='h' delayLG fast key='cell-h' />,
    <Cell dim={dim} area='i' delaySM fast key='cell-i' />,
    <Cell dim={dim} area='j' noFade key='cell-j' />,
    <Cell dim={dim} area='k' hide noFade key='cell-k' />,
    <Cell dim={dim} area='l' hide noFade key='cell-l' />,
    <Cell dim={dim} area='m' hide noFade key='cell-m' />,
    <Cell dim={dim} area='n' hide noFade key='cell-n' />,
    <Cell dim={dim} area='o' noFade key='cell-o' />,
    <Cell dim={dim} area='p' noFade key='cell-p' />,
    <Cell dim={dim} area='q' noFade hideAt="MD" key='cell-q' />,
    <Cell dim={dim} area='r' slow noFade hideAt="MD" key='cell-r' />,
    <Cell dim={dim} area='s' noFade key='cell-s' />,
    <Cell dim={dim} area='t' noFade key='cell-t' />,
    <Cell dim={dim} area='u' hide noFade key='cell-u' />,
    <Cell dim={dim} area='v' hide noFade key='cell-v' />,
    <Cell dim={dim} area='w' hide slow key='cell-w' />,
    <Cell dim={dim} area='x' flash slow delaySM key='cell-x' />,
    <Cell dim={dim} area='y' noFade hideAt="MD" key='cell-y' />,
    <Cell dim={dim} area='z' noFade key='cell-z' />,
    <Cell dim={dim} area='aa' noFade key='cell-aa' />,
    <Cell dim={dim} area='bb' slow delayLG key='cell-bb' />,
    <Cell dim={dim} area='cc' noFade key='cell-cc' />,
    <Cell dim={dim} area='dd' flash fast delayLG key='cell-dd' />,
    <Cell dim={dim} area='ee' noFade key='cell-ee' />,
    <Cell dim={dim} area='ff' noFade key='cell-ff' />,
    <Cell dim={dim} area='gg' noFade key='cell-gg' />
  ]);
}

Grid.propTypes = {
  day: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    release: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    trailer: PropTypes.string.isRequired,
    services: PropTypes.shape({
      netflix: PropTypes.string,
      hulu: PropTypes.string,
      shudder: PropTypes.string,
      youtube: PropTypes.string,
      amazon: PropTypes.string,
      imdb: PropTypes.string,
      itunes: PropTypes.string
    }).isRequired
  }).isRequired,
  dim: PropTypes.bool.isRequired,
  focus1: PropTypes.bool,
  focus2: PropTypes.bool,
  focus3: PropTypes.bool,
  trailerActive: PropTypes.bool.isRequired,
  toggleTrailer: PropTypes.func.isRequired
}

export default Grid;
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../styles/theme';
import Cell from './Cell';
import DayBox from '../DayBox';
import DateBox from '../DateBox';
import MovieCardContainer from '../MovieCardContainer';

const Wrapper = styled.div`
  background: ${colors.black};
  display: flex;
  grid-column-end: span 4;
  justify-content: space-between;
  outline: 1rem solid ${colors.black};
  position: relative;

  @media (max-width: 750px) {
    margin-right: .5rem;
  }

  @media (max-width: 900px) {
    align-self: flex-end;
    background: rgba(0, 0, 0,.9);
    grid-area: 2 / 9 / 2 / 16;
    outline: .5rem solid rgba(0, 0, 0,.9);
  }
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
    <Cell dim={dim} noFade key='cell-1-1' />,
    <Cell dim={dim} span2area key='cell-1-2' />,
    <Cell dim={dim} span4col noFade key='cell-1-4' />,
    <Cell dim={dim} span4col noFade key='cell-1-8' />,
    <Cell dim={dim} hide noFade key='cell-1-12' />,
    <Cell dim={dim} span2area noFade key='cell-1-13' />,
    <Cell dim={dim} span2col noFade key='cell-1-15' />,
    <Cell dim={dim} span2row delayLG fast key='cell-2-1' />,
    <Cell dim={dim} delaySM fast key='cell-2-4' />,
    <Cell dim={dim} focus={focus1} span2col3row delayLG key='cell-2-5' />,
    <Cell dim={dim} span3col noFade key='cell-2-7' />,
    <Cell dim={dim} span3col hide noFade key='cell-2-10' />,
    <Cell dim={dim} hide noFade key='cell-2-15' />,
    <Cell dim={dim} span3row hide noFade key='cell-2-16' />,
    <Cell dim={dim} span3col hide noFade key='cell-3-2' />,
    <Cell dim={dim} noFade key='cell-3-7' />,
    <Cell dim={dim} span3col noFade key='cell-3-8' />,
    <Wrapper key='cell-3-11'>
      <DayBox trailerActive={trailerActive} day={day} />
      <DateBox trailerActive={trailerActive} date={date} />
    </Wrapper>,
    <Cell dim={dim} noFade key='cell-3-15' />,
    <Cell dim={dim} focus={focus2} span4col2row delayMD key='cell-4-1' />,
    <Cell dim={dim} noFade key='cell-4-9' />,
    <MovieCardContainer
      key='cell-4-10'
      movie={movie}
      trailerActive={trailerActive}
      toggleTrailer={toggleTrailer}
    />,
    <Cell dim={dim} slow noFade key='cell-4-15' />,
    <Cell dim={dim} focus={focus3} noFade span3col2row key='cell-5-5' />,
    <Cell dim={dim} span2col3row noFade key='cell-5-15' />,
    <Cell dim={dim} span4col noFade key='cell-6-1' />,
    <Cell dim={dim} span2area noFade key='cell-7-1' />,
    <Cell dim={dim} hide noFade key='cell-7-3' />,
    <Cell dim={dim} span3row hide slow key='cell-7-4' />,
    <Cell dim={dim} flash slow delaySM key='cell-7-5' />,
    <Cell dim={dim} span2col noFade key='cell-7-6' />,
    <Cell dim={dim} span2row noFade key='cell-8-3' />,
    <Cell dim={dim} span4col2row noFade key='cell-8-5' />,
    <Cell dim={dim} span3col slow delayLG key='cell-8-9' />,
    <Cell dim={dim} span2area noFade key='cell-8-12' />,
    <Cell dim={dim} flash fast delayLG key='cell-8-14' />,
    <Cell dim={dim} span2col hide delaySM key='cell-8-15' />,
    <Cell dim={dim} noFade key='cell-9-1' />,
    <Cell dim={dim} hide noFade key='cell-9-2' />,
    <Cell dim={dim} span3col noFade key='cell-9-9' />,
    <Cell dim={dim} hide noFade key='cell-9-14' />,
    <Cell dim={dim} span2col noFade key='cell-9-15' />
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
      imdb: PropTypes.string
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
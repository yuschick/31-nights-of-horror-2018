import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Firebase } from '../../api';
import {colors, fonts, space} from '../../styles/theme';
import PlayIcon from '../../svg/play.svg';
import CalendarIcon from '../../svg/calendar.svg';
import LanguageIcon from '../../svg/language.svg';
import MovieRating from '../MovieRating';

const ListContainer = styled.ul`
  align-items: center;
  display: flex;
  margin: calc(${space.vert} * 1.5) 0;

  @media (max-width: 750px) {
    flex-wrap: wrap;

    & li:first-child {
      clear: both;
      display: block;
      flex: 1 1 100%;
      margin: ${space.vert} auto;
      width: 100%;
    }
  }
`;

const ListItem = styled.li`
  align-content: center;
  display: flex;
  font: 1rem/1 ${fonts.raleway};

  & + li {
    padding-left: calc(${space.hori} * 2);
  }

  @media (max-width: 750px) {
    flex: 1;
    justify-content: center;
  }
`;

const Icon = styled
  .img
  .attrs({
    src: props => props.src,
    alt: props => props.alt
  })`
  display: block;
  height: ${props => props.small ? '13px' : '16px'};
  margin-right: calc(${space.hori} / 2);
  width: auto;
`;

const TrailerButton = styled.button`
  align-items: center;
  align-content: center;
  appearance: none;
  background: linear-gradient(to top, ${colors.primary} 0%, ${colors.secondary} 80%);
  border: 0;
  cursor: pointer;
  display: flex;
  font: 1rem/1 ${fonts.raleway};
  justify-content: center;
  padding: 5px ${space.hori};
  -webkit-text-fill-color: ${colors.white};
  -webkit-text-stroke: .25px rgba(0, 0, 0, .5);
  width: 100%;

  &:hover {
    background: linear-gradient(to top, ${colors.primary} 0%, ${colors.secondary} 40%);
  }

  @media (max-width: 750px) {
    padding: ${space.default};
  }
`;

class MovieDetailsBar extends PureComponent {
  handleClick() {
    this.props.toggleTrailer();
    Firebase.TrackClick(this.props.title, 'trailer');
  }

  render() {
    return (
      <ListContainer>
        <ListItem>
          <TrailerButton onClick={() => { this.handleClick(); }}>
            <Icon src={PlayIcon} alt="Watch Trailer" small /> Watch Trailer
          </TrailerButton>
        </ListItem>
        <ListItem>
          <Icon src={CalendarIcon} alt="Release Year"/> {this.props.release}
        </ListItem>
        <ListItem>
          <Icon src={LanguageIcon} alt="Language"/> {this.props.language}
        </ListItem>
        <ListItem>
          <MovieRating rating={this.props.rating}/>
        </ListItem>
      </ListContainer>
    );
  }
}

MovieDetailsBar.propTypes = {
  release: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  toggleTrailer: PropTypes.func.isRequired
};

export default MovieDetailsBar;

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {fonts, space} from '../../styles/theme';
import CalendarIcon from '../../svg/calendar.svg';
import LanguageIcon from '../../svg/language.svg';
import MovieRating from '../MovieRating';

const ListContainer = styled.ul `
  align-items: center;
  display: flex;
  margin: calc(${space.vert} * 1.5) 0;
`;

const ListItem = styled.li `
  align-items: center;
  display: flex;
  font: 1rem/1 ${fonts.raleway};

  & + li {
    padding-left: calc(${space.hori} * 2);
  }
`;

const Icon = styled
  .img
  .attrs({
    src: props => props.src,
    alt: props => props.alt
  })`
  display: block;
  height: 16px;
  margin-right: calc(${space
  .hori} / 2);
  width: auto;
`;

class MovieDetailsBar extends Component {
  render() {
    return (
      <ListContainer>
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
  rating: PropTypes.string.isRequired
};

export default MovieDetailsBar;

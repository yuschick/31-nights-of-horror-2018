import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, size } from '../../styles/theme';
import { Find } from '../../utils';
import { GetMovieDetails } from '../../api';

import LoadingScreen from '../../components/LoadingScreen';
import Grid from '../../components/Grid';

const NewGridContainer = styled.section.attrs({
  id: props => props.id
})`
  background: url(${props => props.backdrop}) top left;
  background-size: cover;
  display: ${props => props.loading || props.preloading ? 'block' : 'grid'};
  grid-gap: 1rem;
  grid-template-areas:
      ". . ."
      ". D ."
      ". C ."
      ". . .";
  grid-template-columns: auto fit-content(90%) auto;
  grid-template-rows: 2rem 40px fit-content(50%) auto;
  margin-bottom: 2rem;
  min-height: calc(100vh - ${size.headerHeight});
  opacity: ${props => props.loading || props.preloading ? 0.5 : 1};
  overflow hidden;
  padding-bottom: 2rem;
  position: relative;
  transition: opacity 1s ease;
  width: 100%;

  @media (min-width: 750px) {
    border-bottom: 1rem solid ${colors.black};
    grid-template-areas:
      "a  b  b  c  c  c  c  d  d  d  d  e  f  f  g  g"
      "h  b  b  i  F1 j  j  j  j  k  k  k  f  f  l  m"
      "h  n  n  n  F1 o  o  p  p  p  D  D  D  D  D  m"
      "F2 F2 F2 F2 F1 C  C  C  C  C  C  C  C  C  C  s"
      "F2 F2 F2 F2 F3 C  C  C  C  C  C  C  C  C  C  s"
      "t  t  t  t  F3 C  C  C  C  C  C  C  C  C  C  s"
      "u  u  v  w  x  C  C  C  C  C  C  C  C  C  C  s"
      "u  u  z  w  aa aa aa aa bb bb bb cc cc dd ee ee"
      "ff ff z  w  aa aa aa aa gg gg gg cc cc dd ee ee";
    grid-template-columns: .5fr .75fr repeat(13, 1fr) .75fr;
    grid-template-rows: repeat(2, 1fr) .65fr repeat(3, 1fr) 1.25fr repeat(2, 1fr);
    margin-bottom: 0;
    padding-bottom: 0;
  }

  @media (min-width: 1000px) {
    grid-template-areas:
      "a  b  b  c  c  c  c  d  d  d  d  e  f  f  g  g"
      "h  b  b  i  F1 F1 j  j  j  k  k  k  f  f  l  m"
      "h  n  n  n  F1 F1 o  p  p  p  D  D  D  D  q  m"
      "F2 F2 F2 F2 F1 F1 r  C  C  C  C  C  C  C  s  s"
      "F2 F2 F2 F2 F3 F3 F3 C  C  C  C  C  C  C  s  s"
      "t  t  t  t  F3 F3 F3 C  C  C  C  C  C  C  s  s"
      "u  u  v  w  x  y  y  C  C  C  C  C  C  C  s  s"
      "u  u  z  w  aa aa aa aa bb bb bb cc cc dd ee ee"
      "ff ff z  w  aa aa aa aa gg gg gg cc cc dd ee ee";
  }
`;

class MovieScreen extends PureComponent {
  constructor() {
    super();

    this.state = {
      loading: true,
      preloading: true,
      trailerActive: false,
      movie: {},
      testing: false
    };

    this.toggleTrailer = this.toggleTrailer.bind(this);
  }

  componentDidMount() {
    GetMovieDetails(this.props.id).then((data) => {
      this.formatData(data);
    });
  }

  toggleTrailer() {
    this.setState({ trailerActive: !this.state.trailerActive });
  }

  preloadBackdrop() {
    const img = document.createElement('img');
    img.src = this.props.backdrop;

    img.addEventListener('load', () => {
      this.setState({ preloading: false });
    }, false);
  }

  formatData(data) {
    const backdrop = this.preloadBackdrop();
    const release = Find(data.releases.countries, 'iso_3166_1', 'US') || data.releases.countries[Object.keys(data.releases.countries)[0]];
    const trailer = Find(data.videos.results, 'type', 'Trailer') || Find(data.videos.results, 'type', 'Teaser');
    const language = data.original_language === 'en'
      ? { name: 'English' }
      : Find(data.spoken_languages, 'name', 'English') || data.spoken_languages[0];

    Promise.all([release, trailer, language, backdrop]).then(() => {
      const movie = {
        title: data.title || data.original_title,
        tagline: data.tagline,
        overview: data.overview,
        release: release.release_date.substring(0, 4),
        rating: release.certification || 'NR',
        language: language.name,
        score: data.vote_average,
        trailer: trailer.key,
        services: {
          ...this.props.services,
          imdb: data.imdb_id
        }
      }

      this.setState({ movie, loading: false });
    })
  }

  render() {
    return (
      <NewGridContainer
        id={`movie-${this.props.date}`}
        loading={this.state.loading}
        preloading={this.state.preloading}
        backdrop={this.state.loading || this.state.preloading ? '' : this.props.backdrop}
      >
        {this.state.loading || this.state.preloading
          ? <LoadingScreen />
          : <Grid
            day={this.props.day}
            date={this.props.date}
            movie={this.state.movie}
            dim={this.state.testing || this.state.trailerActive || !this.props.inView}
            trailerActive={this.state.trailerActive}
            toggleTrailer={this.toggleTrailer}
            focus1={this.props.focus === 1}
            focus2={this.props.focus === 2}
            focus3={this.props.focus === 3}
          />
        }
      </NewGridContainer>
    );
  }
}

MovieScreen.propTypes = {
  id: PropTypes.number.isRequired,
  day: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  backdrop: PropTypes.string.isRequired,
  focus: PropTypes.number.isRequired,
  services: PropTypes.shape({
    netflix: PropTypes.string,
    hulu: PropTypes.string,
    shudder: PropTypes.string,
    youtube: PropTypes.string,
    amazon: PropTypes.string,
    imdb: PropTypes.string
  }).isRequired,
  inView: PropTypes.bool.isRequired
}

export default MovieScreen;

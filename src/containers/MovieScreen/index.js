import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { size } from '../../styles/theme';
import { Find } from '../../utils';
import { GetMovieDetails } from '../../api';

import LoadingScreen from '../../components/LoadingScreen';
import Grid from '../../components/Grid';

const GridContainer = styled.section.attrs({
  id: props => props.id
})`
  background: url(${props => props.backdrop}) center;
  background-size: cover;
  display: ${props => props.loading || props.preloading ? 'block' : 'grid'};
  grid-gap: 1rem;
  grid-template-columns: .5fr .75fr repeat(13, 1fr) .75fr;
  grid-template-rows: repeat(2, 1fr) .65fr repeat(3, 1fr) 1.25fr repeat(2, 1fr);
  height: calc(100vh - ${size.headerHeight});
  position: relative;
  width: 100%;
`;

class MovieScreen extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      preloading: true,
      active: true,
      trailer: false,
      movie: {}
    };

    this.toggleTrailer = this.toggleTrailer.bind(this);
  }

  componentDidMount() {
    GetMovieDetails(this.props.id).then((data) => {
      this.formatData(data);
    });
  }

  toggleTrailer() {
    this.setState({ trailer: !this.state.trailer });
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
      <GridContainer
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
            dim={this.state.active || this.state.trailer}
            trailer={this.state.trailer}
            toggleTrailer={this.toggleTrailer}
          />
        }
      </GridContainer>
    );
  }
}

MovieScreen.propTypes = {
  id: PropTypes.number.isRequired,
  day: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  backdrop: PropTypes.string.isRequired,
  services: PropTypes.shape({
    netflix: PropTypes.string,
    hulu: PropTypes.string,
    shudder: PropTypes.string,
    youtube: PropTypes.string,
    amazon: PropTypes.string,
    imdb: PropTypes.string
  }).isRequired
}

export default MovieScreen;

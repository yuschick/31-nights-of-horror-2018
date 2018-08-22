import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {colors, space} from '../../styles/theme';

import TitleAndTagline from '../TitleAndTagline';
import MovieDetailsBar from '../MovieDetailsBar';
import MovieOverview from '../MovieOverview';
import MovieServices from '../MovieServices';
import MovieScore from '../MovieScore';

const Container = styled.section`
  background: ${colors.black};
  box-shadow: 0px 0px 25px 20px rgba(0,0,0,0.75);
  color: #fff;
  grid-area: 4 / 8 / 8 / 15;
  padding: ${space.vert} calc(${space.hori} * 2);
  z-index: 2;
`;

const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const CardFooter = styled.footer`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

class MovieCardContainer extends Component {
  render() {
    return (
      <Container>
        <CardContentContainer>
          <article>
            <header>
              <TitleAndTagline
                title={this.props.movie.title}
                tagline={this.props.movie.tagline}/>
              <MovieDetailsBar
                release={this.props.movie.release}
                language={this.props.movie.language}
                rating={this.props.movie.rating}/>
            </header>
            <main>
              <MovieOverview overview={this.props.movie.overview}/>
            </main>
          </article>
          <CardFooter>
            <MovieServices title={this.props.movie.title} services={this.props.movie.services}/>
            <MovieScore score={this.props.movie.score}/>
          </CardFooter>
        </CardContentContainer>
      </Container>
    );
  }
}

MovieCardContainer.propTypes = {
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
  }).isRequired
}

export default MovieCardContainer;

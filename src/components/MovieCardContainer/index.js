import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {colors, space} from '../../styles/theme';

import TitleAndTagline from '../TitleAndTagline';
import MovieDetailsBar from '../MovieDetailsBar';
import MovieOverview from '../MovieOverview';
import MovieServices from '../MovieServices';
import MovieScore from '../MovieScore';
import MovieTrailer from '../MovieTrailer';
import CloseIcon from '../CloseIcon';

const Container = styled.section`
  background: ${colors.black};
  box-shadow: none;
  color: #fff;
  grid-area: C;
  outline: 1rem solid ${colors.black};
  padding: ${space.vert} calc(${space.hori} * 2);
  z-index: 2;

  @media (min-width: 750px) {
    box-shadow: 0px 0px 25px 20px rgba(0,0,0,0.75);
    outline: none;
  }
`;

const ArticleContainer = styled.article`
  opacity: 1;
  transition: opacity .5s ease;

  ${props => props.dim && `
    opacity: 0;
  `};
`;

const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
`;

const CardFooter = styled.footer`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const MovieCardContainer = ({
  movie,
  trailerActive,
  toggleTrailer
}) => {
  return (
    <Container>
      <CardContentContainer>
        {
          trailerActive
            ? <MovieTrailer trailer={movie.trailer} />
            : null
        }
        <ArticleContainer dim={trailerActive}>
          <header>
            <TitleAndTagline
              title={movie.title}
              tagline={movie.tagline}/>
            <MovieDetailsBar
              release={movie.release}
              language={movie.language}
              rating={movie.rating}
              title={movie.title}
              toggleTrailer={toggleTrailer}
            />
          </header>
          <main>
            <MovieOverview overview={movie.overview}/>
          </main>
        </ArticleContainer>
        <CardFooter>
          <MovieServices title={movie.title} services={movie.services}/>
          {
            trailerActive
              ? <CloseIcon toggleTrailer={toggleTrailer} />
              : <MovieScore score={movie.score}/>
          }
        </CardFooter>
      </CardContentContainer>
    </Container>
  );
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
  }).isRequired,
  trailerActive: PropTypes.bool.isRequired,
  toggleTrailer: PropTypes.func.isRequired
}

export default MovieCardContainer;

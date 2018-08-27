import React, {Component} from 'react';
import LazyLoad from 'react-lazyload';
import { Firebase } from '../../api';

import Header from '../../components/Header';
import { movies } from '../../data/movies';
import MovieScreen from '../MovieScreen';

class Calendar extends Component {
  constructor() {
    super();
    Firebase.init();
  }

  detectInnerWidth() {
    return window.innerWidth <= 750;
  }

  render() {
    return (
      <div>
        <Header/>
        <main>
          {movies.map(movie => {
            return (
              <LazyLoad
                key={movie.movieId}
                height='100vh'
                unmountIfInvisible={true}
              >
                <MovieScreen
                  id={movie.movieId}
                  day={movie.day}
                  date={movie.date}
                  backdrop={this.detectInnerWidth() ? movie.backdropSM : movie.backdrop}
                  services={movie.services}
                  focus={movie.focus}
                />
              </LazyLoad>
            );
          })}
        </main>
      </div>
    );
  }
}

export default Calendar;

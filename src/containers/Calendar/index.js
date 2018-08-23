import React, {Component} from 'react';
import { Firebase } from '../../api';

import Header from '../../components/Header';
import { movies } from '../../data/movies';
import MovieScreen from '../MovieScreen';

class Calendar extends Component {
  constructor() {
    super();
    Firebase.init();
  }

  render() {
    return (
      <div>
        <Header/>
        <main>
          {movies.map(movie => {
            return (
              <MovieScreen
                key={movie.movieId}
                id={movie.movieId}
                day={movie.day}
                date={movie.date}
                backdrop={movie.backdrop}
                services={movie.services}
              />
            );
          })}
        </main>
      </div>
    );
  }
}

export default Calendar;

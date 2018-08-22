import React, {Component} from 'react';
import PreloadImage from 'react-preload-image'
import { Firebase } from '../../api';

import Header from '../../components/Header';
import { movies } from '../../data/movies';
import MovieScreen from '../MovieScreen';

class Calendar extends Component {
  componentWillMount() {
    Firebase.init();
  }

  render() {
    return (
      <div>
        <Header/>
        <main>
          {movies.map(movie => {
            return ([
              <PreloadImage
                style={{
                  display: 'none'
                }}
                key={`backdrop-${movie.date}`}
                src={movie.backdrop}
                lazy
              />,
              <MovieScreen
                key={movie.movieId}
                id={movie.movieId}
                day={movie.day}
                date={movie.date}
                backdrop={movie.backdrop}
                services={movie.services}
              />
            ]);
          })}
        </main>
      </div>
    );
  }
}

export default Calendar;

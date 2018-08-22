import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {space} from '../../styles/theme';
import { Firebase } from '../../api';

import IMDBIcon from '../../images/services/imdb.jpg';
import NetflixIcon from '../../images/services/netflix.jpg';
import ShudderIcon from '../../images/services/shudder.jpg';
import HuluIcon from '../../images/services/hulu.jpg';
import AmazonIcon from '../../images/services/amazon.jpg';
import YoutubeIcon from '../../images/services/youtube.jpg';

const ListContainer = styled.ul `
  display: flex;
  height: 35px;
`;

const ListItem = styled.li `
  & + li {
    padding-left: ${space.hori};
  }

  & img {
    display: block;
    height: 35px;
    width: 35px;
  }
`;

class MovieServices extends Component {
  handleClick(service) {
    Firebase.TrackClick(this.props.title, service);
  }

  render() {
    return (
      <ListContainer>
        {this.props.services.imdb
          ? <ListItem>
              <a
                href={`https://www.imdb.com/title/${this.props.services.imdb}`}
                onClick={() => { this.handleClick('imdb'); }}
              >
                <img src={IMDBIcon} alt="Visit on IMDB"/>
              </a>
            </ListItem>
          : null
        }

        {this.props.services.netflix
          ? <ListItem>
              <a
                href={this.props.services.netflix}
                onClick={() => { this.handleClick('netflix'); }}
              >
                <img src={NetflixIcon} alt="Watch now on Netflix"/>
              </a>
            </ListItem>
          : null
        }

        {this.props.services.shudder
          ? <ListItem>
              <a
                href={this.props.services.shudder}
                onClick={() => { this.handleClick('shudder'); }}
              >
                <img src={ShudderIcon} alt="Watch now on Shudder"/>
              </a>
            </ListItem>
          : null
        }

        {this.props.services.youtube
          ? <ListItem>
              <a
                href={this.props.services.youtube}
                onClick={() => { this.handleClick('youtube'); }}
              >
                <img src={YoutubeIcon} alt="Watch now on Youtube"/>
              </a>
            </ListItem>
          : null
        }

        {this.props.services.amazon
          ? <ListItem>
              <a
                href={this.props.services.amazon}
                onClick={() => { this.handleClick('amazon'); }}
              >
                <img src={AmazonIcon} alt="Watch now on Amazon"/>
              </a>
            </ListItem>
          : null
        }

        {this.props.services.hulu
          ? <ListItem>
              <a
                href={this.props.services.hulu}
                onClick={() => { this.handleClick('hulu'); }}
              >
                <img src={HuluIcon} alt="Watch now on Hulu"/>
              </a>
            </ListItem>
          : null
        }
      </ListContainer>
    );
  }
}

MovieServices.propTypes = {
  title: PropTypes.string.isRequired,
  services: PropTypes.shape({
    netflix: PropTypes.string,
    hulu: PropTypes.string,
    shudder: PropTypes.string,
    youtube: PropTypes.string,
    amazon: PropTypes.string,
    imdb: PropTypes.string
  }).isRequired
};

export default MovieServices;

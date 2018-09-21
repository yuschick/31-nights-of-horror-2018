import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {space} from '../../styles/theme';
import { Firebase, JustWatch } from '../../api';

import IMDBIcon from '../../images/services/imdb.jpg';
import YoutubeIcon from '../../images/services/youtube.jpg';
import { SupportedProviders, Find } from '../../utils';
const jw = new JustWatch();

const ListContainer = styled.ul`
  display: flex;
  height: 35px;
  opacity: 1;
  transition: opacity .5s ease;

  ${props => props.dim && `
    opacity: 0;
  `};
`;

const ListItem = styled.li`
  & + li {
    padding-left: ${space.hori};
  }

  & img {
    display: block;
    height: 35px;
    width: 35px;
  }
`;

class MovieServices extends PureComponent {
  constructor() {
    super();

    this.state = {
      services: null
    };
  }

  componentDidMount() {
    Promise.resolve(jw.getTitle('movie', this.props.jwId)).then(res => {
      const services = res.offers ? res.offers.filter(item => {
        return (item.monetization_type === 'flatrate' || item.monetization_type === 'rent') &&
          item.presentation_type === 'hd' &&
          SupportedProviders.includes(item.provider_id);
      })
        : null;

      this.setState({ services });
    }).catch(err => {
      console.log(err);
    });
  }

  handleClick(service) {
    Firebase.TrackClick(this.props.title, service);
  }

  render() {
    return (
      <ListContainer dim={this.props.dim}>
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

        {
          this.state.services && this.state.services.map(item => {
            let itemProvider = Find(this.props.providers, 'id', item.provider_id);
            let iconId = itemProvider.icon_url.split('/')[2];
            return (
              <ListItem key={`${this.props.title}-${item.provider_id}`}>
                <a
                  href={item.urls.standard_web || item.urls[0]}
                  onClick={() => { this.handleClick(itemProvider.technical_name); }}
                >
                  <img
                    src={`https://images.justwatch.com/icon/${iconId}/s50/${itemProvider.technical_name}`}
                    alt={`Watch now on ${itemProvider.clear_name}`}
                  />
                </a>
              </ListItem>
            );
          })
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
      </ListContainer>
    );
  }
}

MovieServices.propTypes = {
  dim: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  jwId: PropTypes.number,
  services: PropTypes.shape({
    netflix: PropTypes.string,
    hulu: PropTypes.string,
    shudder: PropTypes.string,
    youtube: PropTypes.string,
    amazon: PropTypes.string,
    imdb: PropTypes.string
  }).isRequired,
  providers: PropTypes.array.isRequired
};

export default MovieServices;

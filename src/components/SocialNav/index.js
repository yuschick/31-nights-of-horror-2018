import React from 'react';
import styled from 'styled-components';
import { colors, space } from '../../styles/theme';
import { TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon } from 'react-share';
import { Firebase } from '../../api';
import GithubLogo from '../../images/services/github.jpg';

const SocialNavContainer = styled.section`
  background: ${colors.black};
  bottom: -40px;
  padding: calc(${space.vert} / 2) ${space.hori};
  position: absolute;
  right: 0;
`;

const NavList = styled.ul`
  box-shadow: 0px 0px 22px 11px rgba(0,0,0,0.75);
  display: flex;
`;

const NavItem = styled.li`
  cursor: pointer;
  opacity: .85;
  transition: opacity .25s ease;

  &:hover {
    opacity: 1;
  }

  & svg {
    display: block;
  }

  &+ li {
    margin-left: ${space.hori};
  }
`;

const Icon = styled.img.attrs({
  src: props => props.src,
  alt: props => props.alt
})`
  display: block;
  height: 24px;
  width: auto;
`;

const shareUrl = 'https://bit.ly/2wqncxt';
const shareTitle = '31 Nights of Horror - 2018. 31 Movies for a terrifying October.';

const handleClick = (type) => {
  Firebase.TrackClick('Share', type);
};

const SocialNav = () => (
  <SocialNavContainer>
    <NavList>
      <NavItem onClick={() => { handleClick('Twitter'); }}>
        <TwitterShareButton
          url={shareUrl}
          title={shareTitle}
          hashtags={['31NightsOfHorror']}
        >
          <TwitterIcon
            size={24}
          />
        </TwitterShareButton>
      </NavItem>
      <NavItem onClick={() => { handleClick('Facebook'); }}>
        <FacebookShareButton
          url={shareUrl}
          quote={shareTitle}
        >
          <FacebookIcon
            size={24}
          />
        </FacebookShareButton>
      </NavItem>
      <NavItem onClick={() => { handleClick('WHatsApp'); }}>
        <WhatsappShareButton
          url={shareUrl}
          title={shareTitle}
          separator=":: "
        >
          <WhatsappIcon size={24} />
        </WhatsappShareButton>
      </NavItem>
      <NavItem>
        <a
          href="https://github.com/yuschick/31-Nights-of-Horror-2018"
          target="_blank"
          rel="noopener noreferrer"
          title="31 Nights of Horror"
          onClick={() => { handleClick('GitHub'); }}
        >
          <Icon src={GithubLogo} alt="Visit on Github" />
        </a>
      </NavItem>
    </NavList>
  </SocialNavContainer>
);

export default SocialNav;

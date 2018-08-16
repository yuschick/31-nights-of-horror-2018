import React from 'react';
import styled from 'styled-components';
import { colors, space } from '../../styles/theme';

import TwitterLogo from '../../images/services/twitter.jpg';
import FacebookLogo from '../../images/services/facebook.jpg';
import GithubLogo from '../../images/services/github.jpg';

const SocialNavContainer = styled.section`
  background: ${colors.black};
  bottom: -50px;
  padding: ${space.default};
  position: absolute;
  right: 0;
`;

const NavList = styled.ul`
  box-shadow: 0px 0px 22px 11px rgba(0,0,0,0.75);
  display: flex;
`;

const NavItem = styled.li`
  &+ li {
    margin-left: ${space.hori};
  }
`;

const Icon = styled.img.attrs({
  src: props => props.src,
  alt: props => props.alt
})`
  display: block;
  height: 20px;
  opacity: .85;
  transition: opacity .25s ease;
  width: auto;

  &:hover {
    opacity: 1;
  }
`;

const SocialNav = () => (
  <SocialNavContainer>
    <NavList>
      <NavItem>
        <Icon src={TwitterLogo} alt="Share on Twitter" />
      </NavItem>
      <NavItem>
        <Icon src={FacebookLogo} alt="Share on Facebook" />
      </NavItem>
      <NavItem>
        <a
          href="https://github.com/yuschick/31-Nights-of-Horror-2018"
          target="_blank"
          rel="noopener noreferrer"
          title="31 Nights of Horror"
        >
          <Icon src={GithubLogo} alt="Visit on Github" />
        </a>
      </NavItem>
    </NavList>
  </SocialNavContainer>
);

export default SocialNav;

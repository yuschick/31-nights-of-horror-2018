import React from 'react';
import styled from 'styled-components';
import ContentContainer from '../ContentContainer';
import Nav from '../Nav';
import SocialNav from '../SocialNav';
import { colors, size, space } from '../../styles/theme';

import Logo from '../../svg/logo.svg';

const HeaderContainer = styled.header`
  background: ${colors.black};
  min-height: ${size.headerHeight};
  padding: ${space.default};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const HeaderContent = styled(ContentContainer)`
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;

  @media (min-width: 500px) {
    justify-content: space-between;
  }
`;

const LogoImage = styled.img.attrs({
  src: `${Logo}`,
  alt: '31 Nights of Horror - 2018'
})`
  height: calc(${size.headerHeight} - calc(${space.default} * 2));
`;

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <LogoImage />
      <Nav />
      <SocialNav />
    </HeaderContent>
  </HeaderContainer>
);

export default Header;

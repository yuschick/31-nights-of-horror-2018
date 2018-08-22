import React from 'react';
import styled from 'styled-components';
import {lighten} from 'polished';
import {colors, size, space, fonts} from '../../styles/theme';
import { Firebase } from '../../api';

const NavList = styled.ul `
  display: flex;
  height: calc(${size.headerHeight} - calc(${space.default} * 2));
`;

const NavItem = styled.li `
  align-self: center;
  color: ${lighten(0.1, colors.tertiary)};
  font: 1.5rem/1 ${fonts.raleway};
  padding: 0 ${space.hori};

  &+ li {
    border-left: 1px solid ${colors.secondary};
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color .25s ease;

    &:hover {
      color: ${lighten(0.2, colors.tertiary)};
    }
  }
`;

const Nav = () => (
  <nav>
    <NavList>
      <NavItem>
        <a
          href="https://yuschick.github.io/31-Nights-of-Horror-2017/"
          target="_blank"
          rel="noopener noreferrer"
          title="31 Nights of Horror"
          onClick={() => { Firebase.TrackClick('Nav', '2017'); }}
        >
          2017
        </a>
      </NavItem>
      <NavItem>
        <a
          href="http://www.danyuschick.com/31-nights-of-horror/"
          target="_blank"
          rel="noopener noreferrer"
          title="31 Nights of Horror"
          onClick={() => { Firebase.TrackClick('Nav', '2016'); }}
        >
          2016
        </a>
      </NavItem>
      <NavItem>
        <a
          href="https://yuschick.github.io/31-Nights-of-Horror-2015/"
          target="_blank"
          rel="noopener noreferrer"
          title="31 Nights of Horror"
          onClick={() => { Firebase.TrackClick('Nav', '2015'); }}
        >
          2015
        </a>
      </NavItem>
    </NavList>
  </nav>
);

export default Nav;

import React from 'react';
import {
  Container, Hero, HeroHeader, HeroBody, HeroFooter,
} from 'bloomer';

interface LayoutProps {
  children: React.ReactNode,
  location: string
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  return (
    <Hero isColor="info" isFullHeight>
      <HeroHeader>
        Nav
      </HeroHeader>
      <HeroBody>
        <Container hasTextAlign="centered">
          {children}
        </Container>
      </HeroBody>

      <HeroFooter>
        Kacper Ciecinski
      </HeroFooter>
    </Hero>
  );
}

export default Layout;
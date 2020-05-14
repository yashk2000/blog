import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'styled-components';

import { HeaderBG, Wrapper, StyledLogo, Information, StyledName } from '../../templates/PageStyles/StyledHome';
import { useWindowScrollPosition } from '../../hooks/useWindowScrollPosition';

import Social from '../../components/Social';

const Home = () => {
  const { y } = useWindowScrollPosition();
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const themeContext = React.useContext(ThemeContext);

  const backgroundFluidImage = [
    image.childImageSharp.fluid,
    `${
      themeContext && themeContext.mode === `dark`
        ? `linear-gradient(rgba(1, 1, 1, 0.95), rgba(1, 1, 1, 0.95))`
        : `linear-gradient(rgba(244, 244, 244, 0.95), rgba(244, 244, 244, 0.95))`
    }`,
  ].reverse();

  return (
    <>
      <HeaderBG tag={`header`} fluid={backgroundFluidImage}>
        <Wrapper>
          <Information>
            <span>HEY EVERYONE MY NAME IS YASH KHARE</span>
            <h1>
              I TEACH COMPUTERS HOW TO SEE
              <span role="img" aria-label="computer">
                {` `}
                💻
              </span>
              , AND BUILD MOBILE APPS
              <span role="img" aria-label="computer">
               📱 
              </span>
              {`. `}
              I ALSO LOVE TRAVELLING{` `}
              <span role="img" aria-label="tent">
                ⛺️
              </span>
              {` `}
              <span role="img" aria-label="nature tree">
                🌲
              </span>
              {` `}
              <span role="img" aria-label="run">
                🏃
              </span>
            </h1>
          </Information>
        </Wrapper>
        <Social />
        <StyledName>Yash Khare</StyledName>
      </HeaderBG>
    </>
  );
};

export default Home;

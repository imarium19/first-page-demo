import React from 'react';
import styled, { keyframes } from 'styled-components';

const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const Container = styled.div`
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
  color: white;
  overflow: hidden;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    animation: ${shake} 0.5s;
    animation-iteration-count: infinite;
  }
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 1rem;
`;

const Slogan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 80vh;
  padding: 0 2rem;
  animation: ${fadeIn} 2s ease-in;
  position: relative;
`;

const MainHeading = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1rem;
  color: white;
`;

const BackgroundImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
  border-radius: 50%;
  overflow: hidden;
  z-index: 0;
  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 480px) {
    width: 80%;
  }
`;

const SubHeading = styled.p`
font-size: 1rem;
font-weight: 500;
margin-bottom: 2rem;
text-align: center;
font-style: italic;
`;

const ScrollSection = styled.section`
  background: white;
  color: black;
  padding: 2rem;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 2s ease-in;
`;

const SectionHeading = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 2rem;
  text-align: center;
`;

const ItemsGrid = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const ItemImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const ItemName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

const ItemDescription = styled.p`
  text-align: center;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const DelayedFadeIn = styled.div`
  opacity: 0;
  animation: ${fadeIn} 2s ease-in forwards;
  animation-delay: ${props => props.delay || '0s'};
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: 70vh; /* Default height for larger screens */
  max-width: 100%;

  @media (max-width: 768px) {
    height: 50vh; /* Adjust height for medium-sized screens */
  }

  @media (max-width: 480px) {
    height: 30vh; /* Adjust height for smaller screens */
  }
`;

const VideoTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const FirstPage = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <LogoImage src="../ecomlogo.png" alt="Logo" />
          RentEase
        </Logo>
      </Header>
      <Slogan>
        <BackgroundImage src="https://th.bing.com/th/id/OIP.pBnu6farSJp-dt7fup5fSQHaE7?rs=1&pid=ImgDetMain" alt="Background Image" />
        <MainHeading>Your One-Stop<br>
        </br> Rental <br>
        </br>Marketplace</MainHeading>
      </Slogan>

      <ScrollSection>
      <SubHeading>"Simplify your life by renting anything you need, all in one place, with ease, security, convenience, and affordable rates, connecting you with trusted providers for a seamless experience."</SubHeading>
        <SectionHeading>Explore Our Categories</SectionHeading>
        <ItemsGrid>
          <Item>
            <ItemImage src="https://th.bing.com/th/id/OIP.UX4JKnaIq1BIZQ4bgKCtxQHaE7?w=282&h=188&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="Equipment and Tools" />
            <ItemName>Equipment and Tools</ItemName>
            <ItemDescription>Find the best tools for your DIY projects</ItemDescription>
          </Item>
          <Item>
            <ItemImage src="https://th.bing.com/th/id/OIP._dqhkkFyNwL9dte_dsyhCAHaEu?rs=1&pid=ImgDetMain" alt="Party Supplies" />
            <ItemName>Party Supplies</ItemName>
            <ItemDescription>Everything you need for an unforgettable party</ItemDescription>
          </Item>
        </ItemsGrid>
        <VideoContainer>
          <DelayedFadeIn delay="0.5s">
            <VideoPlayer controls="controls">
              <source src={process.env.PUBLIC_URL + "/Videos/saw-video.mp4"} type="video/mp4" />
            </VideoPlayer>
            <VideoTitle>A video showcasing saws</VideoTitle>
          </DelayedFadeIn>
          <DelayedFadeIn delay="1s">
            <VideoPlayer controls="controls">
              <source src={process.env.PUBLIC_URL + "/Videos/camera-video.mp4"} type="video/mp4" />
            </VideoPlayer>
            <VideoTitle>A video showcasing cameras</VideoTitle>
          </DelayedFadeIn>
          <DelayedFadeIn delay="1.5s">
            <VideoPlayer controls="controls">
              <source src={process.env.PUBLIC_URL + "/Videos/clothes-video.mp4"} type="video/mp4" />
            </VideoPlayer>
            <VideoTitle>A video showcasing clothes</VideoTitle>
          </DelayedFadeIn>
          <DelayedFadeIn delay="2s">
            <VideoPlayer controls="controls">
              <source src={process.env.PUBLIC_URL + "/Videos/car-video.mp4"} type="video/mp4" />
            </VideoPlayer>
            <VideoTitle>A video showcasing cars</VideoTitle>
          </DelayedFadeIn>
        </VideoContainer>
      </ScrollSection>
      {/* Add your contact section here */}
    </Container>
  );
};

export default FirstPage;

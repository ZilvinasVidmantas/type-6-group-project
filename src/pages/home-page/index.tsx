import React from 'react';
import HomePageLandingSection from './landing-section';
import HomePageInfoSection from './info-section';
import CustomContainer from '../../components/container/custom-container';
import HomePageAboutSection from './about-section';
import LandingSectionImageContainer from './components/landing-section-image-container';

const HomePage: React.FC = () => (

  <LandingSectionImageContainer>
    <CustomContainer>
      <HomePageLandingSection />
      <HomePageAboutSection />
      <HomePageInfoSection />
    </CustomContainer>
  </LandingSectionImageContainer>

);

export default HomePage;

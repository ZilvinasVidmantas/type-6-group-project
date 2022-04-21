import React from 'react';
import HomePageLandingSection from './landing-section';
import HomePageInfoSection from './info-section';
import CustomContainer from '../../components/container/custom-container';
import HomePageAboutSection from './about-section';

const HomePage: React.FC = () => (
  <CustomContainer>
    <HomePageLandingSection />
    <HomePageAboutSection />
    <HomePageInfoSection />
  </CustomContainer>

);

export default HomePage;

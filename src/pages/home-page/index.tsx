import React from 'react';
import HomePageLandingSection from './landing-section';
import HomePageInfoSection from './info-section';
import CustomContainer from '../../components/container/custom-container';

const HomePage: React.FC = () => (
  <CustomContainer>
    <HomePageLandingSection />
    <HomePageInfoSection />
  </CustomContainer>

);

export default HomePage;

import React from 'react';
import ProfileSection from '../../components/ProfileSection/ProfileSection';
import LinkSection from '../../components/LinkSection/LinkSection';
import SocialSection from '../../components/SocialSection/SocialSection';

const Home = (props) => {
  return (
    <>
      <ProfileSection />
      <LinkSection />
      <SocialSection />
    </>
  );
}

export default Home;
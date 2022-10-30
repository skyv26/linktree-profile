import React from 'react';
import ProfileSection from './components/ProfileSection/ProfileSection';
import LinkSection from './components/LinkSection/LinkSection';
import SocialSection from './components/SocialSection/SocialSection';
import Footer from './components/Footer/Footer';

const App = props => {
  return (
    <div>
      <ProfileSection />
      <LinkSection />
      <SocialSection />
      <Footer />
    </div>
  );
};

export default App;
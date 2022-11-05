import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ProfileSection from './components/ProfileSection/ProfileSection';
import LinkSection from './components/LinkSection/LinkSection';
import SocialSection from './components/SocialSection/SocialSection';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';

const App = props => {
  return (
    <div>
      <ProfileSection />
      <LinkSection />
      <SocialSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
import React from 'react';
import '../styles/styles.scss';
import Content from '../components/Content/Content';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Content />
      <Footer />
    </>
  );
}

export default Home;

import React from 'react';
import Header from '../components/Header/Header';
// import '../styles/styles.scss';
import RainbowBox from '../components/RainbowBox/RainbowBox';
import Loader from '../components/Loader/Loader';

export default function Demos() {
  return (
    <>
      <Header />

      <section>
        <p>A rainbow box</p>
        <div>
          <RainbowBox />
        </div>
      </section>
      <section>
        <p>Animated rainbow box</p>
        <div>Sorry ran out of time for this...</div>
      </section>
      <section>
        <p>skeleton loading elements</p>
        <div>
          <Loader />
        </div>
      </section>
    </>
  );
}

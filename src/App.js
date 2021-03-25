import './styles/styles.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <section>
        <h1>lorem title</h1>
        <p>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          est pellentesque elit ullamcorper dignissim.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
          consectetur purus ut faucibus pulvinar.
        </p>
      </section>
      <Footer />
    </div>
  );
}

export default App;

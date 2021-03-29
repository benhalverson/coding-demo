import './Loader.scss';

export default function Loader() {
  return (
    <div className='container'>
      <div className='box-wrapper'>
        <div className='box-line animate'></div>
      </div>

      <div className='rectangle-wrapper'>
        <div className='rectangle-line animate'></div>
      </div>

      <div className='circle-wrapper'>
        <div className='circle-line animate'></div>
      </div>
    </div>
  );
}

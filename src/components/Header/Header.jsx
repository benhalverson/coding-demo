import './Header.scss';
import '../../styles/base/_mq.scss';
import logo from '../../images/logo.svg';
export default function Header() {
  return (
    <header>
      <img className='logo' src={logo} alt='company logo' />
      <nav className='nav-bar'>
        <ul className='nav-bar-list'>
          <li>Link</li>
          <li>Link</li>
        </ul>
      </nav>
    </header>
  );
}

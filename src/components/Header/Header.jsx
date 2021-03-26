import './Header.scss';
import '../../styles/base/_mq.scss';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header>
      <img className='logo' src={logo} alt='company logo' />
      <nav className='nav-bar'>
        <ul className='nav-bar-list'>
          <li>
            <Link to='/'>Link</Link>
          </li>
          <Link to='/demos'>Link</Link>
        </ul>
      </nav>
    </header>
  );
}

import Logo from '../../images/logo.png'
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <img src={Logo}/>
    </header>
  );
}
  export default Header;
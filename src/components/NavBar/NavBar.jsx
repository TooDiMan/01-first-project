import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";


const NavBar = () => {
  return (
      <nav className={s.navigation}>
      <div className={s.list}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={s.list}>
        <NavLink to="/message">Message</NavLink>
      </div>
      <div className={s.list}>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className={s.list}>
        <NavLink to="/music">Music</NavLink>
      </div>
      <div className={s.setting}>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </nav>
  );
}

  export default NavBar;
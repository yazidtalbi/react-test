import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/components/navbar.css';
import '../../css/components/buttons.css';
import useAuth from "../../js/hooks/useAuth";
import { AuthContext } from "../../js/contexts/AuthContext";


const NavBar = () => {
    const { auth } = useContext(AuthContext);
  const { Logout } = useAuth();
  return (
    <header className='nav'>
      <div className='logo'>
        <h3>Logo</h3>
      </div>
      <ul className='nav-links'>
        <li className='nav-link'>
          <NavLink to='/' activeClassName='active' exact>
            Home
          </NavLink>
        </li>

      
        {auth ? (
          <>
            <li className="nav-link">
              <NavLink to="/posts" activeClassName="active">
                Posts
              </NavLink>
            </li>
            <li className="nav-link" onClick={Logout}>
              <button className="btn">Logout</button>
            </li>
          </>
        ) : (
          <li className="nav-link">
            <NavLink to="/login" className="btn" activeClassName="active" style={{color:'white',fontWeight:'normal'}}>
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </header>
  );
};

export default NavBar;

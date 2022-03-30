import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const useAuth = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const Logout = () => {
    setAuth(null);
    localStorage.removeItem('auth');
  };
  const Login = (email, password) => {
    const auth = { password, email };
    localStorage.setItem('auth', JSON.stringify(auth));
    setAuth(auth);
    navigate('/');
  };
  return { Logout, Login };
};

export default useAuth;

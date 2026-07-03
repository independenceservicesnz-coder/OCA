import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext.jsx';
import CategoryIcon from './CategoryIcon.jsx';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <CategoryIcon name="balance" size={26} color="var(--gold)" />
          VIP Exercise Programme
        </Link>
        <nav className="navbar-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          {user && <NavLink to="/dashboard">My Progress</NavLink>}
          {user ? (
            <>
              <span style={{ color: 'var(--ink-soft)' }}>Kia ora, {user.full_name.split(' ')[0]}</span>
              <button
                className="btn btn-outline"
                style={{ padding: '8px 18px' }}
                onClick={() => {
                  logout();
                  navigate('/');
                }}
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login">Sign in</NavLink>
              <Link className="btn btn-primary" style={{ padding: '9px 20px' }} to="/register">
                Join
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

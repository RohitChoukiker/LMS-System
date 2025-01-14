

import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authcontext';

function PrivateRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Show a loader while checking auth status
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;

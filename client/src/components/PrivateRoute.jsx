

import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authcontext';

function PrivateRoute({ children }) {
  const { isAuthenticated, loading, role } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Show a loader while checking auth status
  }
  if(role === 'instructor'){
    return <Navigate to="/instructor" />;
  }
  if(role === 'student'){
    return <Navigate to="/student" />;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;

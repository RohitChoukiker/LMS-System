import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authcontext';

function PrivateRoute({ children }) {
  const { isAuthenticated, loading, role } = useAuth();

  // Wait for authentication check to complete
  if (loading) {
    return <div>Loading...</div>;
  }

  // If not authenticated, redirect to auth page
  

  if(!isAuthenticated || !location.pathname.includes('/instructor')){
    return <Navigate to="/auth" />;
  }


  // Role based routing
  if (role === 'instructor') {
    if (!location.pathname.includes('/instructor')) {
      return <Navigate to="/instructor" />;
    }
  } else if (role === 'student') {
    if (!location.pathname.includes('/student')) {
      return <Navigate to="/student" />;
    }
  }

  return children;
}

export default PrivateRoute;

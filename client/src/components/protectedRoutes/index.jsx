import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/authcontext/index';

function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    return user ? children : <Navigate to="/signin" />;
}

export default ProtectedRoute; 
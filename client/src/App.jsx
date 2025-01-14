import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/authcontext/index';
import ProtectedRoute from './components/protectedRoutes';
import SignUp from './pages/auth/Signup';
import SignIn from './pages/auth/Signin';
import Home from './pages/Home';
import AuthPage from './pages/auth';

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route 
                    path="/dashboard" 
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    } 
                />
            </Routes>
        </AuthProvider>
    );
}

export default App; 
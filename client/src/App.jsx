import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/authcontext/index';
import ProtectedRoute from './components/protectedRoutes';
import SignUp from './pages/auth/Signup';
import SignIn from './pages/auth/Signin';
import Home from './pages/Home';


function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
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
        </Router>
    );
}

export default App; 
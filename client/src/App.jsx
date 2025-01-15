import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import SignUp from './pages/auth/Signup';
import SignIn from './pages/auth/Signin';
// import Home from './pages/Home';
import AuthPage from './pages/auth';
import Error404 from './pages/Error404';
import Test from './pages/test';

function App() {
    return (
        <AuthProvider>
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/" element={<AuthPage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<SignIn />} />
                <Route 
                    path="/test" 
                    element={
                        <PrivateRoute>
                            <Test />
                        </PrivateRoute>
                    } 
                />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </AuthProvider>
    );
}

export default App; 
const {useLocaiton } = require("react-router-dom")

function RouteGuard({isAuthenticated, user,element} ) {
    const location = useLocation();
    if(!isAuthenticated && location.pathname.includes('/auth')) {
        return <Navigate to="/login" />
    }
    
    

}

export default RouteGuard;

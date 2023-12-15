import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { useSelector } from 'react-redux';
import WriteBlog from './Pages/WriteBlog';
import Profile from './Pages/Profile';
import EditUSer from './Pages/EditUser';
import Search from './Pages/Search';
import Desktop from './Components/LandingPageDesktop/Desktop';
import { useEffect, useState } from 'react';

function App() {
    const user = useSelector((state) => state.auth.login?.currentUser);
    const ProtectedRoutes = ({ children }) => {
        if (!user) {
            return <Navigate to="/" />;
        }

        return children;
    };

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    const [isMobile, setMobile] = useState(true);
    useEffect(() => {
        const handleSize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener('resize', handleSize);
        handleSize();
        return () => window.removeEventListener('resize', handleSize);
    }, []);
    useEffect(() => {
        if (windowSize.width > 500) {
            setMobile(false);
        } else {
            setMobile(true);
        }
    }, [windowSize]);

    console.log(isMobile);
    return (
        <Router>
            <div className="App content mx-auto max-w-[1110px] w-full px-6">
                <Routes>
                    {isMobile ? (
                        <>
                            <Route path="/register" element={<Register />} />
                            <Route path="/" element={<Login />} />
                            <Route
                                path="/home"
                                element={
                                    <ProtectedRoutes>
                                        <Home />
                                    </ProtectedRoutes>
                                }
                            />
                            <Route
                                path="/write-blog"
                                element={
                                    <ProtectedRoutes>
                                        <WriteBlog />
                                    </ProtectedRoutes>
                                }
                            />
                            <Route
                                path="/profile"
                                element={
                                    <ProtectedRoutes>
                                        <Profile />
                                    </ProtectedRoutes>
                                }
                            />
                            <Route
                                path="/edit-user"
                                element={
                                    <ProtectedRoutes>
                                        <EditUSer />
                                    </ProtectedRoutes>
                                }
                            />
                            <Route
                                path="/search"
                                element={
                                    <ProtectedRoutes>
                                        <Search />
                                    </ProtectedRoutes>
                                }
                            />
                        </>
                    ) : (
                        <Route path="/" element={<Desktop />} />
                    )}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

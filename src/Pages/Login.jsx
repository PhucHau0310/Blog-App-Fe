import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../Redux/apiRequest';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [hiddenPass, setHiddenPass] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            username,
            password,
        };

        userLogin(dispatch, navigate, user);
    };

    return (
        <div className="login">
            <div className="avatar-app"></div>
            <h1 className="login-hello">Hello, Sign Up Now</h1>
            <div className="new-user">
                <p className="new-user-desc">New User</p>
                <button className="new-user-sign-up">
                    <Link
                        class="no-underline border-b border-blue text-blue"
                        to="/register"
                    >
                        Sign up
                    </Link>
                </button>
            </div>

            <form onSubmit={handleSubmit}>
                <input
                    value={username}
                    type="text"
                    className="input-username"
                    name="username"
                    placeholder="Full Name"
                    onChange={(e) => setUsername(e.target.value)}
                />

                <div className="over-pass">
                    <input
                        value={password}
                        type={hiddenPass ? 'password' : 'text'}
                        className="input-password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <svg
                        onClick={() => setHiddenPass(!hiddenPass)}
                        className="hidden-pass"
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                    >
                        <path
                            opacity="0.55"
                            d="M6.073 9.901L2.212 6.04C0.692 7.697 0.116 9.357 0.106 9.391L0 9.707L0.105 10.023C0.127 10.09 2.421 16.707 10.054 16.707C10.983 16.707 11.829 16.605 12.606 16.434L9.86 13.688C8.87128 13.6395 7.93595 13.225 7.23598 12.525C6.53601 11.825 6.12147 10.8897 6.073 9.901ZM10.054 2.707C8.199 2.707 6.679 3.111 5.412 3.705L1.707 0L0.293 1.414L18.293 19.414L19.707 18L16.409 14.702C19.047 12.749 19.988 10.065 20.002 10.023L20.107 9.707L20.002 9.391C19.98 9.324 17.687 2.707 10.054 2.707ZM11.96 10.253C12.147 9.576 11.988 8.814 11.468 8.293C10.948 7.772 10.185 7.614 9.508 7.801L8 6.293C8.61796 5.91298 9.32855 5.71026 10.054 5.707C12.26 5.707 14.054 7.501 14.054 9.707C14.051 10.4323 13.8479 11.1427 13.467 11.76L11.96 10.253Z"
                            fill="black"
                        />
                    </svg>
                </div>

                <div className="over-btn-login">
                    <button type="submit" class="btn-login">
                        Login
                    </button>
                    <svg
                        className="hidden-btn-login"
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                    >
                        <path
                            d="M7.5 0C4.01375 0 1.08875 2.23533 0.25375 5.25H1.54375C2.34125 2.88458 4.70625 1.16667 7.5 1.16667C10.9475 1.16667 13.75 3.78233 13.75 7C13.75 10.2177 10.9475 12.8333 7.5 12.8333C4.70687 12.8333 2.34125 11.1154 1.54312 8.75H0.25375C1.08875 11.7647 4.01375 14 7.5 14C11.6356 14 15 10.8599 15 7C15 3.14008 11.6356 0 7.5 0ZM7.09 4.24725L6.19125 5.08608L7.61688 6.41667H0V7.58333H7.6175L6.19125 8.91392L7.09 9.75275L9.59 7.41942L10.0188 7L9.58938 6.58058L7.09 4.24725Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </form>
        </div>
    );
};

export default Login;

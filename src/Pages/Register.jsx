import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { userRegister } from '../Redux/apiRequest';
import { useDispatch } from 'react-redux';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Required')
                .min(6, 'Must be 6 characters or more')
                .max(20, 'Length max of username be 20 characters'),
            email: Yup.string()
                .required('Required')
                .matches(
                    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    'Please enter a valid email address'
                )
                .min(10, 'Must be 10 characters or more')
                .max(50, 'Length max of email be 50 characters'),
            password: Yup.string()
                .required('Required')
                .matches(
                    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
                    'Password must be 7-19 characters and contain at least one letter, one number and a special character'
                )
                .min(6, 'Must be 6 characters or more'),
        }),
        onSubmit: (values) => {
            // window.alert('Form submitted');
            // console.log(values);

            userRegister(dispatch, navigate, values);
        },
    });
    return (
        <div className="login">
            <div className="avatar-app"></div>
            <h1 className="login-hello">Hello, Sign Up Now</h1>
            <div className="new-user">
                <p className="new-user-desc">Already have an account select</p>
                <button className="new-user-sign-up">
                    <Link class="" to="/">
                        Login
                    </Link>
                </button>
            </div>

            <form onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    className="input-username"
                    name="username"
                    placeholder="Full Name"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                />
                {formik.errors.username && (
                    <p className="text-red-600">{formik.errors.username}</p>
                )}

                <input
                    type="text"
                    className="input-password"
                    name="email"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                {formik.errors.email && (
                    <p className="text-red-600">{formik.errors.email}</p>
                )}

                <input
                    type="password"
                    className="input-password "
                    name="password"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />

                {formik.errors.password && (
                    <p className="text-red-600"> {formik.errors.password} </p>
                )}

                <div className="over-btn-login">
                    <button type="submit" class="btn-login">
                        Sign up
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

export default Register;

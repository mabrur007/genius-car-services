import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase_init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.userName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(name);
        createUserWithEmailAndPassword(email, password);
    }

    const navigateToLogin = () => {
        navigate('/login');
    }

    if (user) {
        navigate('/home');
    }
    return (
        <div>
            <h2 className='text-center py-2 text-primary'>Please Register</h2>
            <div className='form-handle'>
                <form onSubmit={handleRegister} >
                    <input type="text" name="userName" placeholder='Your Name' id="" />
                    <input type="email" name="email" placeholder='Email' id="" />
                    <input type="password" name="password" placeholder='Password' id="" />
                    <input type="submit" value="Register" />
                </form>
                <p className="mt-2">Already have an account? <Link to="/login" className="text-danger text-decoration-none" onClick={navigateToLogin}>Login Here</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;
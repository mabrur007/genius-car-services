import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase_init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import { async } from '@firebase/util';


const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);
    
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.userName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }

    const navigateToLogin = () => {
        navigate('/login');
    }

    if (user) {
        console.log('user', user);
    }

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-center py-2 text-primary'>Please Register</h2>
            <div className='form-handle'>
                <form onSubmit={handleRegister} >
                    <input type="text" name="userName" placeholder='Your Name' id="" />
                    <input type="email" name="email" placeholder='Email' id="" />
                    <input type="password" name="password" placeholder='Password' id="" />

                    <input onClick={() => setAgree(!agree)} className='mt-3' type="checkbox" name="terms" id="terms" />

                    {/* <label htmlFor="terms" className={agree ? 'text-primary ms-2' : 'text-danger ms-2'}>Agree with our terms and conditions</label> */}

                    <label htmlFor="terms" className={`ms-2 ${agree ? '' : 'text-danger'}`}>Agree with our terms and conditions</label>
                    
                    <input disabled={!agree} className='w-50 btn btn-primary d-block mx-auto' type="submit" value="Register" />
                </form>
                <p className="mt-2">Already have an account? <Link to="/login" className="text-danger text-decoration-none" onClick={navigateToLogin}>Login Here</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;
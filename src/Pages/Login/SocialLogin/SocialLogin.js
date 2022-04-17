import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase_init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';


const SocialLogin = () => {
    // google signin
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    //github signin
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
      }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} { error1?.message}</p>
    }
    
    if (user || user1) {
        return (
            navigate('/home')
        );
      }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
                <p className='mt-2 px-2'><b>or</b></p>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
            </div>
            <div className='text-center'>{ errorElement}</div>
            <div className=''>
                <button onClick={()=> signInWithGoogle()} className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img src={google} alt="google" />
                    Google Sign In
                </button>
                <button className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img src={facebook} alt="facebook"  className='me-2'/>
                    Facebook Sign In
                </button>
                <button onClick={ () => signInWithGithub() } className='btn btn-primary w-50 d-block mx-auto'>
                    <img src={github} className='me-2' alt="github" />
                    <span className='me-3'>GitHub Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
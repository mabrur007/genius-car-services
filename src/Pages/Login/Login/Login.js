import { async } from "@firebase/util";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase_init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  let errorElement;
  // for loging in a registered user
  const [signInWithEmailAndPassword,loading, user, error] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
    console.log(email, password);
  };

  if (loading || sending) {
    return <Loading></Loading>
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className='text-danger'>Error: {error?.message}</p>
  }

  const navigateToRegister = () => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast('New password sent via email');
    }
    else {
      toast('Please enter your email');
    }
  }

  return (
    <div>
      <h2 className="text-center text-primary py-3">Please Login</h2>
      <div className="w-50 mx-auto">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button className="w-50 d-block mx-auto" variant="primary" type="submit">
            LogIn
          </Button>
        </Form>

        {errorElement}
        
        <p className="mt-2">New to Genius Car?<Link to="/register" className="text-primary text-decoration-none" onClick={navigateToRegister}>Register Here</Link></p>
        <p className="mt-2">Forgot Password?<button className="btn btn-link text-primary text-decoration-none" onClick={resetPassword}>Reset Password</button></p>
        
        <ToastContainer />
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;

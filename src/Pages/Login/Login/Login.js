import { async } from "@firebase/util";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase_init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {

  
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  let errorElement;
  // for loging in a registered user
  const [signInWithEmailAndPassword, user, error] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
    console.log(email, password);
  };

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
    await sendPasswordResetEmail(email);
          alert('Sent email');
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
        
        <p className="mt-2">New to Genius Car?{" "}<Link to="/register" className="text-danger text-decoration-none" onClick={navigateToRegister}>Register Here</Link></p>
        <p className="mt-2">Forgot Password?{" "}<Link to="" className="text-danger text-decoration-none" onClick={resetPassword}>Reset Password</Link></p>
        
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;

import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleReloadOnSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email,`<br>`, password);
    }

    const navigateToRegister = event => {
        navigate('/register');
    }

  return (
    <div>
      <h2 className="text-center text-primary py-3">Please Login</h2>
      <div className="w-50 mx-auto">
        <Form onSubmit={handleReloadOnSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                  </Form.Group>
                  
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p className="mt-2">New to Genius Car? <Link to="/register" className="text-danger text-decoration-none" onClick={navigateToRegister}>Register Here</Link></p>
      </div>
    </div>
  );
};

export default Login;

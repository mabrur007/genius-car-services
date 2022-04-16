import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase_init";

const Login = () => {

  
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // for loging in a registered user
  const [signInWithEmailAndPassword, user ] =
    useSignInWithEmailAndPassword(auth);

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
    console.log(email, `<br>`, password);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  const navigateToRegister = (event) => {
    navigate("/register");
  };

  return (
    <div>
      <h2 className="text-center text-primary py-3">Please Login</h2>
      <div className="w-50 mx-auto">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p className="mt-2">
          New to Genius Car?{" "}
          <Link
            to="/register"
            className="text-danger text-decoration-none"
            onClick={navigateToRegister}
          >
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

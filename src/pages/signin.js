import React, { useState } from "react";
import { Form } from "../components";
import { HeaderContainer } from "../containers/header";

export default function SignIn() {
  const [error, setError] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn(e) {
    e.preventDefault();

    // Call firebase for validation
  }

  return (
    <HeaderContainer>
      <Form>
        <Form.Title>Sign in</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}

        <Form.Base onSubmit={handleSignIn} method="POST">
          <Form.Input
            type="email"
            placeholder="Email address"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />

          <Form.Input
            type="password"
            placeholder="Password"
            value={password}
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Submit disabled={false} type="submit">
            Sign in
          </Form.Submit>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </Form.TextSmall>
        </Form.Base>
      </Form>
    </HeaderContainer>
  );
}

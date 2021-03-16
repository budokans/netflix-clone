import React, { useState } from "react";
import { Form } from "../components";
import { HeaderContainer } from "../containers/header";

export default function SignIn() {
  const [error, setError] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const isInvalid = password === "" || emailAddress === "";

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
            autoComplete="email"
            required
          />

          <Form.Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="password"
            required
          />
          <Form.Submit disabled={isInvalid} type="submit">
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

import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/firebase";
import { Form } from "../components";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";

export default function SignIn() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const isInvalid = password === "" || emailAddress === "";

  function handleSignIn(e) {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then((res) => res.user)
      .then(() => {
        setEmailAddress("");
        setPassword("");
        setError("");
      })
      .then(() => history.push(ROUTES.BROWSE))
      .catch((err) => setError(err.message));
  }

  return (
    <>
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

      <FooterContainer />
    </>
  );
}

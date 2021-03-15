import React, { useState } from "react";
import { Form } from "../components";
import { HeaderContainer } from "../containers/header";

export default function SignIn() {
  const [error, setError] = useState(false);

  return (
    <HeaderContainer>
      <Form>
        <Form.Title>Sign in</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}
      </Form>
    </HeaderContainer>
  );
}

import React, { useState } from "react";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

export default function SignUp() {
  return (
    <>
      <HeaderContainer />
      <Form></Form>
      <FooterContainer />
    </>
  );
}

"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Button, TextField } from "@/components/digital-agency";
import { loginAction } from "../libs/login-action";

export function LoginForm() {
  const [errorMessage, dispatch] = useFormState(loginAction, undefined);
  return (
    <form action={dispatch} className="p-4">
      login form
      <p>メールアドレス</p>
      <TextField name="email" type="email" />
      <p>パスワード</p>
      <TextField name="password" type="password" />
      <LoginButton />
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button aria-disabled={pending} size="md" variant="primary">
      Log in
    </Button>
  );
}

"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Button, Label, Tag, TextField } from "@/components/digital-agency";
import { loginAction } from "../libs/login-action";

export function LoginForm() {
  const [errors, dispatch] = useFormState(loginAction, undefined);
  console.log(errors);
  return (
    <form action={dispatch} className="space-y-6 p-4">
      login form
      <div className="space-y-2">
        <Label>
          メールアドレス
          <Tag isRequired>必須</Tag>
        </Label>
        <TextField
          name="email"
          type="email"
          required
          isError={!!errors?.email}
        />
      </div>
      <div className="space-y-2">
        <Label>
          パスワード
          <Tag isRequired>必須</Tag>
        </Label>
        <TextField
          name="password"
          type="password"
          required
          isError={!!errors?.password}
        />
      </div>
      <LoginButton />
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} size="md" variant="primary">
      ログイン
    </Button>
  );
}

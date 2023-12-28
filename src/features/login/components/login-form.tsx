"use client";

import { useFormState } from "react-dom";
import { loginAction } from "../libs/login-action";
import { FormField } from "./form-field";
import { SubmitButton } from "./submit-button";

export function LoginForm() {
  const [errors, dispatch] = useFormState(loginAction, undefined);

  return (
    <form action={dispatch} className="space-y-6">
      <FormField
        label="メールアドレス"
        name="email"
        type="email"
        required
        errors={errors?.email}
      />
      <FormField
        label="パスワード"
        name="password"
        type="password"
        required
        errors={errors?.password}
      />
      <SubmitButton>ログイン</SubmitButton>
    </form>
  );
}

"use client";

import { useFormState } from "react-dom";
import { FormField, SubmitButton } from "@/components";
import { loginAction } from "../libs/login-action";

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

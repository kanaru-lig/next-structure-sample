"use client";

import { useFormState } from "react-dom";
import { FormField, SubmitButton } from "@/components";
import { enterEmailAction } from "../libs/enter-email-action";

export function EnterEmailForm() {
  const [errors, dispatch] = useFormState(enterEmailAction, undefined);

  return (
    <form action={dispatch} className="space-y-6">
      <FormField
        label="メールアドレス"
        name="email"
        type="email"
        required
        errors={errors?.email}
      />
      <SubmitButton>認証メールを送信</SubmitButton>
    </form>
  );
}

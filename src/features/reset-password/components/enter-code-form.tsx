"use client";

import { useFormState } from "react-dom";
import { FormField, SubmitButton } from "@/components";
import { enterCodeAction } from "../libs/enter-code-action";

export function EnterCodeForm() {
  const [errors, dispatch] = useFormState(enterCodeAction, undefined);

  return (
    <form action={dispatch} className="space-y-6">
      <FormField
        label="コードを入力"
        name="code"
        type="text"
        required
        errors={errors?.code}
      />
      <SubmitButton>認証メールを送信</SubmitButton>
    </form>
  );
}

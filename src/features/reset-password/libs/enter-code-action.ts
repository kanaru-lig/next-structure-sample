import { redirect } from "next/navigation";
import { z } from "zod";

// TODO: バリデーション緩いので条件追加する
const FormSchema = z.object({
  code: z.string(),
});

type State = { code?: string[] } | undefined;

export async function enterCodeAction(prevState: State, formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    code: formData.get("code"),
  });

  console.log("submit", validatedFields);

  if (!validatedFields.success) {
    return validatedFields.error.flatten().fieldErrors;
  }

  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log("success");
  return redirect("/reset-password");
}

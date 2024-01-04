import { redirect } from "next/navigation";
import { z } from "zod";

// TODO: バリデーション緩いので条件追加する
const FormSchema = z.object({
  email: z.string().email("メールアドレス形式が正しくありません"),
});

type State = { email?: string[] } | undefined;

export async function enterEmailAction(prevState: State, formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    email: formData.get("email"),
  });

  console.log("submit", validatedFields);

  if (!validatedFields.success) {
    return validatedFields.error.flatten().fieldErrors;
  }

  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log("success");
  redirect("/enter-code");
}

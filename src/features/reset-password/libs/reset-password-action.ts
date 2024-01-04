import { redirect } from "next/navigation";
import { z } from "zod";

// TODO: バリデーション緩いので条件追加する
const FormSchema = z.object({
  newPassword: z.string(),
  confirmNewPassword: z.string(),
});

type State =
  | { newPassword?: string[]; confirmNewPassword?: string[] }
  | undefined;

export async function resetPasswordAction(
  prevState: State,
  formData: FormData,
) {
  const validatedFields = FormSchema.safeParse({
    newPassword: formData.get("new-password"),
    confirmNewPassword: formData.get("confirm-new-password"),
  });

  console.log("submit", validatedFields);

  if (!validatedFields.success) {
    return validatedFields.error.flatten().fieldErrors;
  }

  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log("success");
}

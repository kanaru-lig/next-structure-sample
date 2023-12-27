"use server";

export async function loginAction(
  prevState: string | undefined,
  formData: FormData
) {
  const email = formData.get("email");
  const password = formData.get("password");
  console.log("submit", email, password);

  return "error";
}

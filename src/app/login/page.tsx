import { Link } from "@/components";
import { LoginForm } from "@/features/login";

export default function Page() {
  return (
    <main className="mx-auto max-w-xs space-y-6 pt-12 text-center">
      <LoginForm />
      <Link href="/enter-email" className="block">
        パスワードを忘れた場合
      </Link>
      <Link href="register/enter-email" className="block">
        アカウントを新規作成
      </Link>
    </main>
  );
}

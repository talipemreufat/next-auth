// components/UserPanel.tsx
import { useSession, signIn, signOut } from "next-auth/react";

export default function UserPanel() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Yükleniyor...</p>;

  if (!session) {
    return (
      <div>
        <p>Giriş yapmadınız.</p>
        <button onClick={() => signIn()}>Giriş Yap</button>
      </div>
    );
  }

  return (
    <div>
      <p>Merhaba, {session.user?.email}</p>
      <p>Rol: {session.user?.role ?? "user"}</p>
      <button onClick={() => signOut()}>Çıkış Yap</button>
    </div>
  );
}

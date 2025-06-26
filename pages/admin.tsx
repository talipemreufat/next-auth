// pages/admin.tsx
import { getSession } from "next-auth/react";

export default function AdminPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1> Admin Paneline Hoş Geldin!</h1>
    </div>
  );
}

// Sayfa sunucuda render edilirken kullanıcı oturumu kontrol edilecek
export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

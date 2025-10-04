import { ReactNode } from "react";
import KambazNavigation from "./Navigation";

export default function KambazLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <KambazNavigation />
      <main className="flex-fill p-3">{children}</main>
    </div>
  );
}

import { ReactNode } from "react";
import KambazNavigation from "./Navigation";

export default function KambazLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex" }}>
      <KambazNavigation>{null}</KambazNavigation>
      <main style={{ marginLeft: "80px", padding: "16px", width: "100%" }}>
        {children}
      </main>
    </div>
  );
}

import { ReactNode } from "react";
import KambazNavigation from "./Navigation";

interface KambazLayoutProps {
  children: ReactNode;
}

export default function KambazLayout({ children }: KambazLayoutProps) {
  return (
    <div id="wd-kambaz">
      <div className="d-flex">
        <div style={{ width: "200px" }}>
          <KambazNavigation />
        </div>

        {/* 右侧内容区 */}
        <div className="wd-main-content-offset p-3 flex-fill">
          {children}
        </div>
      </div>
    </div>
  );
}

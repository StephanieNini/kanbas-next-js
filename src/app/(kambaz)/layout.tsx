"use client";
import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import store from "./store";
import { Provider } from "react-redux";

export default function KambazLayout({ children }: { children: ReactNode }) {
  return (
       <Provider store={store}>
    <div id="wd-kambaz" className="d-flex">
      {/* 左侧黑色 Sidebar：在最窄(<400px)时隐藏 */}
      <div className="hide-at-1-4" style={{ width: "200px" }}>
        <KambazNavigation />
      </div>

      {/* 右侧主内容 */}
      <div className="wd-main-content-offset p-3 flex-fill">{children}</div>
    </div>
    </Provider>
  );
}


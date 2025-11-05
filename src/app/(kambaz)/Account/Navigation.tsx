"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// 复用你已有的样式（和课程导航一样）
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/(kambaz)/styles.css";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function AccountNavigation() {
  const pathname = usePathname();
  const isActive = (path: string) =>
    pathname?.toLowerCase().startsWith(path.toLowerCase());
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];


  return (
    <div
      id="wd-account-navigation"
      className="wd list-group fs-5 rounded-0"
      // 白底即可，不要黑色侧栏
      style={{ background: "white" }}
    >
      <Link
        href="/Account/Signin"
        className={`list-group-item border-0 ${
          isActive("/account/signin") ? "active" : "text-danger"
        }`}
      >
        Signin
      </Link>

      <Link
        href="/Account/Signup"
        className={`list-group-item border-0 ${
          isActive("/account/signup") ? "active" : "text-danger"
        }`}
      >
        Signup
      </Link>

      <Link
        href="/Account/Profile"
        className={`list-group-item border-0 ${
          isActive("/account/profile") ? "active" : "text-danger"
        }`}
      >
        Profile
      </Link>
    </div>
  );
}

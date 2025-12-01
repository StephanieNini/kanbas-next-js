/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/(kambaz)/styles.css";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function AccountNavigation() {
  const pathname = usePathname();
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  ) as any;

  const isActive = (path: string) =>
    pathname?.toLowerCase().startsWith(path.toLowerCase());

  return (
    <div
      id="wd-account-navigation"
      className="list-group fs-5 rounded-0"
      style={{ background: "white" }}
    >
      {/* 未登录 → Signin / Signup */}
      {!currentUser && (
        <>
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
        </>
      )}

      {/* 登录后 → Profile */}
      {currentUser && (
        <Link
          href="/Account/Profile"
          className={`list-group-item border-0 ${
            isActive("/account/profile") ? "active" : "text-danger"
          }`}
        >
          Profile
        </Link>
      )}

      {/* 只有 ADMIN 才能看到 Users */}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          href="/Account/Users"
          className={`list-group-item border-0 ${
            isActive("/account/users") ? "active" : "text-danger"
          }`}
        >
          Users
        </Link>
      )}
    </div>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/(kambaz)/styles.css";

export default function CourseNavigation() {
  const pathname = usePathname();

  // 一个小函数，用来判断当前路径是否匹配某个 link
  const isActive = (path: string) => pathname.includes(path);

  return (
    <div
      id="wd-courses-navigation"
      className="wd list-group fs-5 rounded-0"
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
        paddingTop: "10px",
      }}
    >
      <Link
        href="/Courses/1234/Home"
        className={`list-group-item border-0 ${
          isActive("/Home") ? "active" : "text-danger"
        }`}
      >
        Home
      </Link>

      <Link
        href="/Courses/1234/Modules"
        className={`list-group-item border-0 ${
          isActive("/Modules") ? "active" : "text-danger"
        }`}
      >
        Modules
      </Link>

      <Link
        href="/Courses/1234/Piazza"
        className={`list-group-item border-0 ${
          isActive("/Piazza") ? "active" : "text-danger"
        }`}
      >
        Piazza
      </Link>

      <Link
        href="/Courses/1234/Zoom"
        className={`list-group-item border-0 ${
          isActive("/Zoom") ? "active" : "text-danger"
        }`}
      >
        Zoom Meetings
      </Link>

      <Link
        href="/Courses/1234/Assignments"
        className={`list-group-item border-0 ${
          isActive("/Assignments") ? "active" : "text-danger"
        }`}
      >
        Assignments
      </Link>

      <Link
        href="/Courses/1234/Quizzes"
        className={`list-group-item border-0 ${
          isActive("/Quizzes") ? "active" : "text-danger"
        }`}
      >
        Quizzes
      </Link>

      <Link
        href="/Courses/1234/People"
        className={`list-group-item border-0 ${
          isActive("/People") ? "active" : "text-danger"
        }`}
      >
        People
      </Link>

      <Link
        href="/Courses/1234/Grades"
        className={`list-group-item border-0 ${
          isActive("/Grades") ? "active" : "text-danger"
        }`}
      >
        Grades
      </Link>
    </div>
  );
}
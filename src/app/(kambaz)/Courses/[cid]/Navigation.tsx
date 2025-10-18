"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/(kambaz)/styles.css";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();

  // 定义导航数组
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  // 判断当前路径是否处于活跃状态
  const isActive = (link: string) => pathname.includes(`/${link}`);

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
      {links.map((link) => (
        <Link
          key={link}
          href={`/Courses/${cid}/${link}`}
          className={`list-group-item border-0 ${
            isActive(link) ? "active" : "text-danger"
          }`}
        >
          {link === "Zoom" ? "Zoom Meetings" : link}
        </Link>
      ))}
    </div>
  );
}

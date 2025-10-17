import { courses } from "../../Database";
import CourseNavigation from "./Navigation";
import { notFound } from "next/navigation";
import { FaAlignJustify } from 'react-icons/fa';

export default function CourseLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { cid: string };
}) {
  const course = courses.find((c) => c._id === params.cid);
  if (!course) notFound();

  return (
    <div
      id="wd-course-layout"
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        minHeight: "100vh",
      }}
    >
      {/* 左侧课程导航栏（带响应式隐藏） */}
      <div
        className="wd-course-nav hide-at-1-2"
        style={{
          width: "220px",
          borderRight: "1px solid #dee2e6",
          background: "white",
          padding: "20px",
          marginLeft: "-200px", // 贴紧左侧主导航
        }}
      >
        <h4 className="text-danger" style={{ marginBottom: "20px" }}>
          <div className="d-flex align-items-center gap-3">
            <FaAlignJustify />
            {course.name}
          </div>
        </h4>
        <CourseNavigation />
      </div>

      {/* 右侧课程内容区域 */}
      <div style={{ flex: 1, padding: "30px" }}>{children}</div>
    </div>
  );
}

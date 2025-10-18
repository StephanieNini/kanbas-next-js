/* eslint-disable @typescript-eslint/no-explicit-any */
import { courses } from "../../Database";
import CourseNavigation from "./Navigation";
import { notFound } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa";

export default function CourseLayout(props: any) {
  const { children, params } = props;
  const cid = params?.cid;

  const course = courses.find((c: any) => c._id === cid);
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
      {/* ✅ 左侧课程导航栏（响应式隐藏 + 与主导航贴齐） */}
      <div
        className="wd-course-nav hide-at-1-2"
        style={{
          width: "220px",
          borderRight: "1px solid #dee2e6",
          background: "white",
          padding: "20px",
          marginLeft: "-200px",
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

      {/* ✅ 右侧课程内容区域 */}
      <div style={{ flex: 1, padding: "30px" }}>{children}</div>
    </div>
  );
}

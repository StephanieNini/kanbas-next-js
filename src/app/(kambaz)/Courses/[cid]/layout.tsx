import { courses } from "../../Database";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./breadcrumb";
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
        flexDirection: "column", //顶部 + 主体分区
        minHeight: "100vh",
        backgroundColor: "white",
      }}
    >
      {/* 顶部 Breadcrumb（横跨两区） */}
      <div
        className="d-flex align-items-center gap-3 text-danger"
        style={{
          borderBottom: "1px solid #dee2e6",
          padding: "15px 30px",
          fontWeight: "500",
          fontSize: "18px",
          marginLeft: "-200px",
        }}
      >
        <FaAlignJustify />
        <Breadcrumb course={course} />
      </div>

      {/* 主体部分：左导航 + 右内容 */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          backgroundColor: "white",
        }}
      >
        {/* 左侧导航栏 */}
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
          <CourseNavigation cid={cid} />
        </div>

        {/* 右侧课程内容 */}
        <div style={{ flex: 1, padding: "30px" }}>{children}</div>
      </div>
    </div>
  );
}

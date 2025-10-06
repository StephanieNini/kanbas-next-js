import CourseNavigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/(kambaz)/styles.css";

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id="wd-course-layout"
      style={{
        display: "flex",
        flexDirection: "row",
        minHeight: "100vh",
        backgroundColor: "white",
      }}
    >
      {/* 第二栏：课程导航 */}
      <div
        className="d-none d-lg-block"
        style={{
          width: "200px",
          borderRight: "1px solid #dee2e6",
          backgroundColor: "white",
          top: 0,
          bottom: 0,
          left: "150px", 
          paddingTop: "20px",
          zIndex: 5, 
        }}
      >
        <CourseNavigation />
      </div>

      {/* 第三栏：右侧内容 */}
      <div style={{ flex: 1, padding: "20px" }}>{children}</div>
    </div>
  );
}

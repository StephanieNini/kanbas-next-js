"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { courses } from "../../Database";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./breadcrumb";
import { notFound } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { RootState } from "../../store";
import { ReactNode } from "react";

export default function CourseLayout({ children }: { children: ReactNode }) {
 const { cid } = useParams();
 const { courses } = useSelector((state: RootState) => state.coursesReducer);
 const course = courses.find((course: any) => course._id === cid);

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
        {course ? <Breadcrumb course={course} /> : null}
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
          {cid ? <CourseNavigation cid={Array.isArray(cid) ? cid[0] : cid} /> : null}
        </div>

        {/* 右侧课程内容 */}
        <div style={{ flex: 1, padding: "30px" }}>{children}</div>
      </div>
    </div>
  );
}

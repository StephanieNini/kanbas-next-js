"use client";
import { useParams } from "next/navigation";
import Modules from "../Modules/page";
import CourseStatus from "./Status";
import { courses } from "../../../Database"; // ✅ 注意路径
import { useMemo } from "react";

export default function Home() {
  // 从 URL 中获取课程 ID，比如 RS101 / RS102 等
  const params = useParams();
  const cid = params?.cid as string;

  // 查找对应课程
  const course = useMemo(() => courses.find((c) => c._id === cid), [cid]);

  // 如果找不到对应课程
  if (!course) {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h2>Course not found</h2>
        <p>Invalid course ID: {cid}</p>
      </div>
    );
  }

  return (
    <div id="wd-home" style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* 动态标题 */}
      <h2 style={{ marginBottom: "10px" }}>
        {course.number} {course.name}
      </h2>

      {/* 按钮区域 */}
      <div style={{ marginBottom: "20px" }}>
        <button style={buttonStyle}>View Course Stream</button>
        <button style={buttonStyle}>New Announcement</button>
        <button style={buttonStyle}>New Assignment</button>
      </div>

      {/* 模块 + 课程状态 */}
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td valign="top" width="70%">
              <div style={boxStyle}>
                <Modules />
              </div>
            </td>
            <td valign="top" className="hide-at-3-4">
              <div style={boxStyle}>
                <CourseStatus />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const buttonStyle = {
  marginRight: "10px",
  padding: "8px 16px",
  backgroundColor: "#1d72b8",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const boxStyle = {
  border: "1px solid #ccc",
  padding: "15px",
  borderRadius: "6px",
  backgroundColor: "#f9f9f9",
};

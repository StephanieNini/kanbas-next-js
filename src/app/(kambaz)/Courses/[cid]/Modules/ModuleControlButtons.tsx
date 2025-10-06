"use client";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons() {
  return (
    <div className="d-inline-flex align-items-center gap-1 float-end">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-5 text-muted" />
      <BsPlus className="fs-5 text-muted" />
    </div>
  );
}
// 这个组件显示每个模块右侧的控制按钮，包括绿色对勾、更多选项和添加课程项按钮
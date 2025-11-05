"use client";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

export default function ModuleControlButtons({ moduleId, deleteModule, editModule }: 
  { moduleId: string; 
    deleteModule: (moduleId: string) => void; 
    editModule: (moduleId: string) => void; }) {
  return (
    <div className="d-inline-flex align-items-center gap-1 float-end">
      <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" />
      <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)}/>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-5 text-muted" />
      <BsPlus className="fs-5 text-muted" />
      
    </div>
  );
}
// 这个组件显示每个模块右侧的控制按钮，包括绿色对勾、更多选项和添加课程项按钮
"use client";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

export default function LessonControlButtons() {
  return (
    <div className="d-inline-flex align-items-center gap-1 float-end">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-5 text-muted" />
    </div>
  );
}

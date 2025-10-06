"use client";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";

export default function ModulesContent() {
  return (
    <ListGroup className="rounded-0" id="wd-modules">
      {/* Week 1 */}
      <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
        <div
          className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between"
        >
          {/* 左侧图标 + 文本 */}
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3 text-dark" />
            Week 1
          </div>

          {/* 右侧图标组 */}
          <ModuleControlButtons />
        </div>

        {/* Lessons */}
        <ListGroup className="wd-lessons rounded-0">
          <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-4 text-muted" />
              LEARNING OBJECTIVES
            </div>
            <LessonControlButtons />
          </ListGroupItem>

          <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-4 text-muted" />
              Introduction to the course
            </div>
            <LessonControlButtons />
          </ListGroupItem>

        <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-4 text-muted" />
            LEARNING OBJECTIVES
          </div>
          <LessonControlButtons />
        </ListGroupItem>
        </ListGroup>
      </ListGroupItem>
    </ListGroup>
  );
}


// 这个组件显示课程模块的内容，包括各个模块和课程项
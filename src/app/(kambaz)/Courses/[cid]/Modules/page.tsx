"use client";
import ModulesControls from "./ModulesControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />

      <ListGroup className="rounded-0" id="wd-modules">
        {/* ========== Week 1 模块 ========== */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          {/* 模块标题 */}
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <span className="wd-icon wd-icon--grip me-2">
                <BsGripVertical className="fs-4 text-muted" />
              </span>
              <span>Week 1</span>
            </div>
            <ModuleControlButtons />
          </div>

          {/* Week 1 课程内容 */}
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <span className="wd-icon wd-icon--grip me-2">
                  <BsGripVertical className="fs-4 text-muted" />
                </span>
                <span>LEARNING OBJECTIVES</span>
              </div>
              <LessonControlButtons />
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <span className="wd-icon wd-icon--grip me-2">
                  <BsGripVertical className="fs-4 text-muted" />
                </span>
                <span>Introduction to the course</span>
              </div>
              <LessonControlButtons />
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <span className="wd-icon wd-icon--grip me-2">
                  <BsGripVertical className="fs-4 text-muted" />
                </span>
                <span>Setting up the development environment</span>
              </div>
              <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        {/* ========== Week 2 模块 ========== */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          {/* 模块标题 */}
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <span className="wd-icon wd-icon--grip me-2">
                <BsGripVertical className="fs-4 text-muted" />
              </span>
              <span>Week 2</span>
            </div>
            <ModuleControlButtons />
          </div>

          {/* Week 2 课程内容 */}
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <span className="wd-icon wd-icon--grip me-2">
                  <BsGripVertical className="fs-4 text-muted" />
                </span>
                <span>HTML Basics</span>
              </div>
              <LessonControlButtons />
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <span className="wd-icon wd-icon--grip me-2">
                  <BsGripVertical className="fs-4 text-muted" />
                </span>
                <span>CSS Fundamentals</span>
              </div>
              <LessonControlButtons />
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <span className="wd-icon wd-icon--grip me-2">
                  <BsGripVertical className="fs-4 text-muted" />
                </span>
                <span>Working with Layouts</span>
              </div>
              <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}

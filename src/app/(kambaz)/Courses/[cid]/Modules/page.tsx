/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";

export default function Modules() {
  // ✅ 获取当前课程 ID
  const { cid } = useParams();

  // ✅ 从数据库获取所有模块
  const modules = db.modules;

  // ✅ 过滤出当前课程的模块
  const currentModules = modules.filter(
    (module: any) => module.course === cid
  );

  return (
    <div>
      {/* 模块控制栏 */}
      <ModulesControls />
      <br />
      <br />
      <br />

      {/* 模块列表 */}
      <ListGroup id="wd-modules" className="rounded-0">
        {currentModules.map((module: any) => (
          <ListGroupItem
            key={module._id}
            className="wd-module p-0 mb-5 fs-5 border-gray"
          >
            {/* 模块标题 */}
            <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3 text-muted" />
                <span>{module.name}</span>
              </div>
              <ModuleControlButtons />
            </div>

            {/* 模块下的课程列表 */}
            {module.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: any) => (
                  <ListGroupItem
                    key={lesson._id}
                    className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between"
                  >
                    <div className="d-flex align-items-center">
                      <BsGripVertical className="me-2 fs-3 text-muted" />
                      <span>{lesson.name}</span>
                    </div>
                    <LessonControlButtons />
                  </ListGroupItem>
                ))}
              </ListGroup>
            )}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

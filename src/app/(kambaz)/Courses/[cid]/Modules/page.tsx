/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import {
  addModule,
  editModule,
  updateModule,
  deleteModule,
} from "./reducer";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";

export default function Modules() {
  // 当前课程 ID
  const { cid } = useParams();

  // 模块输入框
  const [moduleName, setModuleName] = useState("");

  // 从 Redux 获取模块
  const { modules } = useSelector((state: RootState) => state.modulesReducer);

  // Redux dispatch
  const dispatch = useDispatch();

  // 过滤出当前课程的模块
  const currentModules = modules.filter((module: any) => module.course === cid);

  return (
    <div className="wd-modules">
      {/* 顶部控制栏 */}
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={() => {
          if (!moduleName.trim()) return;
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }}
      />

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

                {/* 模块名 / 编辑输入框 */}
                {!module.editing && <span>{module.name}</span>}

                {module.editing && (
                  <FormControl
                    className="w-50 d-inline-block"
                    autoFocus
                    onChange={(e) =>
                      dispatch(updateModule({ ...module, name: e.target.value }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        dispatch(updateModule({ ...module, editing: false }));
                      }
                    }}
                    defaultValue={module.name}
                  />
                )}
              </div>

              {/* 模块操作按钮（防止冒泡） */}
              <div onClick={(e) => e.stopPropagation()}>
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(id: string) => dispatch(deleteModule(id))}
                  editModule={(id: string) => dispatch(editModule(id))}
                />
              </div>
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

                    <div onClick={(e) => e.stopPropagation()}>
                      <LessonControlButtons />
                    </div>
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

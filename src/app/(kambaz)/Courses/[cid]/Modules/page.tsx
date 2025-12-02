/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";

import {
  addModule,
  editModule,
  updateModule as updateModuleLocal,
  deleteModule as deleteModuleLocal,
  setModules,
} from "./reducer";

import * as client from "../../client";

import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";

export default function Modules() {
  const { cid } = useParams();
  const dispatch = useDispatch();

  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: RootState) => state.modulesReducer);

  const fetchModules = async () => {
    if (!cid) return;
    const data = await client.findModulesForCourse(cid as string);
    dispatch(setModules(data));
  };

  useEffect(() => {
    fetchModules();
  }, [cid]);

  // ⭐ 创建模块（POST）
  const onCreateModuleForCourse = async () => {
    if (!cid) return;
    if (!moduleName.trim()) return;

    const newModuleData = { name: moduleName };
    const newModule = await client.createModuleForCourse(
      cid as string,
      newModuleData
    );

    dispatch(setModules([...modules, newModule]));
    setModuleName("");
  };

  // ⭐ 删除模块（DELETE）
const onRemoveModule = async (moduleId: string) => {
  if (typeof cid === "string") {
    await client.deleteModule(cid, moduleId);
  } else {
    console.error("Invalid course ID");
  }
  dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
};

  // ⭐ 更新模块（PUT）
const onUpdateModule = async (module: any) => {
  if (typeof cid === "string") {
    await client.updateModule(cid, module);
  } else {
    console.error("Invalid course ID");
  }
  const newModules = modules.map((m: any) =>
    m._id === module._id ? module : m
  );
  dispatch(setModules(newModules));
};


  return (
    <div className="wd-modules">
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={onCreateModuleForCourse}
      />

      <ListGroup id="wd-modules" className="rounded-0">
        {modules.map((module: any) => (
          <ListGroupItem
            key={module._id}
            className="wd-module p-0 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3 text-muted" />

                {/* 显示模式 */}
                {!module.editing && <span>{module.name}</span>}

                {/* 编辑模式 */}
                {module.editing && (
                  <FormControl
                    className="w-50 d-inline-block"
                    autoFocus
                    value={module.name}
                    onChange={(e) =>
                      dispatch(
                        updateModuleLocal({
                          ...module,
                          name: e.target.value,
                        })
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        onUpdateModule({ ...module, editing: false });
                      }
                    }}
                  />
                )}
              </div>

              <div onClick={(e) => e.stopPropagation()}>
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => onRemoveModule(moduleId)}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
              </div>
            </div>

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

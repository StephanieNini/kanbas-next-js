"use client";

import { InputGroup, FormControl, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import * as client from "./client";

interface Props {
  cid: string | string[] | undefined;
  refresh: () => Promise<void>;
}

export default function AssignmentsControls({ cid, refresh }: Props) {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  ) as {
    currentUser: { role: string } | null;
  };

  // 只允许 Faculty 显示按钮
  const isFaculty = currentUser?.role === "FACULTY";

  const onAddAssignment = async () => {
    if (!cid) return;

    // 教材标准 assignment 结构（完整）
    const today = new Date().toISOString().split("T")[0];

    const newAssignment = {
      title: "New Assignment",
      description: "",
      points: 100,
      dueDate: today,
      availableFrom: today,
      untilDate: today,
      course: cid, // important
    };

    await client.createAssignment(cid as string, newAssignment);

    await refresh(); // 刷新父组件
  };

  return (
    <div id="wd-assignments-controls" className="mb-3">
      <div className="d-flex align-items-center justify-content-between">
        
        {/* Search 输入框 */}
        <div className="flex-fill me-2" style={{ maxWidth: "400px" }}>
          <InputGroup>
            <InputGroup.Text className="bg-white border-secondary-subtle">
              <BsSearch className="text-muted" />
            </InputGroup.Text>
            <FormControl
              placeholder="Search..."
              aria-label="Search"
              className="border-secondary-subtle"
            />
          </InputGroup>
        </div>

        {/* 按钮区：只有 FACULTY 才显示 */}
        {isFaculty && (
          <div className="d-flex">
            <Button
              variant="secondary"
              className="me-2 btn-sm d-inline-flex align-items-center"
            >
              <FaPlus className="me-2" />
              Group
            </Button>

            <Button
              variant="danger"
              className="btn-sm d-inline-flex align-items-center"
              onClick={onAddAssignment}
            >
              <FaPlus className="me-2" />
              Assignment
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

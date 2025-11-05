"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { deleteAssignment } from "./reducer";

import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { BsGripVertical, BsThreeDotsVertical } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import AssignmentsControls from "./AssignmentsControls";
import Link from "next/link";

export default function AssignmentsPage() {
  const { cid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  // 从 Redux 中获取 assignments
  const { assignments } = useSelector(
    (state: RootState) => state.assignmentsReducer
  );

  // 过滤出当前课程的作业
  const currentAssignments = assignments.filter(
    (assignment: any) => assignment.course === cid
  );

  // 删除作业（带确认）
  const handleDelete = (assignmentId: string) => {
    if (confirm("Are you sure you want to delete this assignment?")) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

  return (
    <div id="wd-assignments-page" className="p-3">
      {/* 顶部 +Assignment 控制栏 */}
      <AssignmentsControls />

      <br />

      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="p-0 mb-3 fs-5 border-gray">
          {/* 作业标题栏 */}
          <div className="p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <BsGripVertical className="fs-4 text-muted me-2" />
              <span className="fw-semibold">ASSIGNMENTS</span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <span className="text-muted small">(40% of Total)</span>
              <BsThreeDotsVertical className="text-muted" />
            </div>
          </div>

          {/* ✅ 动态渲染列表 */}
          <ListGroup className="rounded-0">
            {currentAssignments.map((assignment: any) => (
              <ListGroupItem
                key={assignment._id}
                className="p-3 ps-1 d-flex align-items-center justify-content-between"
                style={{ borderLeft: "3px solid green" }}
              >
                <div>
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="fs-4 text-muted me-2" />
                    <MdAssignment className="fs-5 text-secondary me-2" />

                    {/* ✅ 点击标题跳转编辑页 */}
                    <Link
                      href={`/Courses/${cid}/Assignments/${assignment._id}`}
                      className="fw-semibold text-decoration-none text-dark"
                    >
                      {assignment.title}
                    </Link>
                  </div>

                  <div className="text-muted small ms-4">
                    Due {assignment.dueDate} | {assignment.points} pts
                  </div>
                </div>

                {/* ✅ 删除按钮 */}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(assignment._id)}
                >
                  Delete
                </Button>
              </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}

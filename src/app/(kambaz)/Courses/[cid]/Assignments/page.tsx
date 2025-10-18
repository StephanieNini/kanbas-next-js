/* eslint-disable @typescript-eslint/no-explicit-any */
/* ts-nocheck */
"use client";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import AssignmentsControls from "./AssignmentsControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical, BsThreeDotsVertical } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import LessonControlButtons from "../Modules/LessonControlButtons";
import Link from "next/link";

export default function AssignmentsPage() {
  // ✅ 获取当前课程 ID
  const { cid } = useParams();

  // ✅ 获取所有作业
  const assignments = db.assignments;

  // ✅ 过滤出当前课程对应的作业
  const currentAssignments = assignments.filter(
    (assignment: any) => assignment.course === cid
  );

  return (
    <div id="wd-assignments-page" className="p-2">
      <AssignmentsControls />
      <br />

      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="p-0 mb-3 fs-5 border-gray">
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

          {/* ✅ 动态渲染每个作业 */}
          <ListGroup className="rounded-0">
            {currentAssignments.map((assignment: any) => (
              <ListGroupItem
                key={assignment._id + assignment.course}
                className="p-3 ps-1 d-flex align-items-center justify-content-between"
                style={{ borderLeft: "3px solid green" }}
              >
                <div>
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="fs-4 text-muted me-2" />
                    <MdAssignment className="fs-5 text-secondary me-2" />
                    <Link
                      href={`/Courses/${cid}/Assignments/${assignment._id}`}
                      className="fw-semibold text-decoration-none text-dark"
                    >
                      {assignment.title}
                    </Link>
                  </div>
                  <div className="text-muted small ms-4">{assignment.meta}</div>
                </div>
                <LessonControlButtons />
              </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}

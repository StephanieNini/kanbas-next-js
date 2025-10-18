/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
"use client";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useParams } from "next/navigation";
import * as db from "../../../../Database"; //  导入数据库
import Link from "next/link";

export default function AssignmentEditor() {
  //  从 URL 获取参数
  const { cid, aid } = useParams();

  //  从数据库读取对应 assignment
  const assignments = db.assignments;
  const assignment = assignments.find(
    (a: any) => a._id === aid && a.course === cid
  );

  //  如果没找到该作业
  if (!assignment) {
    return <div className="p-4">Assignment not found.</div>;
  }

  return (
    <div id="wd-assignment-editor" className="p-4" style={{ maxWidth: "800px" }}>
      <h3 className="mb-4">{assignment.title}</h3>

      <Form>
        {/* Assignment Name */}
        <Form.Group className="mb-3" controlId="assignmentName">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue={assignment.title} />
        </Form.Group>

        {/* Description */}
        <Form.Group className="mb-4" controlId="assignmentDesc">
          <Form.Label>Description</Form.Label>
          <div className="border rounded p-3 bg-light">
            <p>
              This is <strong className="text-success">{assignment.title}</strong> for course{" "}
              <strong>{cid}</strong>.
            </p>
            <p>
              Submit a link to your project page. Include all required files or links.
            </p>
          </div>
        </Form.Group>

        {/* Points */}
        <Form.Group className="mb-3" controlId="assignmentPoints">
          <Form.Label>Points</Form.Label>
          <Form.Control type="number" defaultValue={assignment.points || 100} />
        </Form.Group>

        {/* Assignment Group */}
        <Form.Group className="mb-3" controlId="assignmentGroup">
          <Form.Label>Assignment Group</Form.Label>
          <Form.Select defaultValue="ASSIGNMENTS">
            <option>ASSIGNMENTS</option>
            <option>QUIZZES</option>
            <option>PROJECTS</option>
          </Form.Select>
        </Form.Group>

        {/* Display Grade */}
        <Form.Group className="mb-3" controlId="displayGrade">
          <Form.Label>Display Grade as</Form.Label>
          <Form.Select defaultValue="Percentage">
            <option>Percentage</option>
            <option>Points</option>
          </Form.Select>
        </Form.Group>

        {/* Submission Type */}
        <Form.Group className="mb-4" controlId="submissionType">
          <Form.Label>Submission Type</Form.Label>
          <Form.Select defaultValue="Online">
            <option>Online</option>
            <option>On Paper</option>
            <option>External Tool</option>
          </Form.Select>

          <div className="mt-3 border rounded p-3 bg-light">
            <Form.Label className="fw-semibold mb-2">Online Entry Options</Form.Label>
            <Form.Check type="checkbox" label="Text Entry" />
            <Form.Check type="checkbox" label="Website URL" defaultChecked />
            <Form.Check type="checkbox" label="Media Recordings" />
            <Form.Check type="checkbox" label="Student Annotation" />
            <Form.Check type="checkbox" label="File Uploads" />
          </div>
        </Form.Group>

        {/* Assign Section */}
        <Form.Group className="mb-3" controlId="assignTo">
          <Form.Label>Assign To</Form.Label>
          <Form.Control type="text" defaultValue="Everyone" />
        </Form.Group>

        {/* Dates */}
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="dueDate">
              <Form.Label>Due</Form.Label>
              <Form.Control
                type="datetime-local"
                defaultValue={assignment.dueDate || "2024-05-13T23:59"}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="availableFrom">
              <Form.Label>Available From</Form.Label>
              <Form.Control
                type="datetime-local"
                defaultValue={assignment.availableFrom || "2024-05-01T00:00"}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="untilDate">
              <Form.Label>Until</Form.Label>
              <Form.Control
                type="datetime-local"
                defaultValue={assignment.untilDate || "2024-05-14T00:00"}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* ✅ Save & Cancel Buttons */}
        <div className="d-flex justify-content-end mt-4">
          <Link
            href={`/Courses/${cid}/Assignments`}
            className="btn btn-secondary me-2"
          >
            Cancel
          </Link>
          <Link
            href={`/Courses/${cid}/Assignments`}
            className="btn btn-danger"
          >
            Save
          </Link>
        </div>
      </Form>
    </div>
  );
}

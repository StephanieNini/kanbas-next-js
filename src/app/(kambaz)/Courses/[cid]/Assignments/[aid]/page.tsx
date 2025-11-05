/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../store";
import { updateAssignment } from "../reducer";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const assignments = useSelector(
    (state: RootState) => state.assignmentsReducer.assignments
  );

  const original = assignments.find(
    (a: any) => a._id === aid && a.course === cid
  );

  if (!original) return <div className="p-4">Assignment not found.</div>;

  // ✅ 使用本地状态存储可编辑内容
  const [assignment, setAssignment] = useState<{
    _id: string;
    title: string;
    course: string;
    description?: string;
    points?: number;
    dueDate?: string;
    availableFrom?: string;
    untilDate?: string;
  }>({ ...original });

  const handleSave = () => {
    dispatch(updateAssignment(assignment));
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignment-editor" className="p-4" style={{ maxWidth: "800px" }}>
      <h3 className="mb-4">Edit Assignment</h3>

      <Form>
        {/* Assignment Name */}
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            type="text"
            value={assignment.title}
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          />
        </Form.Group>

        {/* Description */}
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={assignment.description || ""}
            onChange={(e) =>
              setAssignment({ ...assignment, description: e.target.value })
            }
          />
        </Form.Group>

        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Points</Form.Label>
              <Form.Control
                type="number"
                value={assignment.points}
                onChange={(e) =>
                  setAssignment({ ...assignment, points: Number(e.target.value) })
                }
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                value={assignment.dueDate || ""}
                onChange={(e) =>
                  setAssignment({ ...assignment, dueDate: e.target.value })
                }
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Available From</Form.Label>
              <Form.Control
                type="date"
                value={assignment.availableFrom || ""}
                onChange={(e) =>
                  setAssignment({ ...assignment, availableFrom: e.target.value })
                }
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Until</Form.Label>
              <Form.Control
                type="date"
                value={assignment.untilDate || ""}
                onChange={(e) =>
                  setAssignment({ ...assignment, untilDate: e.target.value })
                }
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Buttons */}
        <div className="d-flex justify-content-end gap-2 mt-4">
          <Button variant="secondary" onClick={() => router.push(`/Courses/${cid}/Assignments`)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}

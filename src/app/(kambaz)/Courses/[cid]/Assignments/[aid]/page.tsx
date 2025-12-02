/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useParams, useRouter } from "next/navigation";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import * as client from "../../../client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();

  const [assignment, setAssignment] = useState<any | null>(null);

  // 日期转换成 yyyy-MM-dd，给 <input type="date"> 用
  const formatDate = (d?: string) =>
    d ? new Date(d).toISOString().split("T")[0] : "";

  // === 加载 assignment ===
  const fetchAssignment = async () => {
    if (!aid) return;
    const data = await client.fetchAssignmentById(aid as string);

    // 确保传给表单的是 "2025-12-01" 这种格式
    setAssignment({
      ...data,
      dueDate: formatDate(data.dueDate),
      availableFrom: formatDate(data.availableFrom),
      untilDate: formatDate(data.untilDate),
    });
  };

  useEffect(() => {
    fetchAssignment();
    // 依赖 aid，切换不同 assignment 时可以重新加载
  }, [aid]);

  if (!assignment) return <div className="p-4">Loading...</div>;

  // === 保存 assignment ===
  const handleSave = async () => {
    // 这里 assignment 里的日期已经是 yyyy-MM-dd 字符串
    await client.updateAssignment(assignment);
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div
      id="wd-assignment-editor"
      className="p-4"
      style={{ maxWidth: "800px" }}
    >
      <h3 className="mb-4">Edit Assignment</h3>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            type="text"
            value={assignment.title || ""}
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
          />
        </Form.Group>

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
                value={assignment.points ?? ""} // 避免 undefined
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    points:
                      e.target.value === ""
                        ? undefined
                        : Number(e.target.value),
                  })
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
                  setAssignment({
                    ...assignment,
                    dueDate: e.target.value,
                  })
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
                  setAssignment({
                    ...assignment,
                    availableFrom: e.target.value,
                  })
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
                  setAssignment({
                    ...assignment,
                    untilDate: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="d-flex justify-content-end gap-2 mt-4">
          <Button
            variant="secondary"
            onClick={() => router.push(`/Courses/${cid}/Assignments`)}
          >
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

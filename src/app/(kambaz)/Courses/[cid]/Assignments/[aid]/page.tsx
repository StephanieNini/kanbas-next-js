"use client";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useParams } from "next/navigation";

export default function AssignmentEditor() {
  const { aid } = useParams(); // 例如 A1 / A2 / A3

  return (
    <div id="wd-assignment-editor" className="p-4" style={{ maxWidth: "800px" }}>
      <h3 className="mb-4">{aid}</h3>

      <Form>
        {/* Assignment Name */}
        <Form.Group className="mb-3" controlId="assignmentName">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue={aid} />
        </Form.Group>

        {/* Description */}
        <Form.Group className="mb-4" controlId="assignmentDesc">
          <Form.Label>Description</Form.Label>
          <div className="border rounded p-3 bg-light">
            <p>
              The assignment is <strong className="text-success">available online</strong>.
            </p>
            <p>
              Submit a link to the landing page of your Web application running on{" "}
              <a href="#" className="text-primary">Netlify</a>.
            </p>
            <p>The landing page should include the following:</p>
            <ul>
              <li>Your full name and section</li>
              <li>Links to each of the lab assignments</li>
              <li>Link to the Kanbas application</li>
              <li>Links to all relevant source code repositories</li>
            </ul>
            <p>
              The Kanbas application should include a link to navigate back to the landing page.
            </p>
          </div>
        </Form.Group>

        {/* Points */}
        <Form.Group className="mb-3" controlId="assignmentPoints">
          <Form.Label>Points</Form.Label>
          <Form.Control type="number" defaultValue={100} />
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
              <Form.Control type="datetime-local" defaultValue="2024-05-13T23:59" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="availableFrom">
              <Form.Label>Available From</Form.Label>
              <Form.Control type="datetime-local" defaultValue="2024-05-01T00:00" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="untilDate">
              <Form.Label>Until</Form.Label>
              <Form.Control type="datetime-local" defaultValue="2024-05-14T00:00" />
            </Form.Group>
          </Col>
        </Row>

        {/* Save Buttons */}
        <div className="d-flex justify-content-end mt-4">
          <Button variant="secondary" className="me-2">Cancel</Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </div>
  );
}


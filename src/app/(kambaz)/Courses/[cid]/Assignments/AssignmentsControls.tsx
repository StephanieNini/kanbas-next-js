"use client";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

export default function AssignmentsControls() {
  return (
    <div id="wd-assignments-controls" className="mb-3">
      <div className="d-flex align-items-center justify-content-between">
        {/* 搜索框 */}
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

        {/* 右侧按钮 */}
        <div className="d-flex">
          <Button
            variant="secondary"
            className="me-2 btn-sm d-inline-flex align-items-center"
          >
            <FaPlus className="me-2" style={{ verticalAlign: "middle" }} />
            Group
          </Button>
          <Button
            variant="danger"
            className="btn-sm d-inline-flex align-items-center"
          >
            <FaPlus className="me-2" style={{ verticalAlign: "middle" }} />
            Assignment
          </Button>
        </div>
      </div>
    </div>
  );
}

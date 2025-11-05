"use client";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export default function AssignmentsControls() {
  const { cid } = useParams();
  const router = useRouter();

  const { currentUser } = useSelector((state: RootState) => state.accountReducer) as { currentUser: { role: string } | null };
  const isFaculty = currentUser?.role === "FACULTY";

  const onAddAssignment = () => {
    router.push(`/Courses/${cid}/Assignments/new`);
  };

  return (
    <div id="wd-assignments-controls" className="mb-3">
      <div className="d-flex align-items-center justify-content-between">

        {/* 搜索框（学生和老师都能看到） */}
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

        {/* 右侧按钮：只有老师能看到 */}
        {isFaculty && (
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
              onClick={onAddAssignment}
            >
              <FaPlus className="me-2" style={{ verticalAlign: "middle" }} />
              Assignment
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

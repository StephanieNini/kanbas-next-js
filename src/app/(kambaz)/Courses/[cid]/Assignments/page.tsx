"use client";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentsList from "./AssignmentsList";

export default function AssignmentsPage() {
  return (
    <div id="wd-assignments-page" className="p-2">
      <AssignmentsControls />
      <AssignmentsList />
    </div>
  );
}

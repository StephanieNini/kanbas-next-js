/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "next/navigation";
import * as db from "../../../../Database"; 

export default function PeopleTable() {
  const { cid } = useParams();
  const { users, enrollments } = db;

  // 过滤当前课程的用户
  const courseUsers = users.filter((usr: any) =>
    enrollments.some(
      (enrollment: any) =>
        enrollment.user === usr._id && enrollment.course === cid
    )
  );

  return (
    <div id="wd-people-table" className="p-3">
      <h4 className="mb-3">People</h4>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {courseUsers.map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap d-flex align-items-center">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{user.firstName}</span>&nbsp;
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

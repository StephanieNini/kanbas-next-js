/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "./Details";

export default function PeopleTable({ users = [], fetchUsers }: { users?: any[]; fetchUsers: () => void }) {
  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string | null>(null);

  return (
    <div id="wd-people-table">
      {showDetails && (
        <PeopleDetails
          uid={showUserId}
          onClose={() => {
            setShowDetails(false);
            fetchUsers();
          }}
        />
      )}

      <table className="table table-striped">
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="text-nowrap">
                <span
                  onClick={() => {
                    setShowDetails(true);
                    setShowUserId(user._id);
                  }}
                  className="text-decoration-none"
                >
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  {user.firstName} {user.lastName}
                </span>
              </td>

              <td>{user.role}</td>
              <td>{user.email}</td>
              <td>{user.section}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

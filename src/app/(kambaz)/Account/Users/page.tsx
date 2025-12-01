/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import PeopleTable from "../../Courses/[cid]/People/Table";
import * as client from "../client";

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");

  const fetchUsers = async () => {
    const list = await client.findAllUsers();
    setUsers(list);
  };

  // Search by partial name
  const filterUsersByName = async (n: string) => {
    setName(n);
    if (n) {
      setUsers(await client.findUsersByPartialName(n));
    } else {
      fetchUsers();
    }
  };

  // Filter by role
  const filterUsersByRole = async (r: string) => {
    setRole(r);
    if (r) {
      setUsers(await client.findUsersByRole(r));
    } else {
      fetchUsers();
    }
  };

  // Create User
  const createUser = async () => {
    const newUser = await client.createUser({
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      email: `email${users.length + 1}@neu.edu`,
      section: "S101",
      role: "STUDENT",
    });

    setUsers([...users, newUser]);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-3">
      <h3>Users</h3>

      <button className="btn btn-danger float-end mb-3" onClick={createUser}>
        <FaPlus className="me-2" />
        User
      </button>

      <FormControl
        placeholder="Search people"
        className="w-25 mb-2"
        onChange={(e) => filterUsersByName(e.target.value)}
      />

      <select
        value={role}
        onChange={(e) => filterUsersByRole(e.target.value)}
        className="form-select w-25 mb-3"
      >
        <option value="">All Roles</option>
        <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Admins</option>
      </select>

      <PeopleTable users={users} fetchUsers={fetchUsers} />
    </div>
  );
}

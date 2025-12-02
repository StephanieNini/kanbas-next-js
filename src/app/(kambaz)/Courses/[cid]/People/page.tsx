/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import * as client from "../../client"; // 路径是从 Courses 目录往上两层
import PeopleTable from "./Table";

export default function PeoplePage() {
  const { cid } = useParams(); // 当前课程的 ID
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    if (!cid) return;
    const data = await client.findUsersForCourse(cid as string);
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, [cid]);

  return (
    <div className="container mt-3">
      <h3>People</h3>
      <PeopleTable users={users} fetchUsers={fetchUsers} />
    </div>
  );
}

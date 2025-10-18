"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ course }: { course: { name: string } }) {
  const pathname = usePathname();
  const currentPage = pathname.split("/").pop();

  return (
    <span style={{ color: "#dc3545", fontWeight: "500", fontSize: "20px" }}>
      {course?.name} &gt; {currentPage}
    </span>
  );
}

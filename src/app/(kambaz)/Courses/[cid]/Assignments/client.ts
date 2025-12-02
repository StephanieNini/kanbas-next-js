/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

export const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export const COURSES_API = `${HTTP_SERVER}/api/courses`;
export const ASSIGNMENTS_API = `${HTTP_SERVER}/api/assignments`;

export const findAssignmentsForCourse = async (courseId: string) => {
  const res = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/assignments`
  );
  return res.data;
};

export const fetchAssignmentById = async (assignmentId: string) => {
  const res = await axiosWithCredentials.get(
    `${ASSIGNMENTS_API}/${assignmentId}`
  );
  return res.data;
};

export const createAssignment = async (courseId: string, assignment: any) => {
  const res = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignment
  );
  return res.data;
};

export const updateAssignment = async (assignment: any) => {
  const res = await axiosWithCredentials.put(
    `${ASSIGNMENTS_API}/${assignment._id}`,
    assignment
  );
  return res.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const res = await axiosWithCredentials.delete(
    `${ASSIGNMENTS_API}/${assignmentId}`
  );
  return res.data;
};

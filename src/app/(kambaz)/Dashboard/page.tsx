"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */

import { useDispatch, useSelector } from "react-redux";
import {
  setCourses,
} from "../Courses/[cid]/reducer";
import { RootState } from "../store";
import * as client from "../Courses/client";

import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Button,
  Row,
  Col,
  FormControl,
} from "react-bootstrap";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const dispatch = useDispatch();

  const courses = useSelector(
    (state: RootState) => state.coursesReducer.courses
  );

  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  ) as any;

  // 新课程输入框
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  // ======== 从 server 获取当前用户课程 ========
  const fetchCourses = async () => {
    if (!currentUser) return;
    try {
      const myCourses = await client.findMyCourses(); // only enrolled courses
      dispatch(setCourses(myCourses));
    } catch (err) {
      console.error("Error loading courses:", err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  // =================================================
  // ========== 新增课程（server + redux） ============
  // =================================================
  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
  };

  // =================================================
  // ========== 删除课程（server + redux） ============
  // =================================================
  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((c: any) => c._id !== courseId)));
  };

  // =================================================
  // ========== 更新课程（server + redux） ============
  // =================================================
  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(
      setCourses(
        courses.map((c: any) =>
          c._id === course._id ? course : c
        )
      )
    );
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {/* ===================== New Course 区域 ===================== */}
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={onAddNewCourse}
        >
          Add
        </button>

        <button
          onClick={onUpdateCourse}
          className="btn btn-warning float-end me-2"
          id="wd-update-course-click"
        >
          Update
        </button>
      </h5>
      <br />

      {/* 输入框 */}
      <FormControl
        value={course.name}
        className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <FormControl
        as="textarea"
        value={course.description}
        rows={3}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />

      <hr />

      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>

      <hr />

      {/* ======================== Courses 列表 ======================== */}
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((c: any) => (
            <Col
              key={c._id}
              className="wd-dashboard-course"
              style={{ width: "300px" }}
            >
              <Card>
                <CardImg
                  src={c.image || "/images/reactjs.jpg"}
                  variant="top"
                  width="100%"
                  height={160}
                />
                <CardBody>
                  <Link
                    href={`/Courses/${c._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {c.name}
                    </CardTitle>
                  </Link>

                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    {c.description}
                  </CardText>

                  <Button variant="primary" href={`/Courses/${c._id}/Home`}>
                    Go
                  </Button>

                  {/* Edit */}
                  <button
                    className="btn btn-warning float-end me-2"
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      setCourse(c);
                    }}
                  >
                    Edit
                  </button>

                  {/* Delete */}
                  <button
                    className="btn btn-danger float-end"
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      onDeleteCourse(c._id);
                    }}
                  >
                    Delete
                  </button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

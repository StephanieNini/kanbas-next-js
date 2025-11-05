"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, setCourses } from "../Courses/[cid]/reducer";
import * as db from "../Database";
import { RootState } from "../store";

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
import { useState } from "react";

export default function Dashboard() {
  const dispatch = useDispatch();
  const courses = useSelector((state: RootState) => state.coursesReducer.courses);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });
  
  const { currentUser } = useSelector((state: RootState) => state.accountReducer) as any;
  const { enrollments } = db;


  // === 按钮操作 ===
  const handleAddCourse = () => {
    dispatch(addNewCourse(course));
  };

  const handleUpdateCourse = () => {
    dispatch(updateCourse(course));
  };

  const handleDeleteCourse = (courseId: string, event: any) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(deleteCourse(courseId));
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={handleAddCourse}
        >
          Add
        </button>
        <button
          className="btn btn-warning float-end me-2"
          id="wd-update-course-click"
          onClick={handleUpdateCourse}
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

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
{courses
  .filter((course: any) =>
    enrollments.some(
  (enrollment: any) =>
    enrollment.user === currentUser?._id &&
    enrollment.course === course._id
)
  )
  .map((c: any) => (
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <CardImg
                  src={c.image || "/images/reactjs.jpg"}
                  variant="top"
                  width="100%"
                  height={160}
                />
                <CardBody>
                  {/* 课程标题加链接 */}
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

                  {/* Go 按钮 */}
                  <Button variant="primary" href={`/Courses/${c._id}/Home`}>
                    Go
                  </Button>

                  {/* Edit 按钮 */}
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

                  {/* Delete 按钮 */}
                  <button
                    className="btn btn-danger float-end"
                    onClick={(event) => handleDeleteCourse(c._id, event)}
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

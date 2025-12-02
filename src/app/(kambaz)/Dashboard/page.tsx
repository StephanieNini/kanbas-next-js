/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */

import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../Courses/[cid]/reducer";
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

  // 保留你的默认课程输入模板
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  // =========================
  // Enrollment states
  // =========================
  const [showAll, setShowAll] = useState(false);
  const [allCourses, setAllCourses] = useState<any[]>([]);

  // 获取已 Enroll 课程
  const fetchMyCourses = async () => {
    if (!currentUser) return;
    const my = await client.findMyCourses();
    dispatch(setCourses(my));
  };

  // 获取全部课程
  const fetchAllCourses = async () => {
    const ac = await client.fetchAllCourses();
    setAllCourses(ac);
  };

  useEffect(() => {
    if (!currentUser) return;
    fetchMyCourses();
    fetchAllCourses();
  }, [currentUser]);

  // Add
  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
    fetchAllCourses();
  };

  // Delete
  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((c: any) => c._id !== courseId)));
    fetchAllCourses();
  };

  // Update
  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(
      setCourses(
        courses.map((c: any) => (c._id === course._id ? course : c))
      )
    );
    fetchAllCourses();
  };

  // Enroll / Unenroll
  const handleEnroll = async (cid: string) => {
    await client.enrollIntoCourse(currentUser._id, cid);
    fetchMyCourses(); // 更新我的课程
  };

  const handleUnenroll = async (cid: string) => {
    await client.unenrollFromCourse(currentUser._id, cid);
    fetchMyCourses();
  };

  // 当前显示哪些课程
  const coursesToShow = showAll ? allCourses : courses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard

        {/* ===== NEW: My Courses 按钮 ===== */}
        <button
          className="btn btn-primary float-end ms-2"
          onClick={() => setShowAll(false)}
        >
          My Courses
        </button>

        {/* ===== NEW: All Courses 按钮 ===== */}
        <button
          className="btn btn-success float-end"
          onClick={() => setShowAll(true)}
        >
          All Courses
        </button>
      </h1>

      <hr />

      {/* New Course Section */}
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

      <FormControl
        value={course.name}
        className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <FormControl
        as="textarea"
        value={course.description}
        rows={3}
        onChange={(e) =>
          setCourse({ ...course, description: e.target.value })
        }
      />

      <hr />

      <h2 id="wd-dashboard-published">
        {showAll
          ? `All Courses (${coursesToShow.length})`
          : `Published Courses (${coursesToShow.length})`}
      </h2>

      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {coursesToShow.map((c: any) => {
            const enrolled = courses.some((mc: any) => mc._id === c._id);

            return (
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

                    {/* ========== NEW: Only show Enroll buttons in All Courses mode ========== */}
                    {showAll && (
                      <>
                        {!enrolled && (
                          <button
                            className="btn btn-success float-end"
                            onClick={() => handleEnroll(c._id)}
                          >
                            Enroll
                          </button>
                        )}

                        {enrolled && (
                          <button
                            className="btn btn-danger float-end"
                            onClick={() => handleUnenroll(c._id)}
                          >
                            Unenroll
                          </button>
                        )}
                      </>
                    )}
                    {/* ==================================================================== */}

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
            );
          })}
        </Row>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { Row, Col, Card, Button } from "react-bootstrap";

type Course = {
  id: string;
  title: string;
  desc: string;
  img: string;
};

const COURSES: Course[] = [
  { id: "1234", title: "CS1234 React JS", desc: "Full stack software developer", img: "/images/reactjs.jpg" },
  { id: "2345", title: "CS2345 Algorithms", desc: "Divide & Conquer, Greedy, DP", img: "/images/reactjs.jpg" },
  { id: "3456", title: "CS3456 Databases", desc: "SQL, ER, Normalization", img: "/images/reactjs.jpg" },
  { id: "4567", title: "CS4567 Web Dev", desc: "HTML, CSS, JS, React, Next.js", img: "/images/reactjs.jpg" },
  { id: "5678", title: "CS5678 Systems", desc: "Processes, Threads, Memory", img: "/images/reactjs.jpg" },
  { id: "6789", title: "CS6789 Networks", desc: "TCP/IP, HTTP, Routing", img: "/images/reactjs.jpg" },
  { id: "7890", title: "CS7890 AI", desc: "Search, ML, Probabilistic Models", img: "/images/reactjs.jpg" },
];

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({COURSES.length})</h2>
      <hr />

      {/* 让左侧导航与第一张卡片之间留白 32px；卡片之间的行/列间距也是 32px */}
      <div id="wd-dashboard-courses" style={{ paddingLeft: 32 }}>
        <Row
          xs={1}
          md={5}
          className="g-0"
          style={{ rowGap: 32, columnGap: 32 }}
        >
          {COURSES.map((c) => (
            <Col
              key={c.id}
              className="wd-dashboard-course"
              style={{ width: 300 }} // 固定宽度 ~300px，窗口变窄时自动换行
            >
              {/* 整张卡片都可点击，跳到该课程 Home 页面 */}
              <Link
                href={`/Courses/${c.id}/Home`}
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card>
                  <Card.Img variant="top" src={c.img} width="100%" height={160} />
                  <Card.Body>
                    <Card.Title
                      className="wd-dashboard-course-title text-truncate"
                      title={c.title}
                    >
                      {c.title}
                    </Card.Title>

                    <Card.Text
                      className="wd-dashboard-course-description"
                      style={{
                        height: 100,
                        overflow: "hidden",
                      }}
                      title={c.desc}
                    >
                      {c.desc}
                    </Card.Text>

                    <Button variant="primary">Go</Button>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

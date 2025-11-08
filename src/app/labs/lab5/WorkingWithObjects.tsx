"use client";
import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithObjects() {

const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`

const [moduleData, setModuleData] = useState({
    id: "M101",
    name: "Web Development",
    description: "Learning NodeJS and React",
    course: "CS5610",
  });

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
        
        <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title </a>
      <FormControl className="w-75" id="wd-assignment-title"
        defaultValue={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>
          <hr />

        <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>

        <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr/>
    
     {/* NEW MODULE UI */}
      <h4>Module</h4>
      <a className="btn btn-primary mb-2"
         href={`${HTTP_SERVER}/lab5/module`}>
        Get Module
      </a>
      <a className="btn btn-primary mb-2 float-end"
         href={`${HTTP_SERVER}/lab5/module/name`}>
        Get Module Name
      </a>

      <h5>Edit Module Name</h5>
      <a className="btn btn-primary float-end"
         href={`${HTTP_SERVER}/lab5/module/name/${moduleData.name}`}>
        Update Name
      </a>
      <FormControl className="w-75 mb-3"
         value={moduleData.name}
         onChange={(e) => setModuleData({ ...moduleData, name: e.target.value })}/>

      <h5>Edit Module Description</h5>
      <a className="btn btn-primary float-end"
         href={`${HTTP_SERVER}/lab5/module/description/${moduleData.description}`}>
        Update Description
      </a>
      <FormControl className="w-75 mb-3"
         value={moduleData.description}
         onChange={(e) => setModuleData({ ...moduleData, description: e.target.value })}/>
    </div>
);
}

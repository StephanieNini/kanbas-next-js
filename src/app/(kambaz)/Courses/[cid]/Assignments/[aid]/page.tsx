export default function AssignmentEditor() {
  return (

    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>

{/*Points Input*/}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>

{/*Due Date Picker*/}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due">Due Date</label>
          </td>
          <td>
            <input id="wd-due" value="2024-12-31" type="date" />
          </td>
        </tr>

{/*Status Dropdown*/}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-status">Status</label>
          </td>
          <td>
            <select id="wd-status" value="PUBLISHED">
              <option value="DRAFT">Draft</option>
              <option value="PUBLISHED">Published</option>
              <option value="ARCHIVED">Archived</option>
            </select>
          </td>
        </tr>

{/*Assignment Group Dropdown*/}
      <tr>
        <td align="right" valign="top">
          <label htmlFor="wd-assignment-group">Assignment Group</label>
      </td>
      <td>
        <select id="wd-assignment-group">
          <option value="ASSIGNMENTS">Assignments</option>
          <option value="QUIZZES">Quizzes</option>
          <option value="EXAMS">Exams</option>
          <option value="PROJECTS">Projects</option>
        </select>
      </td>
      </tr>

{/*Display Grade Dropdown*/}
      <tr>
        <td align="right" valign="top">
          <label htmlFor="wd-display-grade">Display Grade as</label>
        </td>
        <td>
          <select id="wd-display-grade">
            <option value="PERCENTAGE">Percentage</option>
            <option value="POINTS">Points</option>
            <option value="COMPLETE/INCOMPLETE">Complete/Incomplete</option>
            <option value="LETTER">Letter Grade</option>
          </select>
        </td>
      </tr>

{/*Submission Type Dropdown*/}
      <tr>
        <td align="right" valign="top">
          <label htmlFor="wd-submission-type">Submission Type</label>
        </td>
        <td>
          <select id="wd-submission-type">
            <option value="ONLINE">Online</option>
            <option value="ON_PAPER">On Paper</option>
            <option value="NO_SUBMISSION">No Submission</option>
          </select>
        </td>
      </tr>

{/*Online Entry Options Checkboxes*/}
      <tr>
        <td align="right" valign="top">
          <label>Online Entry Options</label>
        </td>
        <td>
          <input type="checkbox" id="wd-text-entry" /> <label htmlFor="wd-text-entry">Text Entry</label><br />
          <input type="checkbox" id="wd-website-url" /> <label htmlFor="wd-website-url">Website URL</label><br />
          <input type="checkbox" id="wd-media-recordings" /> <label htmlFor="wd-media-recordings">Media Recordings</label><br />
          <input type="checkbox" id="wd-student-annotation" /> <label htmlFor="wd-student-annotation">Student Annotation</label><br />
          <input type="checkbox" id="wd-file-uploads" /> <label htmlFor="wd-file-uploads">File Uploads</label>
        </td>
      </tr>

{/*Assign To Input*/}
      <tr>
        <td align="right" valign="top">
          <label htmlFor="wd-assign-to">Assign to</label>
        </td>
        <td>
          <input id="wd-assign-to" value="Everyone" />
        </td>
      </tr>

{/*Available From and Until */}
      <tr>
        <td align="right" valign="top">
          <label htmlFor="wd-available-from">Available from</label>
        </td>
        <td>
          <input id="wd-available-from" type="date" value="2024-10-01" />
        </td>
      </tr>

      <tr>
        <td align="right" valign="top">
          <label htmlFor="wd-until">Until</label>
        </td>
        <td>
          <input id="wd-until" type="date" value="2025-01-01" />
        </td>
      </tr>



      </table>
    </div>
);}

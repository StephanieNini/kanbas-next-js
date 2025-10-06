"use client";
import Modules from '../Modules/page';

import CourseStatus from './Status';

export default function Home() {
  return (
    <div id="wd-home" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* TITLE */}
      <h2 style={{ marginBottom: '10px' }}>CS5610 Web Development</h2>

      {/* TOP BUTTON GROUP */}
      <div style={{ marginBottom: '20px' }}>
        <button style={buttonStyle}>View Course Stream</button>
        <button style={buttonStyle}>New Announcement</button>
        <button style={buttonStyle}>New Assignment</button>
      </div>

      {/* LAYOUT */}
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            {/* LEFT MODULES */}
            <td valign="top" width="70%">
              <div style={boxStyle}>
                <Modules />
              </div>
            </td>

            {/* RIGHT COURSE STATUS */}
            <td valign="top" className="hide-at-3-4">
              <div style={boxStyle}>
                <CourseStatus />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const buttonStyle = {
  marginRight: '10px',
  padding: '8px 16px',
  backgroundColor: '#1d72b8',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const boxStyle = {
  border: '1px solid #ccc',
  padding: '15px',
  borderRadius: '6px',
  backgroundColor: '#f9f9f9',
};

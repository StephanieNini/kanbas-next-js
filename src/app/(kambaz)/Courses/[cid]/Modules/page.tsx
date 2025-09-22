export default function Modules() {
  return (
    <div id="wd-modules">
      {/*Collapse、View Progress、Publish All、+Module*/}
      <div>
        <button>Collapse All</button>
        <button>View Progress</button>
        <button>Publish All</button>
        <button>+ Module</button>
      </div>

      <ul>
        {/* Module 1 */}
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">Full Stack Developer - Chapter 1</span>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">Full Stack Developer - Chapter 2: Creating User Interfaces With HTML</span>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">Slides</span>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">Introduction to Web Development</span>
            </li>
          </ul>
        </li>

        {/* Module 2 */}
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">HTML Basics</span>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">More HTML Elements</span>
            </li>
          </ul>
        </li>

        {/* Module 3 */}
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">CSS Introduction</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

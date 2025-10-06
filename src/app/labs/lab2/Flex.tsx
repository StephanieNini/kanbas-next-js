import "./index.css";

export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>

      {/* 1) 基本的横向排列 */}
      <div className="wd-flex-row-container" style={{ marginBottom: 12 }}>
        <div className="wd-bg-color-yellow">Column 1</div>
        <div className="wd-bg-color-blue">Column 2</div>
        <div className="wd-bg-color-red">Column 3</div>
      </div>

      {/* 2) 让最后一列扩展填满剩余空间（flex-grow: 1） */}
      <div className="wd-flex-row-container" style={{ marginBottom: 12 }}>
        <div className="wd-bg-color-yellow">Column 1</div>
        <div className="wd-bg-color-blue">Column 2</div>
        <div className="wd-bg-color-red wd-flex-grow-1">Column 3</div>
      </div>

      {/* 3) 第一列固定 75px，最后一列扩展 */}
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-75px">Column 1</div>
        <div className="wd-bg-color-blue">Column 2</div>
        <div className="wd-bg-color-red wd-flex-grow-1">Column 3</div>
      </div>
    </div>
  );
}

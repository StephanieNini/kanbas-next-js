import { FaCheckCircle, FaCircle } from "react-icons/fa";

export default function GreenCheckmark() {
  return (
    <span
      className="d-inline-flex align-items-center justify-content-center me-1"
      style={{
        position: "relative",
        width: "1em",
        height: "1em",
        verticalAlign: "middle",
      }}
    >
      {/* 白底圆圈 */}
      <FaCircle
        className="text-white"
        style={{
          position: "absolute",
          fontSize: "1.05em",
          top: "0",
          left: "0",
        }}
      />
      {/* 绿色对勾 */}
      <FaCheckCircle
        className="text-success"
        style={{
          position: "absolute",
          fontSize: "1em",
          top: "0",
          left: "0",
        }}
      />
    </span>
  );
}

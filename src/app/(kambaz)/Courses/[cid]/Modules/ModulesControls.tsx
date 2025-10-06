"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap mb-3">
    {/* Add Module 按钮 */}
    <Button
      variant="danger"
      size="sm"
      className="me-1 float-end d-inline-flex align-items-center"
      id="wd-add-module-btn"
    >
      <FaPlus
        className="me-2"
        style={{
          verticalAlign: "middle",
          marginBottom: "2px", // 微调与文字对齐
    }}
  />
  Module
</Button>

      {/* Publish All 下拉菜单 */}
      <Dropdown className="float-end me-2">
        <DropdownToggle variant="secondary" id="wd-publish-all-btn" className="btn-sm">
          <GreenCheckmark /> Publish All
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem id="wd-publish-all">
            <GreenCheckmark /> Publish All
          </DropdownItem>
          <DropdownItem id="wd-publish-all-modules-and-items">
            <GreenCheckmark /> Publish all modules and items
          </DropdownItem>
          <DropdownItem id="wd-publish-modules-only">
            <GreenCheckmark /> Publish modules only
          </DropdownItem>
          <DropdownItem id="wd-unpublish-all-modules-and-items">
            Unpublish all modules and items
          </DropdownItem>
          <DropdownItem id="wd-unpublish-modules-only">
            Unpublish modules only
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      {/* View Progress / Collapse All 按钮 */}
      <div className="float-start">
        <Button
          id="wd-view-progress"
          variant="secondary"
          className="btn-sm"
        >
          View Progress
        </Button>
        <Button
          id="wd-collapse-all"
          variant="secondary"
          className="btn-sm ms-2"
        >
          Collapse All
        </Button>
      </div>

      <div style={{ clear: "both" }}></div>
    </div>
  );
}

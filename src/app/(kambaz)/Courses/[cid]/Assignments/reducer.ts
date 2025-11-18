"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

interface Assignment {
  _id: string;
  // Add other properties of an assignment here
}

const initialState = {
  assignments: [] as Assignment[], // 不再使用 Database，本地为空，靠服务器加载
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    // 覆盖全部 assignments
    setAssignments: (state, { payload }) => {
      state.assignments = payload;
    },

    // 添加新作业（POST 返回后的 assignment，不生成 uuid）
    addAssignment: (state, { payload }) => {
      state.assignments.push(payload);
    },

    // 删除本地 Redux（DELETE 完成后）
    deleteAssignmentLocal: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId
      );
    },

    // 更新本地 Redux（PUT 完成后）
    updateAssignmentLocal: (state, { payload }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === payload._id ? payload : a
      );
    },
  },
});

export const {
  setAssignments,
  addAssignment,
  deleteAssignmentLocal,
  updateAssignmentLocal,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;

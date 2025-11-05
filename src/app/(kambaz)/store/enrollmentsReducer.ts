"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database"; // 初始数据库

const initialState = {
  enrollments: enrollments, // [{user, course}]
  showAll: false, // dashboard 是否显示全部课程
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    toggleShowAll: (state) => {
      state.showAll = !state.showAll;
    },
    enrollCourse: (state, { payload: { user, course } }) => {
      state.enrollments.push({
          user, course,
          _id: ""
      });
    },
    unenrollCourse: (state, { payload: { user, course } }) => {
      state.enrollments = state.enrollments.filter(
        (e: any) => !(e.user === user && e.course === course)
      );
    },
  },
});

export const { toggleShowAll, enrollCourse, unenrollCourse } =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;

import React, { useState } from "react";
import useCourseStore from "../app/courseStore";

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [courseTitle, setCourseTitle] = useState("");
  console.log("CourseForm rendered");

  const handleCourseSubmit = () => {
    if (!courseTitle) return alert("Please add a course title");
    addCourse({
      id: Math.ceil(Math.random() * 1000000),
      title: courseTitle,
    });
    setCourseTitle("");
  };

  return (
    <div className="form-container">
      <input
        value={courseTitle}
        className="form-input"
        onChange={(e) => {
          setCourseTitle(e.target.value);
        }}
      />
      <button
        className="form-submit-btn"
        onClick={() => {
          handleCourseSubmit();
        }}
      >
        Add Course
      </button>
    </div>
  );
};

export default CourseForm;

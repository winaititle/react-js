import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const AllCourse = ({ course }) => {
  return (
    <div className="course-card">
      <div className="course-image">
        <img src={course.imageURL} alt={course.title} />
      </div>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <Link to={`/courses/${course.id}`}>รายละเอียด</Link>  <Link to={`/courses/${course.id}`}>แบบฝึกหัด</Link>
      
      
    </div>
  );
};

export default AllCourse;
import React from 'react';
import CourseCard from '../components/CourseCard';
import Navbar from '../components/Navbar'



const CourseList = () => {
  const courses = [
    {
      id: 1,
      title: 'บทที่1',
      description: 'Learn the basics of programming.',
      imageURL: 'https://th.bing.com/th/id/OIP.7dbrfAdTIKG3qYKg-b2mCgHaEc?pid=ImgDet&rs=1',
      with :150,
      
    },
    {
      id: 2,
      title: 'วิชา',
      description: 'Build modern web applications.',
      imageURL: 'https://www.aaup.edu/sites/default/files/What-is-eLearning.jpg'
    },
    {
      id: 3,
      title: 'วิชา',
      description: 'Build modern web applications.',
      imageURL: 'https://www.99techpost.com/wp-content/uploads/2018/10/e-Learning-1024x723.jpg'
    },
    {
      id: 4,
      title: 'วิชา',
      description: 'Build modern web applications.',
      imageURL: 'https://th.bing.com/th/id/OIP.EMA7vc_jex5R-1xQARkJYQHaEK?pid=ImgDet&rs=1'
    },
    {
      id: 5,
      title: 'วิชา',
      description: 'Build modern web applications.',
      imageURL: 'https://noobie.com/wp-content/uploads/2021/08/e-learning.jpg'
    },
    {
      id: 6,
      title: 'วิชา',
      description: 'Build modern web applications.',
      imageURL: 'https://i0.wp.com/boletines.guanajuato.gob.mx/wp-content/uploads/2020/03/iStock-985024622.jpg?w=3000&ssl=1'
    },
    // เพิ่มคอร์สเรียนเพิ่มเติมตามต้องการ
  ];

  return (
    <>
    <Navbar></Navbar>
    <div>
      <div className="course-grid">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
    </>
  );
};

export default CourseList;
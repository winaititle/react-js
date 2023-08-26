import React from "react";
import CourseCard from "../components/AllCourse";
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import { CssBaseline } from "@mui/material";

const CourseList = () => {
  const courses = [
    {
      id: 1,
      title: "บทที่ 11",
      description: "ความรู้เบื้องต้นเกี่ยวกับคอมพิวเตอร์",
      imageURL:
        "https://www.britishcouncil.or.th/sites/default/files/styles/bc-landscape-630x354/public/10-sentences-and-phrases-to-begin-business-email.png?itok=VEctoU3W",
      with: 150,
    },
    {
      id: 2,
      title: "บทที่ 2",
      description: "องค์ประกอบของระบบคอมพิวเตอร์",
      imageURL:
        "https://www.fau.edu/oit/services/images/fixing.jpg",
    },
    {
      id: 3,
      title: "บทที่ 3",
      description: "คอมพิวเตอร์ กับ ระบบเลขฐาน",
      imageURL:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hdGh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      title: "บทที่ 4",
      description: "ฮาร์ดแวร์และอุปกรณ์ที่เกี่ยวข้อง",

      imageURL:
        "https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 5,
      title: "บทที่ 5",
      description: "ซอฟต์แวร์และภาษาคอมพิวเตอร์",
      imageURL: "https://media.istockphoto.com/id/1445262527/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A3%E0%B8%AB%E0%B8%B1%E0%B8%AA%E0%B9%83%E0%B8%99%E0%B9%81%E0%B8%A5%E0%B9%87%E0%B8%9B%E0%B8%97%E0%B9%87%E0%B8%AD%E0%B8%9B-%E0%B9%81%E0%B8%99%E0%B8%A7%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B8%8B%E0%B8%AD%E0%B8%9F%E0%B8%95%E0%B9%8C%E0%B9%81%E0%B8%A7%E0%B8%A3%E0%B9%8C%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1.jpg?s=612x612&w=0&k=20&c=hZgh0BWZVqhxb3YtfcA4YYrsap2_sPElSXeBejkWpPI=",
    },
    {
      id: 6,
      title: "บทที่ 6",
      description: "ระบบเครือข่ายคอมพิวเตอร์",
      imageURL:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1934&q=80",
    },
    {
      id: 7,
      title: "บทที่ 7",
      description: "อินเทอร์เน็ตและบริการออนไลน์",
      imageURL:
        "https://media.istockphoto.com/id/1414916304/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%81%E0%B8%99%E0%B8%A7%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%9B%E0%B9%89%E0%B8%B2%E0%B8%AB%E0%B8%A1%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%A2%E0%B8%B7%E0%B8%99-%E0%B8%88%E0%B8%B1%E0%B8%9A%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B8%82%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B9%82%E0%B8%A5%E0%B8%81%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B9%84%E0%B8%AD%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B8%AA%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B9%81%E0%B8%A7%E0%B8%94%E0%B8%A5.jpg?s=612x612&w=0&k=20&c=H4i1TQ8kzP051Il05ci8leOhStF_GaKzYNVQDcmicyw=",
    },
    
    // เพิ่มคอร์สเรียนเพิ่มเติมตามต้องการ
  ];

  return (
    <>
    <Navbar />
      <CssBaseline />
      <div className="app">
        <SideBar />
        <main className="content">
          <div className="content_body">
            <h2>รายวิชา: FUNDAMANTAL</h2>
            <div className="course-grid">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            <h2>
              <td></td>
            </h2>
          </div>
        </main>
      </div>
    </>
  );
};

export default CourseList;
import React from 'react';
import Quiz from '../components/Quiz'
import Navbar from '../components/Navbar'
import SideBar from '../components/Sidebar';
import { CssBaseline } from '@mui/material';
const quizData = [
  {
    question: 'KidBright คืออะไร?',
    options: [
      'เครื่องมือในการวาดรูป',
      'ภาษาโปรแกรม',
      'แพลตฟอร์มเสริมการเรียนรู้สำหรับเด็ก',
      'หนังสือเรียน'
    ],
    correctAnswer: 'แพลตฟอร์มเสริมการเรียนรู้สำหรับเด็ก'
  },
  {
    question: 'บอร์ด KidBright มีอะไรบนบอร์ด?',
    options: [
      'หลอด LED และสวิตช์',
      'คีย์บอร์ดและเมาส์',
      'หน้าจอแสดงผลสี',
      'ตู้เสียงและไมค์'
    ],
    correctAnswer: 'หลอด LED และสวิตช์'
  },
  {
    question: 'LED ย่อมาจากคำว่าอะไร?',
    options: [
      'Long Electronic Device',
      'Light Emitting Diode',
      'Luminous Electric Device',
      'Low Energy Display'
    ],
    correctAnswer: 'Light Emitting Diode'
  },
  {
    question: 'คำสั่งในการเปิดหรือปิด LED คืออะไร?',
    options: [
      'ON / OFF',
      'OPEN / CLOSE',
      'START / STOP',
      'UP / DOWN'
    ],
    correctAnswer: 'ON / OFF'
  },
  {
    question: 'หากต้องการให้ LED ส่องแสงเป็นสีแดง ควรใช้สีอะไร?',
    options: [
      'สีแดง',
      'สีเขียว',
      'สีน้ำเงิน',
      'สีเหลือง'
    ],
    correctAnswer: 'สีแดง'
  },
  {
    question: 'ความหมายของ "ควบคุม" ในการโปรแกรมคืออะไร?',
    options: [
      'กำหนดการ',
      'เชื่อมต่อ',
      'เปิดใช้งาน',
      'ทำงานร่วมกัน'
    ],
    correctAnswer: 'เปิดใช้งาน'
  },
  {
    question: 'การเขียนโปรแกรมคืออะไร?',
    options: [
      'การวาดรูปภาพ',
      'การเพิ่มสีให้กับ LED',
      'การสร้างเกม',
      'การเขียนคำสั่งให้เครื่องคอมพิวเตอร์ทำงานตามที่ต้องการ'
    ],
    correctAnswer: 'การเขียนคำสั่งให้เครื่องคอมพิวเตอร์ทำงานตามที่ต้องการ'
  },
  {
    question: 'หากต้องการให้โปรแกรมทำงานซ้ำ ๆ กันหลาย ๆ ครั้ง ควรใช้คำสั่งอะไร?',
    options: [
      'REPEAT',
      'LOOP',
      'DO',
      'FOR'
    ],
    correctAnswer: 'REPEAT'
  },
  {
    question: 'การเชื่อมต่อสวิตช์กับบอร์ด KidBright จะใช้พอร์ตใด?',
    options: [
      'พอร์ต A0',
      'พอร์ต D2',
      'พอร์ต GND',
      'พอร์ต VCC'
    ],
    correctAnswer: 'พอร์ต D2'
  },
  {
    question: 'การใช้โปรแกรมที่ทำเสร็จแล้วใน KidBright จะทำอะไร?',
    options: [
      'เขียนใหม่ทั้งหมด',
      'ทำให้บอร์ดเสีย',
      'รีเซ็ตการทำงาน',
      'ทำให้บอร์ดทำงานตามโปรแกรมที่เขียนไว้'
    ],
    correctAnswer: 'ทำให้บอร์ดทำงานตามโปรแกรมที่เขียนไว้'
  },
];

const AssessmentPage = () => {
  return (
    <>
      <Navbar />
      <CssBaseline />
      <div className="app">
        <SideBar />
        <main className="content">
          <div className="content_body">
            <h1 >
              <center>แบบทดสอบ</center>
            </h1>
            <Quiz questions={quizData} />

            <h2>
              <td></td>
            </h2>
          </div>
        </main>
      </div>
    </>


  );
};

export default AssessmentPage;
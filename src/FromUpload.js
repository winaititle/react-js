import React, { Component } from 'react';
import './App.css'; // Import CSS file
import Navbar from './components/Navbar'; // Import Navbar Componentmport Sidebar Component

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      name: '',
      studentId: '',
    };
  }

  handleFileChange = (e) => {
    this.setState({
      selectedFile: e.target.files[0],
    });
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleStudentIdChange = (e) => {
    this.setState({
      studentId: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // เพิ่มโค้ดที่ต้องการในการส่งข้อมูลไปยังเซิร์ฟเวอร์ที่จัดเก็บไฟล์รูปภาพและข้อมูลนักศึกษา
  };

  render() {
    return (
      <> 
      <Navbar />
      
      <form onSubmit={this.handleSubmit}>
                <h1>ส่งแบบฝึกหัด</h1>
                <label htmlFor="imageFile">เลือกรูปภาพ:</label>
                
                <input
                  type="file"
                  id="imageFile"
                  accept="image/*"
                  onChange={this.handleFileChange}
                />
                <label htmlFor="name">ชื่อ:</label>
                <input
                  type="text"
                  id="name"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
                <label htmlFor="studentId">รหัสนักศึกษา:</label>
                <input
                  type="text"
                  id="studentId"
                  value={this.state.studentId}
                  onChange={this.handleStudentIdChange}
                />
                <button type="submit">ส่งข้อมูล</button>
              </form>
          
            <div className="image-container">
              {this.state.selectedFile && (
                <div className="selected-image">
                  <h2>รูปที่เลือก:</h2>
                  <img
                    src={URL.createObjectURL(this.state.selectedFile)}
                    alt="รูปที่เลือก"
                    width="300"
                  />
                  
                </div>
                
              )}
            </div>
      
             
        
      </>
    );
  }
}

export default App;
import { AppBar } from '@mui/material';
import React, { useState } from 'react';
import Navbar from "../components/Navbar";
function AvatarUploader({ onUpdate }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleUpload = () => {
    // Simulate API call and updating user profile
    // Replace this with your actual API integration
    setTimeout(() => {
      onUpdate(selectedImage);
    }, 10);
  };
  const person = {
    name: 'GOJO',
    theme: {

      color: 'black'
    }
  };
  return (
    <>
      <AppBar>
        <Navbar>
        </Navbar>
      </AppBar>
      <div>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={"https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/06/gojo2.jpg"} alt="Selected Avatar"
        width={90}
        >
        </img>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {selectedImage && <button onClick={handleUpload}>Upload</button>}
        <ul>
        <li>test@gmail.com</li>
        <li>6133211*****</li>
        <li>090******</li>
      </ul>
      </div>
    </>
  );
}

function ProfilePage() {
  const [avatar, setAvatar] = useState(null);

  const handleAvatarUpdate = (newAvatar) => {
    setAvatar(newAvatar);
  };

  return (
    <div>
      <h1>Profile Page</h1>
      {avatar && <img src={avatar}width={250} height={350}alt="Profile Avatar" />}
      <AvatarUploader onUpdate={handleAvatarUpdate} />
    </div>
  );
}

export default ProfilePage;
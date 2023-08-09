import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import '../components/Style.css'; // Import your custom CSS file

function ProfilePictureUploader({ onUpload }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleUpload = () => {
    onUpload(selectedImage);
  };

  return (
    <div className="profile-picture-uploader">
      <label className="profile-picture-label">
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {selectedImage ? 'Change Profile Picture' : 'Upload Profile Picture'}
      </label>
      {selectedImage && <img className="profile-picture" src={URL.createObjectURL(selectedImage)} alt="Profile" />}
      {selectedImage && <button onClick={handleUpload}>Upload</button>}
    </div>
  );
}

function ProfileDetails({ name, email }) {
  return (
    <div className="profile-details">
      <h2>Profile Details</h2>
      <li>Name: {name}</li>
      <li>Email: {email}</li>
    </div>
  );
}

function ProfilePage() {
  const [profilePicture, setProfilePicture] = useState(null);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');

  const handleProfilePictureUpload = (image) => {
    // Simulate profile picture upload
    setProfilePicture(image);
  };

  return (
    <div className="profile-container">
      <Navbar />
      <div className="profile-content">
        <ProfilePictureUploader onUpload={handleProfilePictureUpload} />
        <ProfileDetails name={name} email={email} />
      </div>
    </div>
  );
}

export default ProfilePage;
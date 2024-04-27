import React, { useState, useEffect } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import axios from 'axios';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      const response = await axios.get('/api/v1/user');
      setUserInfo(response.data);
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      await axios.put('/api/v1/user', userInfo);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user info:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    
    <div>
        <Header/>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <p>Name: {userInfo.name}</p>
          <p>Email: {userInfo.email}</p>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
      ,<Footer/>
    </div>
  );
};

export default UserProfile;
import React from 'react';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import './Profile.css'; // Import your custom CSS


function generateRandomUserData() {
    const names = ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Brown'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomAge = Math.floor(Math.random() * 50) + 20;
    const randomEmail = `${randomName.replace(/\s/g, '_')}${Math.floor(Math.random() * 100)}@example.com`;
    const contact = `${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 10000)}`;
    const abtMe = "Casting lines and chasing dreams, I'm an enthusiastic fisherman with an unwavering passion for the open waters. From the tranquil lakes to the roaring seas, I find solace in the rhythm of nature and the thrill of every catch. With every sunrise, I embark on new adventures, seeking the elusive trophies that test my patience and skill."

    return {
      name: randomName,
      age: randomAge,
      email: randomEmail,
      contact: contact,
      abtMe: abtMe
    };
  }


const Profile = () => {
    const randomUserData = generateRandomUserData();

  return (
    <div className="profile-container">
      <Paper elevation={3} className="profile-card">
        <Avatar
          alt="User Avatar"
        src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="avatar"
        />
        <Typography variant="h4" className="user-name" gutterBottom>
          {randomUserData.name}
        </Typography>
        <Typography variant="subtitle1" className="user-details" gutterBottom>
        Age: {randomUserData.age}
        </Typography>
        <Typography variant="subtitle1" className="user-details">
          Contact: {randomUserData.contact}
        </Typography>
        <Typography variant="subtitle1" className="user-details">
          Email: {randomUserData.email}
        </Typography>
        <Typography variant="subtitle1" className="user-details">
        <br /><br /><br />
        <b>About Me:</b>
        <div>{randomUserData.abtMe}</div>
         
        </Typography>
        {/* Add more profile information here */}
      </Paper>
    </div>
  );
};

export default Profile;

import React from 'react';
import UserProfile from '../components/userProfil';

const ProfilePage = () => {
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    photoUrl: '../images/logo-without-text.svg',
  };

  return (
      <UserProfile
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
        photoUrl={user.photoUrl}
      />
  );
};

export default ProfilePage;

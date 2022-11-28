import React, { useContext} from 'react'
import {UserContext} from '../../../src/App';

const ProfileData = () => {
    const {image} = useContext(UserContext);
    const userName = localStorage.getItem('userName');
  return (
    <div className='profile'>
        <div className='profileData'>
            <img src={image} alt='profile' className='profileImage'></img>
            <span className='profileName'>{userName}</span>
        </div>
    </div>
  )
}

export default ProfileData
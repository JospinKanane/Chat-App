import React, { useContext} from 'react'
import {UserContext} from '../../../src/App';

const ProfileData = () => {
    const {image} = useContext(UserContext);
    const {profileName} = useContext(UserContext);

    
  return (
    <div className='profile'>
        <div className='profileData'>
            <img src={image} alt='profile' className='profileImage'></img>
            <span className='profileName'>{profileName}</span>
        </div>
    </div>
  )
}

export default ProfileData
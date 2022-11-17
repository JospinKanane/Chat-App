import React, { useContext} from 'react'
import {UserContext} from '../../../src/App';

const ProfileData = () => {
    const {imageTest} = useContext(UserContext);
  return (
    <div className='profile'>
        <div className='profileData'>
            <img src={imageTest} alt='profile' className='profileImage'></img>
            <span className='profileName'>Jospin Kanane</span>
        </div>
    </div>
  )
}

export default ProfileData
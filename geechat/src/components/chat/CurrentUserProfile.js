import React, { useContext } from 'react'
import { UserContext } from '../../App';

const CurrentUserProfile = () => {
  const currentUser = localStorage.getItem('userName');
  const {image} = useContext(UserContext)
  return (
    <div>
        <div className='profile'>
        <div className='profileData'>
            <img src={image} alt='profile' className='profileImage'></img>
            <span className='profileName'>{currentUser}</span>
        </div>
    </div>
    </div>
  )
}

export default CurrentUserProfile
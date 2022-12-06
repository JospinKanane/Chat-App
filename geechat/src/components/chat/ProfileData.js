import React, { useContext} from 'react'
import {UserContext} from '../../../src/App';
import {IoMdContact} from 'react-icons/io'

const ProfileData = () => {
    const {currentChat} = useContext(UserContext);
    
  return (
    <div className='profile'>
        <div className='profileData'>
            <IoMdContact className='profileImage'/>
            <span className='profileName'>{currentChat.userName}</span>
        </div>
    </div>
  )
}

export default ProfileData
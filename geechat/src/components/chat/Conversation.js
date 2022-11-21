import React, {useContext} from 'react'
import {UserContext} from '../../../src/App';

const Conversation = () => {
    const {imageTest} = useContext(UserContext);
  return (
    <div className='conversation'>
        <img src={imageTest} alt='profile' className='conversImage'/>
        <span className='conversName'>Jospin Kanane</span>
    </div>
  )
}

export default Conversation
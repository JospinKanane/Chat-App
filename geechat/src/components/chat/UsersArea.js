import React from 'react'
import Conversation from './Conversation'
import SearchArea from './SearchArea'

const UsersArea = () => {
  return (
    <div className='search-users-area'>
        <SearchArea />
        <div className='users-area'>
          <Conversation/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
        </div>
    </div>
  )
}

export default UsersArea
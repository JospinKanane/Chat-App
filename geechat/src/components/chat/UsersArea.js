import React from 'react'
import SearchArea from './SearchArea'

const UsersArea = () => {
  return (
    <div className='search-users-area'>
        <SearchArea />
        <div className='users-area'>
          <div>Peaple connected goes here</div>
        </div>
    </div>
  )
}

export default UsersArea
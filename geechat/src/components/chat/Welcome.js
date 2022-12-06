import React from 'react'

const Welcome = () => {
  const currentUser = localStorage.getItem('userName')
  return (
    <div className='welcome'>
      <h1>Welcome to the geechat {currentUser}. Please select a contact to start a chat</h1>
    </div>
  )
}

export default Welcome
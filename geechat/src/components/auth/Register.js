import React from 'react'

function Register({name, email, password, setName, setPassword, setEmail}) {

  // const errName = document.querySelector('.errName')

  const handleNameChange = (e) => {
    setName(name = e.target.value); 
  };
  const handleMailChange = (e) => {
    setEmail(email =  e.target.value)

  };
  const handlePWChange = (e) => {
    setPassword(password =  e.target.value);
  };

  // const registration = (e) => {
  //   e.preventDefault();
  //   errName.innerContent = "Veillez enter un nom valable !"
  // }


  return (
    <div className='signPage'>
        <h1>SignUp to chatApp</h1>
        <form 
        className='signForm' 
        method='POST' 
        action='/signin'
        >
           <label 
           className='name' 
           for='signName'>
           Name
           </label>
           <input 
           type='text' 
           id='signName' 
           className="inputName" 
           placeholder='Enter a your name or your username here'
           onChange={handleNameChange}
           />
           {/* <span 
           className='errName' 
           style={{color: "red"}}>
           </span> */}
           <label 
           className='email' 
           for='signEmail'>
           Email
           </label>
           <input type='text' id='signEmail' className="inputName" placeholder='Enter a your email here'
           onChange={handleMailChange}
           />
           {/* <span 
           className='errMail' 
           style={{color: "red"}}>
           </span> */}
           <label 
           className='password' 
           for='signPassword'>
           Password
           </label>
           <input 
           type='password' 
           id='signPassword' 
           className="inputPassword" 
           placeholder='Enter your password here'
           onChange={handlePWChange}
           />
           {/* <span 
           className='errPassword' 
           style={{color: "red"}}>
           </span> */}
           <button 
           className='signBTN'>
           signUp
           {/* onClick={registration} */}
           </button>
        </form>
    </div>
  )
}

export default Register
import React, { useState }from 'react'

function RegisterPage() {

  const [email, setEmail] = useState('');
  const [ password, setPassword ] = useState('');
  const [ cpassword, setCPassword ] = useState('');

  return (
    <div className='register-parent'>
        <div className="row">
          <div className="col-md-5">
          <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_hsojyr3p.json"  background="transparent"  speed="1"  loop autoplay></lottie-player>
          </div>
          <div className="col-md-4">
            <div className='login-form'>
              <h2>Register</h2>
              <hr />
              <input type="text" className="form-control" placeholder="email"
              value={email} onChange={(e) => {setEmail(e.target.value)}} />
              <input type="password" className="form-control" placeholder="password" value={password} 
              onChange={(e) => {setPassword(e.target.value)}} />
              <input type="password" className="form-control" placeholder="confirm password" value={cpassword}
              onChange={(e) => setCPassword(e.target.value)} />
              <button>Register</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default RegisterPage
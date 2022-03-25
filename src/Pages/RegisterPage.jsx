import React, { useState }from 'react'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Loader from '../Components/Loader'
import { toast } from 'react-toastify';


function RegisterPage() {

  const [email, setEmail] = useState('');
  const [ password, setPassword ] = useState('');
  const [ cpassword, setCPassword ] = useState('');
  const [loading, setLoading ] = useState(false);
  const auth = getAuth();

  const register = async () => {
    try {
      setLoading(true)
      const result = await createUserWithEmailAndPassword(auth, email, password)
      console.log(result)
      setLoading(false);
      toast.success(`User registered successfully`);
    } catch (error) {
      console.log(error)
      toast.error(`User registration failed`);
      setLoading(false);
    }
  }

  return (
    <div className='register-parent'>
      {loading && (<Loader />)}
      <div className="register-top"></div>
        <div className="row justify-content-center">
          {/* animation column */}
          <div className="col-md-5 d-none d-sm-block">
            <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_hsojyr3p.json"  background="transparent"  speed="1"  loop autoplay></lottie-player>
          </div>
          <div className="col-md-4">
            <div className='register-form'>
              <h2>Register</h2>
              <hr />

              {/* email input box */}
              <input type="text" className="form-control" placeholder="email"
              value={email} onChange={(e) => {setEmail(e.target.value);}} />

              {/* password input box */}
              <input type="password" className="form-control" placeholder="password" value={password} 
              onChange={(e) => {setPassword(e.target.value);}} />

              {/* confirm password input box */}
              <input type="password" className="form-control" placeholder="confirm password" value={cpassword}
              onChange={(e) => {setCPassword (e.target.value)}} />

              {/* submit button */}
              <button className='my-3' onClick={register}>Register</button>
              <Link to='/login' className='p-4 text-decoration-none'> Click here to Login</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default RegisterPage
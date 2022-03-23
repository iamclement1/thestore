import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Loader from '../Components/Loader';
import { toast } from 'react-toastify';


function LoginPage() {

  const [email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const auth = getAuth();

  const login = async () => {
    try {
      setLoading(true)
      const result = await signInWithEmailAndPassword(auth, email, password)
      localStorage.setItem(`currentUser`, JSON.stringify(result));
      setLoading(false);
      toast.success(`User Login Successfully`);
      window.location.href="/"
    } catch (error) {
      console.log(error)
      toast.error(`User Login Failed`);
      setLoading(false);
    }
  }

  return (
    <div className='login-parent'>
      {loading && ( <Loader />)}
      <div className="login-top"></div>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="login-form">
            <h2>Login</h2>
            <hr />
            {/* user name input */}
            <input type="text" className="form-control" 
            placeholder="Enter your email address"
            value={email} onChange= {(e) => {setEmail (e.target.value);}} />

            {/* password input box */}
            <input type="password" className="form-control"
            placeholder="Enter your password"
            value={password} onChange= {(e) => {setPassword (e.target.value);}}/>

            <button className='my-3' onClick={login}> Login </button>
            <Link to='/register' className='p-4 text-decoration-none'>Click here to register</Link>
          </div>
        </div>
        <div className="col-md-5">
          <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_hsojyr3p.json"  background="transparent"  speed="1"  loop autoplay></lottie-player>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
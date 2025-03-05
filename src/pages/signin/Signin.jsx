
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import googleImg from '../../assets/images/google-logo.svg';
import { MdEmail } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Signin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  function validateInputs() {
    const isEmailValid = (/^\S+@\S+\.\S+$/g).test(emailInput.trim());
    const isPasswordValid = passwordInput.trim().length >= 8;
    
    setValidEmail(isEmailValid);
    setValidPassword(isPasswordValid);
  
    if (isEmailValid && isPasswordValid) {
      navigate('/');
    }
  }
  return (
    <section className="bg-white h-screen">
      <div className="container mx-auto px-6 h-full flex items-center justify-center">
        <div className='flex flex-col gap-8 border border-neutral-300 rounded-lg px-5 py-12 w-full max-w-[480px] shadow-lg'>
          <p className='text-black text-base font-medium'>Welcome back</p>
          <h3 className="text-black font-bold text-2xl sm:text-3xl">Sign in to Shopy</h3>
          <div className='flex items-center justify-center gap-3 border border-neutral-300 rounded-lg h-[40px] cursor-pointer 
            hover:border-neutral-500 hover:bg-neutral-50 ease-linear duration-200'>
            <img src={googleImg} alt="Google"
              className='w-6 h-6'/>
            <span className='font-medium text-black'>Continue with google</span>
          </div>
          <div className='w-full h-[1px] bg-neutral-500 relative my-5'>
            <span className='text-neutral-500 text-center font-semibold uppercase font-base px-1 bg-white 
              absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>OR</span>
          </div>
          <div className={`flex items-center justify-center gap-1 pr-3 border border-neutral-300 relative ${!validEmail ? "border-red-500" : ""}
            rounded-lg h-[50px] focus-within:border-black group  ease-linear duration-200`}>
            <label htmlFor="email"
              className={`absolute top-0 translate-y-[-50%] left-3 bg-white px-1 text-neutral-500 text-sm group-focus-within:text-black ease-linear duration-200
                ${!validEmail ? "text-red-500" : ""}`}>
              Email
            </label>
            <input type="email" name='email' id='email' placeholder='Enter Your Email'
              value={emailInput} onChange={(e) => setEmailInput(e.target.value)}
              className='outline-none h-full rounded-lg flex-1 pl-3 placeholder:text-sm'/>
            <MdEmail className={`text-neutral-500 cursor-pointer text-xl group-focus-within:text-black ease-linear duration-200
               ${!validEmail ? "text-red-500" : ""}`} />
          </div>
          <div className={`flex items-center justify-center gap-1 pr-3 border border-neutral-300 relative ${!validPassword ? "border-red-500" : ""}
            rounded-lg h-[50px] focus-within:border-black group ease-linear duration-200`}>
            <label htmlFor="password"
              className={`absolute top-0 translate-y-[-50%] left-3 bg-white px-1 text-neutral-500 text-sm group-focus-within:text-black ease-linear duration-200
                ${!validPassword ? "text-red-500" : ""}`}>
              Password
            </label>
            <input type={showPassword ? "text" : "password"} name='password' id='password' placeholder='Enter Your Password'
              value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)}
              className='outline-none h-full rounded-lg flex-1 pl-3 placeholder:text-sm appearance-none' />
            {
              showPassword ?
              <IoMdEye onClick={() => setShowPassword(false)} className={`text-neutral-500 cursor-pointer text-2xl group-focus-within:text-black ease-linear duration-200
                ${!validPassword ? "text-red-500" : ""}`} /> :
              <IoMdEyeOff onClick={() => setShowPassword(true)}  className={`text-neutral-500 cursor-pointer text-2xl group-focus-within:text-black ease-linear duration-200
                ${!validPassword ? "text-red-500" : ""}`} />
            }
          </div>
          <div className='flex items-center justify-end'>
            {/* error msg */}
            <Link to='/passwordreset' 
              className='text-xs text-yellowPrimary font-medium'>Forgot password?</Link>
          </div>
          <button 
            onClick={validateInputs}
            className='text-white bg-black w-full rounded-md h-[40px] flex items-center justify-center'>
            Sign In
          </button>
          <div className='text-center flex items-center justify-center gap-1'>
            <p
              className='text-sm font-medium text-black'>New To Shopy?</p>
            <Link to='/signup'
              className='text-sm text-yellowPrimary font-medium'>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signin

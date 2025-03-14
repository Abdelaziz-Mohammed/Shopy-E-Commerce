
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UsersContext } from '../../userscontext/UsersContext';
import { MdEmail } from 'react-icons/md';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import googleImg from '../../assets/images/google-logo.svg';
import bcrypt from 'bcryptjs';

function Signin() {
  const navigate = useNavigate();
  // users context
  const { users } = useContext(UsersContext);
  const [showPassword, setShowPassword] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const allowedDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com'];
  function validateInputs() {
    let isValid = true;
    const isEmailValid = emailInput.length > 0 && emailInput.length <= 100 && (/^\S+@\S+\.\S+$/g).test(emailInput.trim());
    const isPasswordValid = passwordInput.length >= 8 && (/[A-Z]/).test(passwordInput) && (/[a-z]/).test(passwordInput) && (/\d/).test(passwordInput) && (/[@$!%*?&]/).test(passwordInput);
    // set email error messages
    const emaildomail = emailInput.split('@')[1];
    if (emailInput.length === 0) {
      setEmailError('Email is required');
      isValid = false;
    }
    else if (emailInput.length > 100) {
      setEmailError('Email must not exceed 100 characters');
      isValid = false;
    }
    else if (!(/^\S+@\S+\.\S+$/g).test(emailInput.trim())) {
      setEmailError('Invalid email format (example@gmail.com)');
      isValid = false;
    }
    else if (!allowedDomains.includes(emaildomail)) {
      setEmailError(`Invalid domain name: ${emaildomail}`);
      isValid = false;
    }
    else {
      setEmailError('Valid Email');
    }
    // set password error messages
    if (passwordInput.length === 0) {
      setPasswordError('Password is required');
      isValid = false;
    }
    else {
      setPasswordError('');
    }
    // set valid booleans
    setValidEmail(isEmailValid);
    setValidPassword(isPasswordValid);
    // search for this user in users context
    if(isValid) {
      const user = users.find(user => user.email === emailInput);
      console.log(user);
      console.log(users);
      if (!user || !bcrypt.compareSync(passwordInput, user.password)) {
        setEmailError("Invalid email or password");
        setPasswordError("Invalid email or password");
        return;
      }
      // navigate if every thing is OK
      if (isEmailValid && isPasswordValid && user) navigate('/');
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
          {/* email field */}
          <div>
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
            <span className={`${emailError === '' ? 'hidden' : ''} text-xs pl-3 ${emailError === 'Valid Email' ? 'text-green-500' : 'text-red-500'}`}>
              {emailError}
            </span>
          </div>
          {/* password field */}
          <div>
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
            <span className={`${passwordError === '' ? 'hidden' : ''} text-xs pl-3 ${passwordError === 'Valid Password' ? 'text-green-500' : 'text-red-500'}`}>
              {passwordError}
            </span>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start gap-2'>
              <input type="checkbox" id="remember-me" className='w-4 h-4 peer' />
              <label htmlFor="remember-me" className='text-neutral-500 text-sm peer-checked:text-yellowPrimary ease-linear duration-100'>Remember Me</label>
            </div>
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

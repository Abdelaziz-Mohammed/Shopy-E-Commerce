
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UsersContext } from '../../userscontext/UsersContext';
import googleImg from '../../assets/images/google-logo.svg';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';

function Signup() {
  const navigate = useNavigate();
  // users context
  const { users, addUser } = useContext(UsersContext);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validName, setvalidName] = useState(true);
  const [validEmail, setvalidEmail] = useState(true);
  const [validPassword, setvalidPassword] = useState(true);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const allowedDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com'];
  function validateInputs() {
    const isNameValid = name.length >= 3 && name.length <= 50 && (/^[A-Za-z\s]+$/).test(name.trim());
    const isEmailValid = email.length > 0 && email.length <= 100 && (/^\S+@\S+\.\S+$/g).test(email.trim());
    const isPasswordValid = password.length >= 8 && (/[A-Z]/).test(password) && (/[a-z]/).test(password) && (/\d/).test(password) && (/[@$!%*?&]/).test(password);
    // set name error messages
    if (name.length === 0) {
      setNameError('Name is required');
    }
    else if (name.length < 3) {
      setNameError('Name must be at least 3 characters long');
    }
    else if (name.length > 50) {
      setNameError('Name must not exceed 50 characters');
    }
    else if (!(/^[A-Za-z\s]+$/).test(name.trim())) {
      setNameError('Name should contain only letters and spaces');
    }
    else {
      setNameError('Valid Name');
    }
    // set email error messages
    const emaildomail = email.split('@')[1];
    if (email.length === 0) {
      setEmailError('Email is required');
    }
    else if (email.length > 100) {
      setEmailError('Email must not exceed 100 characters');
    }
    else if (!(/^\S+@\S+\.\S+$/g).test(email.trim())) {
      setEmailError('Invalid email format (example@gmail.com)');
    }
    else if (!allowedDomains.includes(emaildomail)) {
      setEmailError(`Invalid domain name: ${emaildomail}`);
    }
    else {
      setEmailError('Valid Email');
    }
    // set password error messages
    if (password.length === 0) {
      setPasswordError('Password is required');
    }
    else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    }
    else if (!(/[A-Z]/).test(password)) {
      setPasswordError('Password must include at least one uppercase letter');
    }
    else if (!(/[a-z]/).test(password)) {
      setPasswordError('Password must include at least one lowercase letter');
    }
    else if (!(/\d/).test(password)) {
      setPasswordError('Password must include at least one number');
    }
    else if (!(/[@$!%*?&]/).test(password)) {
      setPasswordError('Password must include at least one special character (@$!%*?&)');
    }
    else {
      setPasswordError('Valid Password');
    }
    // set valid booleans
    setvalidName(isNameValid);
    setvalidEmail(isEmailValid);
    setvalidPassword(isPasswordValid);
    // navigate if every thing is OK
    if (isNameValid && isEmailValid && isPasswordValid) {
      // add new user to the users context
      const user = {
        id: users.length + 1,
        name: name.trim(),
        email: email.trim(),
        password: password.trim(),
      };
      addUser(user);
      navigate('/');
    }
  }
  return (
    <section className="bg-white h-screen">
      <div className="container mx-auto px-6 h-full flex items-center justify-center">
        <div className='flex flex-col gap-5 border border-neutral-300 rounded-lg px-5 py-12 w-full max-w-[480px] shadow-lg'>
          <p className='text-black text-base font-medium'>Start your journey</p>
          <h3 className="text-black font-bold text-2xl sm:text-3xl">Sign up to Shopy</h3>
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
          {/* name field */}
          <div>
            <div className={`flex items-center justify-center gap-1 pr-3 border border-neutral-300 relative
              rounded-lg h-[50px] group ease-linear duration-200
              ${validName ? 'focus-within:border-black' : 'border-red-500'}`}>
              <label htmlFor="name"
                className={`absolute top-0 translate-y-[-50%] left-3 bg-white px-1 text-neutral-500 text-sm
                  ease-linear duration-200 ${validName ? 'group-focus-within:text-black' : 'text-red-500'}`}>
                Name
              </label>
              <input type="text" name='name' id='name' placeholder='John Doe'
                value={name} onChange={(e) => setName(e.target.value)}
                className='outline-none h-full rounded-lg flex-1 pl-3 placeholder:text-sm' />
              <FaUser className={`text-neutral-500 cursor-pointer text-xl group-focus-within:text-black ease-linear duration-200
                ${validName ? 'text-neutral-500' : 'text-red-500'}`} />
            </div>
            <span className={`${nameError === '' ? 'hidden' : ''} text-xs pl-3 ${nameError === 'Valid Name' ? 'text-green-500' : 'text-red-500'}`}>
              {nameError}
            </span>
          </div>
          {/* email field */}
          <div>
            <div className={`flex items-center justify-center gap-1 pr-3 border border-neutral-300 relative
              rounded-lg h-[50px] group ease-linear duration-200
              ${validEmail ? 'focus-within:border-black' : 'border-red-500'}`}>
              <label htmlFor="email"
                className={`absolute top-0 translate-y-[-50%] left-3 bg-white px-1 text-neutral-500 text-sm
                  ease-linear duration-200 ${validEmail ? 'group-focus-within:text-black' : 'text-red-500'}`}>
                Email
              </label>
              <input type="email" name='email' id='email' placeholder='example@gmail.com'
                value={email} onChange={(e) => setEmail(e.target.value)}
                className='outline-none h-full rounded-lg flex-1 pl-3 placeholder:text-sm' />
              <MdEmail className={`cursor-pointer text-xl group-focus-within:text-black ease-linear duration-200
                ${validEmail ? 'text-neutral-500' : 'text-red-500'}`} />
            </div>
            <span className={`${emailError === '' ? 'hidden' : ''} text-xs pl-3 ${emailError === 'Valid Email' ? 'text-green-500' : 'text-red-500'}`}>
              {emailError}
            </span>
          </div>
          {/* password field */}
          <div>
            <div className={`flex items-center justify-center gap-1 pr-3 border border-neutral-300 relative
              rounded-lg h-[50px] group  ease-linear duration-200
              ${validPassword ? 'focus-within:border-black' : 'border-red-500'}`}>
              <label htmlFor="password"
                className={`absolute top-0 translate-y-[-50%] left-3 bg-white px-1 text-neutral-500 text-sm
                  ease-linear duration-200 ${validPassword ? 'group-focus-within:text-black' : 'text-red-500'}`}>
                Password
              </label>
              <input type={showPassword ? "text" : "password"} name='password' id='password' placeholder='Your Password'
                value={password} onChange={(e) => setPassword(e.target.value)}
                className='outline-none h-full rounded-lg flex-1 pl-3 placeholder:text-sm appearance-none' />
              {
                showPassword ?
                <IoMdEye onClick={() => setShowPassword(false)} className={`cursor-pointer text-2xl group-focus-within:text-black ease-linear duration-200
                  ${validPassword ? 'text-neutral-500' : 'text-red-500'}`} /> :
                <IoMdEyeOff onClick={() => setShowPassword(true)}  className={`cursor-pointer text-2xl group-focus-within:text-black ease-linear duration-200
                  ${validPassword ? 'text-neutral-500' : 'text-red-500'}`} />
              }
            </div>
            <span className={`${passwordError === '' ? 'hidden' : ''} text-xs pl-3 ${passwordError === 'Valid Password' ? 'text-green-500' : 'text-red-500'}`}>
              {passwordError}
            </span>
          </div>
          <button onClick={validateInputs}
            className='text-white bg-black w-full rounded-md h-[40px] flex items-center justify-center'>
            Sign Up
          </button>
          <div className='text-center flex items-center justify-center gap-1'>
            <p
              className='text-sm font-medium text-black'>Have an account ?</p>
            <Link to='/signin'
              className='text-sm text-yellowPrimary font-medium'>
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup

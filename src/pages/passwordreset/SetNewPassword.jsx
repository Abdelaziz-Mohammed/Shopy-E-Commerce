
import setNewPasswordImage from '../../assets/images/reset-password.png'
import { Link, useNavigate } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

function SetNewPassword() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validPassword, setValidPassword] = useState(true);
  const [validConfirmPassword, setValidConfirmPassword] = useState(true);
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  function validatePassword() {
    const isPasswordValid = password.length >= 8 && (/[A-Z]/).test(password) && (/[a-z]/).test(password) && (/\d/).test(password) && (/[@$!%*?&]/).test(password);
    const isConfirmPasswordValid =confirmPassword.length >= 8 && confirmPassword === password;
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
    // set confirm password error messages
    if (confirmPassword.length === 0) {
      setConfirmPasswordError('Confirm Password is required');
    }
    else if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
    }
    else {
      setConfirmPasswordError('Valid Confirm Password');
    }
    // set valid booleans
    setValidPassword(isPasswordValid);
    setValidConfirmPassword(isConfirmPasswordValid);
    // navigate if every thing is OK
    if (isPasswordValid && isConfirmPasswordValid) navigate('/resetsuccessfully');
  }
  return (
    <section className="bg-white h-screen">
      <div className="container mx-auto px-6 h-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-8 w-full max-w-[480px]">
          <img src={setNewPasswordImage} alt="Check Email"
            className='w-[125px] h-[125px] mb-6' />
          <h3 className='text-black font-bold text-xl sm:text-2xl'>Set New Password</h3>
          {/* password field */}
          <div className='w-full'>
            <div className={`flex items-center justify-center gap-1 w-full pr-3 border border-neutral-300 relative
              rounded-lg h-[50px] group ease-linear duration-200
              ${validPassword ? 'focus-within:border-black' : 'border-red-500'} `}>
              <label htmlFor="password"
                className={`absolute top-0 translate-y-[-50%] left-3 bg-white px-1 text-sm group-focus-within:text-black ease-linear duration-200
                ${validPassword ? 'text-neutral-500' : 'text-red-500'}`}>
                Password
              </label>
              <input type={showPassword ? "text" : "password"} name='password' id='password' placeholder='Your Password'
                value={password} onChange={(e) => setPassword(e.target.value)}
                className='outline-none h-full rounded-lg flex-1 pl-3 placeholder:text-sm appearance-none' />
              {
                showPassword ?
                <IoMdEye onClick={() => setShowPassword(false)} className={`text-neutral-500 cursor-pointer text-2xl ease-linear duration-200
                  ${validPassword ? 'group-focus-within:text-black' : 'text-red-500'}`} /> :
                <IoMdEyeOff onClick={() => setShowPassword(true)}  className={`text-neutral-500 cursor-pointer text-2xl ease-linear duration-200
                  ${validPassword ? 'group-focus-within:text-black' : 'text-red-500'}`} />
              }
            </div>
            <span className={`${passwordError === '' ? 'hidden' : ''} text-xs pl-3 ${passwordError === 'Valid Password' ? 'text-green-500' : 'text-red-500'}`}>
              {passwordError}
            </span>
          </div>
          {/* confirm password field */}
          <div className='w-full'>
            <div className={`flex items-center justify-center gap-1 w-full pr-3 border border-neutral-300 relative
              rounded-lg h-[50px] group ease-linear duration-200
              ${validConfirmPassword ? 'focus-within:border-black' : 'border-red-500'} `}>
              <label htmlFor="confirm-password"
                className={`absolute top-0 translate-y-[-50%] left-3 bg-white px-1 text-sm group-focus-within:text-black ease-linear duration-200
                ${validConfirmPassword ? 'text-neutral-500' : 'text-red-500'}`}>
                Confirm Password
              </label>
              <input type={showConfirmPassword ? "text" : "password"} name='confirm-password' id='confirm-password' placeholder='Your Password'
                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                className='outline-none h-full rounded-lg flex-1 pl-3 placeholder:text-sm appearance-none' />
              {
                showConfirmPassword ?
                <IoMdEye onClick={() => setShowConfirmPassword(false)} className={`text-neutral-500 cursor-pointer text-2xl ease-linear duration-200
                  ${validConfirmPassword ? 'group-focus-within:text-black' : 'text-red-500'}`} /> :
                <IoMdEyeOff onClick={() => setShowConfirmPassword(true)}  className={`text-neutral-500 cursor-pointer text-2xl ease-linear duration-200
                  ${validConfirmPassword ? 'group-focus-within:text-black' : 'text-red-500'}`} />
              }
            </div>
            <span className={`${confirmPasswordError === '' ? 'hidden' : ''} text-xs pl-3 ${confirmPasswordError === 'Valid Confirm Password' ? 'text-green-500' : 'text-red-500'}`}>
              {confirmPasswordError}
            </span>
          </div>
          <button
            onClick={validatePassword}
            className='text-white bg-black w-full rounded-md h-[40px] flex items-center justify-center'>
            Reset Password
          </button>
          <Link to='/signin'
            className='flex items-center justify-center gap-1 text-neutral-500 hover:text-yellowPrimary ease-linear duration-200'>
            <FaLongArrowAltLeft className='text-xs' />
            <span className='text-sm'>Back to login</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SetNewPassword

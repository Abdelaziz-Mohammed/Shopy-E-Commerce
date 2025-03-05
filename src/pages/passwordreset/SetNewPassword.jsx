
import setNewPasswordImage from '../../assets/images/reset-password.png'
import { Link, useNavigate } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

function SetNewPassword() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validPassword, setValidPassword] = useState(true);
  const [validConfirmPassword, setValidConfirmPassword] = useState(true);
  function validatePassword() {
    const isPasswordValid = password.length >= 8;
    const isConfirmPasswordValid = confirmPassword.length >= 8 && confirmPassword === password;
    setValidPassword(isPasswordValid);
    setValidConfirmPassword(isConfirmPasswordValid);
    if (isPasswordValid && isConfirmPasswordValid) navigate('/resetsuccessfully');
  }
  return (
    <section className="bg-white h-screen">
      <div className="container mx-auto px-6 h-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-8 w-full max-w-[480px]">
          <img src={setNewPasswordImage} alt="Check Email"
            className='w-[125px] h-[125px] mb-6' />
          <h3 className='text-black font-bold text-xl sm:text-2xl'>Set New Password</h3>
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
          <div className={`flex items-center justify-center gap-1 w-full pr-3 border border-neutral-300 relative
            rounded-lg h-[50px] group ease-linear duration-200
            ${validConfirmPassword ? 'focus-within:border-black' : 'border-red-500'} `}>
            <label htmlFor="confirm-password"
              className={`absolute top-0 translate-y-[-50%] left-3 bg-white px-1 text-sm group-focus-within:text-black ease-linear duration-200
              ${validConfirmPassword ? 'text-neutral-500' : 'text-red-500'}`}>
              Confirm Password
            </label>
            <input type={showPassword ? "text" : "password"} name='confirm-password' id='confirm-password' placeholder='Your Password'
              value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
              className='outline-none h-full rounded-lg flex-1 pl-3 placeholder:text-sm appearance-none' />
            {
              showPassword ?
              <IoMdEye onClick={() => setShowPassword(false)} className={`text-neutral-500 cursor-pointer text-2xl ease-linear duration-200
                ${validConfirmPassword ? 'group-focus-within:text-black' : 'text-red-500'}`} /> :
              <IoMdEyeOff onClick={() => setShowPassword(true)}  className={`text-neutral-500 cursor-pointer text-2xl ease-linear duration-200
                ${validConfirmPassword ? 'group-focus-within:text-black' : 'text-red-500'}`} />
            }
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

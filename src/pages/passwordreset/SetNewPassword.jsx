
import setNewPasswordImage from '../../assets/images/reset-password.png'
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

function SetNewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="bg-white h-screen">
      <div className="container mx-auto px-6 h-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-8 w-full max-w-[480px]">
          <img src={setNewPasswordImage} alt="Check Email"
            className='w-[125px] h-[125px] mb-6' />
          <h3 className='text-black font-bold text-xl sm:text-2xl'>Set New Password</h3>
          <div className='flex items-center justify-center gap-1 w-full pr-3 border border-neutral-300 relative
            rounded-lg h-[50px] focus-within:border-black group ease-linear duration-200'>
            <label htmlFor="password"
              className='absolute top-0 translate-y-[-50%] left-3 bg-white px-1 text-neutral-500 text-sm group-focus-within:text-black ease-linear duration-200'>
              Password
            </label>
            <input type={showPassword ? "text" : "password"} name='password' id='password' placeholder='Your Password'
              className='outline-none h-full rounded-lg flex-1 pl-3 placeholder:text-sm appearance-none' />
            {
              showPassword ?
              <IoMdEye onClick={() => setShowPassword(false)} className='text-neutral-500 cursor-pointer text-2xl group-focus-within:text-black ease-linear duration-200' /> :
              <IoMdEyeOff onClick={() => setShowPassword(true)}  className='text-neutral-500 cursor-pointer text-2xl group-focus-within:text-black ease-linear duration-200' />
            }
          </div>
          <div className='flex items-center justify-center gap-1 w-full pr-3 border border-neutral-300 relative
            rounded-lg h-[50px] focus-within:border-black group ease-linear duration-200'>
            <label htmlFor="confirm-password"
              className='absolute top-0 translate-y-[-50%] left-3 bg-white px-1 text-neutral-500 text-sm group-focus-within:text-black ease-linear duration-200'>
              Confirm Password
            </label>
            <input type={showPassword ? "text" : "password"} name='confirm-password' id='confirm-password' placeholder='Your Password'
              className='outline-none h-full rounded-lg flex-1 pl-3 placeholder:text-sm appearance-none' />
            {
              showPassword ?
              <IoMdEye onClick={() => setShowPassword(false)} className='text-neutral-500 cursor-pointer text-2xl group-focus-within:text-black ease-linear duration-200' /> :
              <IoMdEyeOff onClick={() => setShowPassword(true)}  className='text-neutral-500 cursor-pointer text-2xl group-focus-within:text-black ease-linear duration-200' />
            }
          </div>
          <Link to='/resetsuccessfully'
            className='text-white bg-black w-full rounded-md h-[40px] flex items-center justify-center'>
            Reset Password
          </Link>
          <Link to='/signin'
            className='flex items-center justify-center gap-1 text-neutral-500 hover:text-yellowForForms ease-linear duration-200'>
            <FaLongArrowAltLeft className='text-xs' />
            <span className='text-sm'>Back to login</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SetNewPassword

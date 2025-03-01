
import { useState } from 'react';
import { Link } from 'react-router-dom';
import googleImg from '../../assets/images/google-logo.svg';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="bg-white h-screen">
      <div className="container mx-auto px-6 h-full flex items-center justify-center">
        <div className='flex flex-col gap-8 border border-neutral-300 rounded-lg px-5 py-12 w-full max-w-[480px] shadow-lg'>
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
          <div className='flex items-center justify-center gap-1 pr-3 border border-neutral-300 relative
            rounded-lg h-[50px] focus-within:border-black group ease-linear duration-200'>
            <label htmlFor="name"
              className='absolute top-0 translate-y-[-50%] left-3 bg-white px-1 text-neutral-500 text-sm group-focus-within:text-black
                ease-linear duration-200'>
              Name
            </label>
            <input type="text" name='name' id='name' placeholder='John Doe'
              className='outline-none h-full rounded-lg flex-1 pl-3 placeholder:text-sm' />
            <FaUser className='text-neutral-500 cursor-pointer text-xl group-focus-within:text-black ease-linear duration-200' />
          </div>
          <div className='flex items-center justify-center gap-1 pr-3 border border-neutral-300 relative
            rounded-lg h-[50px] focus-within:border-black group ease-linear duration-200'>
            <label htmlFor="email"
              className='absolute top-0 translate-y-[-50%] left-3 bg-white px-1 text-neutral-500 text-sm group-focus-within:text-black
                ease-linear duration-200'>
              Email
            </label>
            <input type="email" name='email' id='email' placeholder='example@gmail.com'
              className='outline-none h-full rounded-lg flex-1 pl-3 placeholder:text-sm' />
            <MdEmail className='text-neutral-500 cursor-pointer text-xl group-focus-within:text-black ease-linear duration-200' />
          </div>
          <div className='flex items-center justify-center gap-1 pr-3 border border-neutral-300 relative
            rounded-lg h-[50px] focus-within:border-black group  ease-linear duration-200'>
            <label htmlFor="password"
              className='absolute top-0 translate-y-[-50%] left-3 bg-white px-1 text-neutral-500 text-sm group-focus-within:text-black
                ease-linear duration-200'>
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
          <button className='text-white bg-black w-full rounded-md h-[40px] flex items-center justify-center'>
            Sign Up
          </button>
          <div className='text-center flex items-center justify-center gap-1'>
            <p
              className='text-sm font-medium text-black'>Have an account ?</p>
            <Link to='/signin'
              className='text-sm text-yellowForForms font-medium'>
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup

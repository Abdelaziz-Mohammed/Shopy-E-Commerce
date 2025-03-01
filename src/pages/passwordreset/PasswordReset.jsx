
import { FaLongArrowAltLeft } from 'react-icons/fa';
import resetPasswordImg from '../../assets/images/reset-password.png';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

function PasswordReset() {
  return (
    <section className="bg-white h-screen">
      <div className="container mx-auto px-6 h-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-6 w-full max-w-[480px]">
          <img src={resetPasswordImg} alt="Reset"
            className='w-[125px] h-[125px] mb-6' />
          <h3 className='text-black font-bold text-xl sm:text-2xl'>Forgot Your Password</h3>
          <p className='text-neutral-500 text-center text-base capitalize max-w-[300px]'>To reset your password, please enter your email adress.</p>
          <div className='flex items-center justify-center gap-1 w-full pr-3 border border-neutral-300 relative
            rounded-lg h-[50px] focus-within:border-black group  ease-linear duration-200'>
            <label htmlFor="email"
              className='absolute top-0 translate-y-[-50%] left-3 bg-white px-1 text-neutral-500 text-sm group-focus-within:text-black ease-linear duration-200'>
              Email
            </label>
            <input type="email" name='email' id='email' placeholder='example@gmail.com'
              className='outline-none h-full rounded-lg flex-1 pl-3 placeholder:text-sm' />
            <MdEmail className='text-neutral-500 cursor-pointer text-xl group-focus-within:text-black ease-linear duration-200' />
          </div>
          <Link to='/checkemail'
            className='text-white bg-black w-full rounded-md h-[40px] flex items-center justify-center'>
            Reset password
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

export default PasswordReset

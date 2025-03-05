
import ResetSuccessfullyImg from '../../assets/images/reset-successfully.png';
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';

function ResetSuccessfully() {
  return (
    <section className="bg-white h-screen">
      <div className="container mx-auto px-6 h-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-6 w-full max-w-[480px]">
          <img src={ResetSuccessfullyImg} alt="Reset"
            className='w-[125px] h-[125px] mb-6' />
          <h3 className='text-black font-bold text-xl sm:text-2xl'>Password reset successfully</h3>
          <p className='text-neutral-500 text-center text-base capitalize max-w-[300px]'>your password has been successfully reset.</p>
          <Link to='/'
            className='text-white bg-black w-full rounded-md h-[40px] flex items-center justify-center'>
            Continue
          </Link>
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

export default ResetSuccessfully

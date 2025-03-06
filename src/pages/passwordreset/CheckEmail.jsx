
import { Link, useNavigate } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import checkEmailImage from '../../assets/images/check-email.png';
import { useRef, useState } from 'react';

function CheckEmail() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [validOtp, setValidOtp] = useState(true);
  const inputRefs = useRef([]); // refs for otp inputs

  function handleOtpChange(index, e) {
    const value = e.target.value;
    // allow only numbers (0-9)
    if (!(/^\d$/).test(value)) return;
    // now, set opt
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // move (focus) to the next input
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus(); // focus on the next input
    }
  }

  function handleOtpKeyDown(index, e) {
    if (e.key === 'Backspace') {
      const newOtp = [...otp];
      newOtp[index] = ''; // clear the current input
      setOtp(newOtp);

      if (index > 0) {
        inputRefs.current[index - 1].focus(); // focus on the previous input
      }
    }
    else if (e.key === 'ArrowRight' && index < otp.length - 1) {
      inputRefs.current[index + 1].focus(); // focus on the next input
    }
    else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1].focus(); // focus on the previous input
    }
  }

  function validateOTP() {
    const isOTPValid = otp.every((digit) => digit.length > 0);
    setValidOtp(isOTPValid);
    if (isOTPValid) navigate('/setnewpassword');
  }
  return (
    <section className="bg-white h-screen">
      <div className="container mx-auto px-6 h-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-6 w-full max-w-[480px]">
          <img src={checkEmailImage} alt="Check Email"
            className='w-[125px] h-[125px] mb-6' />
          <h3 className='text-black font-bold text-xl sm:text-2xl'>Check your email</h3>
          <p className='text-neutral-500 text-center text-base capitalize max-w-[300px]'>We sent a code to your email.</p>
          {/* OTP Input Boxes */}
          <div className='flex items-center justify-center gap-3'>
            {
              otp.map((digit, index) =>
                <input 
                  key={index}
                  ref={(ele) => (inputRefs.current[index] = ele)}
                  type="text"
                  value={digit}
                  maxLength='1'
                  onChange={(e) => handleOtpChange(index, e)}
                  onKeyDown={(e) => handleOtpKeyDown(index, e)}
                  className={`w-10 sm:w-12 h-10 sm:h-12 border border-neutral-500 text-center text-xl rounded-md outline-none focus:border-yellowPrimary ease-linear duration-200
                    ${validOtp ? '' : (otp[index].length > 0) ? '' : 'border-red-500 bg-red-50'} `}
                />
              )
            }
          </div>
          {/* - - - */}
          <button
            onClick={validateOTP}
            className='text-white bg-black w-full rounded-md h-[40px] flex items-center justify-center'>
            Verify
          </button>
          <div className='text-center flex items-center justify-center gap-1'>
            <p
              className='text-sm font-medium text-black'>Didn&apos;t recive the email?</p>
            <Link to='/checkemail'
              onClick={() => {setOtp(['', '', '', '', '', '']); setValidOtp(true);}}
              className='text-sm text-yellowPrimary font-medium'>
              Resend
            </Link>
          </div>
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

export default CheckEmail

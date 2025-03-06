
import { FaLongArrowAltLeft } from 'react-icons/fa';
import resetPasswordImg from '../../assets/images/reset-password.png';
import { MdEmail } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function PasswordReset() {
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [emailError, setEmailError] = useState('');
  function validateEmail(e) {
    e.preventDefault();
    const isEmailValid = emailInput.length > 0 && emailInput.length <= 100 && (/^\S+@\S+\.\S+$/g).test(emailInput.trim());
    // set email error messages
    if (emailInput.length === 0) {
      setEmailError('Email is required');
    }
    else if (emailInput.length > 100) {
      setEmailError('Email must not exceed 100 characters');
    }
    else if (!(/^\S+@\S+\.\S+$/g).test(emailInput.trim())) {
      setEmailError('Invalid email format (example@gmail.com)');
    }
    else {
      setEmailError('Valid Email');
    }
    // set valid boolean
    setValidEmail(isEmailValid);
    // navigate if every thing is OK
    if (isEmailValid) navigate('/checkemail');
  }
  return (
    <section className="bg-white h-screen">
      <div className="container mx-auto px-6 h-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-6 w-full max-w-[480px]">
          <img src={resetPasswordImg} alt="Reset"
            className='w-[125px] h-[125px] mb-6' />
          <h3 className='text-black font-bold text-xl sm:text-2xl'>Forgot Your Password</h3>
          <p className='text-neutral-500 text-center text-base capitalize max-w-[300px]'>To reset your password, please enter your email adress.</p>
          
          <form onSubmit={validateEmail}
            className='w-full flex flex-col gap-5'>
              {/* email field */}
            <div>
              <div className={`flex items-center justify-center gap-1 w-full pr-3 border relative
                ${validEmail ? 'border-neutral-300' : 'border-red-500'}
                rounded-lg h-[50px] focus-within:border-black group ease-linear duration-200`}>
                <label htmlFor="email"
                  className={`absolute top-0 translate-y-[-50%] left-3 bg-white px-1 text-neutral-500 text-sm ease-linear duration-200
                    ${validEmail ? 'group-focus-within:text-black' : 'text-red-500'}`}>
                  Email
                </label>
                <input type="email" name='email' id='email' placeholder='example@gmail.com'
                  value={emailInput} onChange={(e) => setEmailInput(e.target.value)}
                  className='outline-none h-full rounded-lg flex-1 pl-3 placeholder:text-sm' />
                <MdEmail className={`text-neutral-500 cursor-pointer text-xl ease-linear duration-200
                  ${validEmail ? 'group-focus-within:text-black' : 'text-red-500'}`} />
              </div>
              <span className={`${emailError === '' ? 'hidden' : ''} text-xs pl-3 ${emailError === 'Valid Email' ? 'text-green-500' : 'text-red-500'}`}>
                {emailError}
              </span>
            </div>
            <button type='submit'
              className='text-white bg-black w-full rounded-md h-[40px] flex items-center justify-center'>
              Reset password
            </button>
          </form>

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

export default PasswordReset

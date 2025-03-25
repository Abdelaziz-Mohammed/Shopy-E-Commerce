import supabase from '../../supabaseclient';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// react-select for drop-downs
import Select from 'react-select';
// images
import googleImg from '../../assets/images/google-logo.svg';
// react icons
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

function Signup() {
  const navigate = useNavigate();
  // password Show/Hide Toggler
  const [showPassword, setShowPassword] = useState(false);
  // input fields' values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedUserType, setSelectedUserType] = useState('Client');
  // bool -> validate
  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  // error messages
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const [signupError, setSignupError] = useState('');
  // allowed e-mails
  const allowedDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com'];
  // user types (role)
  const userTypes = ['Client', 'Seller', 'Transporter'];
  const userTypesOptions = userTypes.map(
    userType => ({
      value: userType,
      label: userType
    })
  );

  // validation and add new use to db
  async function handleSignup() {
    setLoading(true);
    setSignupError('');

    // set local validators
    const isNameValid = name.length >= 3 && name.length <= 50 && /^[A-Za-z\s]+$/.test(name.trim());
    const isEmailValid = email.length > 0 && email.length <= 100 && (/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/).test(email.trim());
    const isPasswordValid =
      password.length >= 8 &&
      (/[A-Z]/).test(password) &&
      (/[a-z]/).test(password) &&
      (/\d/).test(password) &&
      (/[@$!%*?&]/).test(password);
    
    // set name error messages
    if (!isNameValid) {
      setNameError(
        name.length === 0 ? 'Name is required' :
        name.length < 3 ? 'Name must be at least 3 characters long' :
        name.length > 50 ? 'Name must not exceed 50 characters' :
        'Name should contain only letters and spaces'
      );
    }
    else {
      setNameError('Valid Name');
    }
    
    // set email error messages
    const emailDomain = email.includes('@') ? email.split('@')[1] : '';
    if (!isEmailValid || !allowedDomains.includes(emailDomain)) {
      setEmailError(
        email.length === 0 ? 'Email is required' :
        email.length > 100 ? 'Email must not exceed 100 characters' :
        !(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/).test(email.trim()) ? 'Invalid email format (example@gmail.com)' :
        !allowedDomains.includes(emailDomain) ? `Invalid domain name: ${emailDomain}` : ''
      );
    }
    else {
      setEmailError('Valid Email');
    }
    
    // set password error messages
    if (!isPasswordValid) {
      setPasswordError(
        password.length === 0 ? 'PAssword is required' :
        password.length < 8 ? 'Password must be at least 8 characters long' :
        !(/[A-Z]/).test(password) ? 'Password must include at least one uppercase letter' :
        !(/[a-z]/).test(password) ? 'Password must include at least one lowercase letter' :
        !(/\d/).test(password) ? 'Password must include at least one number' :
        !(/[@$!%*?&]/).test(password) ? 'Password must include at least one special character (@$!%*?&)' : ''
      );
    }
    else {
      setPasswordError('Valid Password');
    }
    
    // set valid booleans
    setValidName(isNameValid);
    setValidEmail(isEmailValid);
    setValidPassword(isPasswordValid);

    // Prevent signup if invalid
    if (!isNameValid || !isEmailValid || !isPasswordValid) {
      setLoading(false);
      return;
    }

    // send user data if everything is OK
    try {
      // Sign up the user using Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password
      });
  
      if (authError) throw authError;
      if (!authData || !authData.user) throw new Error('User signup failed');

      // Set user data in local storage
      // localStorage.setItem('user', JSON.stringify(authData.user));
      
      const { error: dbError } = await supabase.from('users').insert([
        {
          id: authData.user.id, // Store Supabase user ID
          name,
          email,
          role: selectedUserType === 'Client' ? 1 : selectedUserType === 'Seller' ? 2 : 3
        }
      ]);

      if (dbError) throw dbError;
    }
    catch(error) {
        console.error('SignUp Error:', error.message);
        setSignupError(
          error.message === 'duplicate key value violates unique constraint "users_id_key"' ? 'This user already exists' :
          error.message === 'Invalid email or password' ? 'Invalid email or password' : error.message
        );
    }
    finally {
        setLoading(false);
    }
  }
  
  // handle continue with google
  async function handleGoogleSignIn() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
  
    if (error) {
      console.error('Google Sign-In Error:', error.message);
      return;
    }

    if (data?.user) {
      const { id, email, user_metadata } = data.user;

      // isert user into users table in db if they are new
      const { error: dbError } = await supabase.from('users').upsert([
        {
          id,
          email,
          name: user_metadata?.full_name || '', // get name from google
          role: 1, // default role 'Client'
        }
      ]);

      if (dbError) {
        console.error('Database Insert Error:', dbError.message);
      }
    }
  };
  return (
    <section className="bg-white h-screen">
      <div className="container mx-auto px-6 h-full flex items-center justify-center">
        <div className='flex flex-col gap-5 border border-neutral-300 rounded-lg px-5 py-12 w-full max-w-[480px] shadow-lg'>
          {/* heading */}
          <p className='text-black text-base font-medium'>Start your journey</p>
          <h3 className="text-black font-bold text-2xl sm:text-3xl">Sign up to Shopy</h3>
          {/* continue with google */}
          <button onClick={handleGoogleSignIn}
            className='flex items-center justify-center gap-3 border border-neutral-300 rounded-lg h-[40px] cursor-pointer 
            hover:border-neutral-500 hover:bg-neutral-50 ease-linear duration-200'>
            <img src={googleImg} alt="Google"
              className='w-6 h-6'/>
            <span className='font-medium text-black'>Continue with google</span>
          </button>
          {/* --or-- */}
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
          {/* user type field */}
          <div className='flex flex-col gap-1'>
            <Select
              options={userTypesOptions}                      
              value={{value: selectedUserType, label: selectedUserType}}
              onChange={(selected) => setSelectedUserType(selected.value)}
              styles={{
                option: (provided, state) => ({
                  ...provided,
                  // Add bottom border color only for hovered item
                  backgroundColor: state.isFocused ? '#f5f5f5' : 'white',
                  color: state.isFocused ? "#C59B2D" : "black",
                  padding: 10,
                }),
                control: (provided, state) => ({
                  ...provided,
                  borderColor: state.isFocused ? '#737373' : '#e5e5e5',
                  "&:hover": { borderColor: '#737373' },
                  boxShadow: 'none'
                }),
                menuList: (provided) => ({
                  ...provided,
                  maxHeight: '180px',
                  overflowY: 'auto'
                })
              }}
            />
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
          {/* signup error message */}
          <div className='text-red-500 text-sm pl-3 pt-2'>
            {signupError}
          </div>
          {/* signup button */}
          <button
            onClick={handleSignup}
            disabled={loading}
            className='text-white bg-black w-full rounded-md h-[40px] flex items-center justify-center'>
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
          {/* do not have an account */}
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

import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Illustration from '../assets/images/Illustration.png'
import Logo from '../assets/images/Logo.png'
import Google from '../assets/images/Google.png'

const Registration = () => {

  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true)
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      navigate('/home')
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className='max-w-[90%] max-h-[70%] p-1 rounded-[34px] border-white bg-white flex flex-col justify-center items-center lg:max-w-[1536px] lg:max-h-[620px] lg:flex-row lg:p-[10px] 2xl:h-[1080px]'>

      {/* left section */}
      <img src={Illustration} alt="illustration" className='min-w-[60%] rounded-tr-[34px] rounded-tl-[34px] lg:rounded-bl-[34px] lg:rounded-tl-[34px] lg:rounded-tr-none 2xl:h-full' />

      {/* right section */}
      <div className='w-full flex flex-col justify-center items-start p-6 lg:p-0 2xl:w-[811px] 2xl:px-[150px]'>

        {/* upper section */}
        <img src={Logo} alt="logo" className='w-[32px] h-[32px]' />
        <h1 className='text-xl text-[#525252] font-bold mt-4 lg:text-2xl'>Register your Account</h1>
        <h4 className='text-[8px] text-[#525252] font-normal mt-1 lg:text-[10px]'>See what is going on with your business</h4>

        {/* google button */}
        <div className='w-full h-[32px] mb-2 mt-4 flex items-center justify-center border border-[#E8E8E8] rounded cursor-pointer lg:mt-[18px] lg:mb-4 lg:h-[45px]'>
          <img src={Google} alt="icon" className='w-[16px] h-[16px] xl:w-[25px] xl:h-[25px]' />
          <h4 className='ml-2 text-[12px] font-bold text-[#828282] lg:text-[14px]'>Continue with Google</h4>
        </div>

        {/* divider section */}
        <h5 className='text-[8px] font-semibold text-[#A1A1A1] self-center xl:text-[12px]'><span className='text-[#DDDDDD]'>-------------</span> or Register with Email <span className='text-[#DDDDDD]'>-------------</span></h5>

        {/* form section */}
        <form onSubmit={handleSubmit} className='w-full flex flex-col mt-2 mb-4 lg:mt-4 lg:mb-8 2xl:mt-6'>

          <div className='flex items-center text-[8px] 2xl:text-[14px]'>
            <label className='font-semibold text-[#828282] mb-1'>Name</label>
            <span className='text-red-500 ml-3'>{formErrors.username}</span>
          </div>
          <input type="text" placeholder='mail@abc.com' name='username' value={formValues.username} onChange={handleChange} className='w-full h-5 text-[#525252] text-[10px] border border-[#DED2D9] rounded mb-2 placeholder-[#E0E0E0] py-1 pl-[10px] focus:outline-[#7F265B] lg:mb-4 lg:text-sm lg:h-[20px] 2xl:h-[32px]' />


          <div className='flex items-center text-[8px] 2xl:text-[14px]'>
            <label className='font-semibold text-[#828282] mb-1'>Email</label>
            <span className='text-red-500 ml-3'>{formErrors.email}</span>
          </div>
          <input type="email" placeholder='mail@abc.com' name='email' value={formValues.email} onChange={handleChange} className='w-full h-4 text-[#525252] text-[10px] border border-[#DED2D9] rounded mb-2 placeholder-[#E0E0E0] py-1 pl-[10px] focus:outline-[#7F265B] lg:mb-4 lg:text-sm lg:h-[20px] 2xl:h-[32px]' />

          <div className='flex items-center text-[8px] 2xl:text-[14px]'>
            <label className='font-semibold text-[#828282] mb-1'>Password</label>
            <span className='text-red-500 ml-3'>{formErrors.password}</span>
          </div>
          <input type="password" placeholder='password@123' name='password' value={formValues.password} onChange={handleChange} className='w-full h-4 text-[#525252] text-[10px] border border-[#DED2D9] rounded mb-2 placeholder-[#E0E0E0] py-1 pl-[10px] focus:outline-[#7F265B] lg:mb-4 lg:text-sm lg:h-[20px] 2xl:h-[32px]' />

          <button className='mt-6 w-full h-8 text-[10px] bg-[#7F265B] flex justify-center items-center rounded-[6px] text-white font-extrabold cursor-pointer lg:h-9 xl:h-[50px] xl:text-lg'>Register</button>
        </form>

        {/* bottom section */}
        <Link to='/' className='self-center'><h4 className='text-[12px] text-[#828282] font-normal'>Already have account? <span className='text-[#7F265B] font-semibold cursor-pointer'>Login here.</span></h4></Link>
      </div>
    </div>
  )
}

export default Registration
import React, { useState } from 'react';

const Contact = () => {
  const [formvalues, setFormvalues] = useState({ name: '', email: '', mesg: '' });
  const [errors, setErrors] = useState({ name: '', email: '', mesg: '' });
  const [submitted, setSubmitted] = useState(false);


  const handleInput = (label: string, value: string) => {
    setFormvalues({ ...formvalues, [label]: value });
    if (!value)
      setErrors({ ...errors, [label]: `${label} cannot be blank.` });
    else
      setErrors({ ...errors, [label]: '' });

    //validate email
    if (label === 'email') {
      if (!(/\S+@\S+\.\S+/.test(value))) {
        setErrors({ ...errors, [label]: 'Invalid Email' });
      } else
        setErrors({ ...errors, [label]: '' });
    }

  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if ((Object.values(formvalues).every(value => value !== '')) && (Object.values(errors).every(value => value === '')))
      setSubmitted(true);
  }


  if (submitted) {
    return (
      <div className='flex flex-col justify-center text-center p-4 space-y-8 text-white'>
        <h1 className='text-4xl font-bold md:text-6xl lg:text-7xl'>Contact</h1>       
        <h2 className='text-2xl font-semibold'> Your form is submitted!</h2>
        <input type="submit" value="OK" onClick={() => { setFormvalues({ name: '', email: '', mesg: '' }); setSubmitted(false) }} />
      </div>

    )
  }
  else
    return (
      <>
        <div className='flex flex-col justify-center text-center p-4 space-y-8 text-white md:px-[20%] lg:px-[10%] lg:flex-row lg:gap-10 lg:text-left'>
          <div className='flex flex-col justify-center text-center p-4 space-y-8 lg:text-left '>
            <h1 className='text-4xl font-bold md:text-6xl lg:text-7xl'>Contact</h1>
            <p className='text-base'>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
          </div>
          <form className="text-left lg:w-3/4 " onSubmit={handleSubmit} >

            <div className='mb-10'>
              <input type="text" name='name' placeholder='NAME' className='bg-bgcustom text-custom mb-5 outline-none pl-4' onChange={(e) => handleInput('name', e.target.value)} onFocus={(e) => handleInput('name', e.target.value)} value={formvalues.name} />
              <div className={`h-0.25  ${errors.name ? 'bg-red-500' : 'bg-greenLineColor'} w-full `}></div>
              {errors.name && <div className='text-red-500'>{errors.name}</div>}
            </div>

            <div className='mb-10' >
              <input type="email" name="email" id="email" placeholder='EMAIL' className='bg-bgcustom text-custom mb-5 outline-none pl-4' onChange={(e) => handleInput('email', e.target.value)} onFocus={(e) => handleInput('email', e.target.value)} value={formvalues.email} />
              <div className={`h-0.25 ${errors.email ? 'bg-red-500' : 'bg-greenLineColor'} w-full `}></div>
              {errors.email && <div className='text-red-500'>{errors.email}</div>}
            </div>

            <div className='mb-10'>
              <textarea name="message" id="message" placeholder='MESSAGE' className='bg-bgcustom text-custom mb-5 outline-none pl-4' onChange={(e) => handleInput('mesg', e.target.value)} onFocus={(e) => handleInput('mesg', e.target.value)} value={formvalues.mesg}></textarea>
              <div className={`h-0.25 ${errors.mesg ? 'bg-red-500' : 'bg-greenLineColor'} w-full `}></div>
              {errors.mesg && <div className='text-red-500'>{errors.mesg}</div>}
            </div>

            <div className='flex justify-end'>
              <button type="submit" className='uppercase text-1xl font-semibold tracking-widest pb-2 border-b-2 border-greenLineColor '>send message</button>
            </div>
          </form>
        </div>
        <div className="h-0.25 bg-white w-full mt-16 "></div>
      </>
    )
}

export default Contact;
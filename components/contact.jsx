import React, { useState } from 'react';
import { sendEmail } from '@/utils/send-email';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const onSubmit = (data) => {
    sendEmail(data);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    
    <div className='grid grid-cols-1 py-12'>
        <form onSubmit={onSubmit}>
            <div className='mb-5 mt-8 '>
                <label htmlFor='name' className='mb-3 block text-base font-medium text-white'>Full Name</label>
                <input
                type='text'
                name='name'
                placeholder='Full Name'
                value={formData.name}
                onChange={handleChange}
                className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='email' className='mb-3 block text-base font-medium text-white'>Email Address</label>
                <input
                type='email'
                name='email'
                placeholder='example@domain.com'
                value={formData.email}
                onChange={handleChange}
                className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='message' className='mb-3 block text-base font-medium text-white'>Message</label>
                <textarea
                rows={4}
                name='message'
                placeholder='Type your message'
                value={formData.message}
                onChange={handleChange}
                className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                />
            </div>
            <div>
                <button type='submit' className='hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none'>Submit</button>
            </div>
        </form>
    </div>
  );
};

export default Contact;

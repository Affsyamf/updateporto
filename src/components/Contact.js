import React, { useState } from 'react';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [errorShow, setErrorShow] = useState(false);
  const [errorNetwork, setErrorNetword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = (event) => {
    event.preventDefault();
    setLoading(true);
    if (
      name.trim().length > 0 &&
      email.trim().length > 0 &&
      subject.trim().length > 0 &&
      message.trim().length
    ) {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('subject', subject);
      formData.append('message', message);
      fetch('https://getform.io/f/<code>', {
        method: 'POST',
        body: formData,
      })
        .then(
          (response) => (window.location.href = 'https://getform.io/thank-you')
        )
        .catch((error) => {
          setLoading(false);
          setErrorNetword(true);
          setTimeout(() => {
            setErrorNetword(false);
            setEmail('');
            setName('');
            setSubject('');
            setMessage('');
          }, 2000);
        });
    } else {
      setLoading(false);
      setErrorShow(true);
      setTimeout(() => {
        setErrorShow(false);
      }, 2000);
    }
  };

  return (
    <div
      name='contact'
      className='w-full px-3 py-8 md:p-[3%] text-[#fff4e0] bg-[#052123] flex justify-center items-center '
    >
      <form
        onSubmit={handleSendMessage}
        className='flex flex-col max-w-[600px] w-full placeholder-[#fff4e0]'
      >
        <div className='text-left sm:text-center pb-8'>
          <p className='text-4xl font-medium font-[Prata] inline border-b-2 border-[#fff4e0]'>
            Contact
          </p>
          <div className='my-5'>
            <p>
              Submit the form below or shoot me an email - afiffauzi2016@gmail.com
            </p>
          </div>
        </div>
        {errorShow && (
          <p className='text-center text-red-500 text-sm italic'>
            All fields are required.
          </p>
        )}
        {errorNetwork && (
          <p className='text-center text-red-500 text-sm italic'>
            Something went wrong! Please try again later.
          </p>
        )}
        <input
          className='p-2 bg-transparent text-[#fff4e0] focus:outline-none border-b-[2px] border-[#fff4e0] '
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input
          className='mt-4 p-2 bg-transparent focus:outline-none border-b-[2px] border-[#fff4e0] '
          type='email'
          placeholder='Email'
          name='email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className='mt-4 p-2 bg-transparent focus:outline-none border-b-[2px] border-[#fff4e0] '
          type='text'
          placeholder='Subject'
          name='subject'
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        />
        <textarea
          className='mt-4 p-2 bg-transparent focus:outline-none border-b-[2px] border-[#fff4e0]'
          placeholder='Message'
          name='message'
          rows='10'
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        {!loading ? (
          <button
            type='submit'
            className='border-2 border-[#fff4e0]  px-4 py-2  hover:bg-[#fff4e0] hover:text-[#052123] my-6 mx-auto flex items-center justify-center w-full'
          >
            Send Message
          </button>
        ) : (
          <div className='text-center flex justify-center my-6' role='status'>
            <svg
              aria-hidden='true'
              className='mr-2 w-8 h-8 text-[#052123] animate-spin dark:text-[] fill-[#fff4e0]'
              viewBox='0 0 100 101'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                fill='currentColor'
              ></path>
              <path
                d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                fill='currentFill'
              ></path>
            </svg>
            <span className='sr-only '>Loading...</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;

import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-900 pt-20 pb-10 text-white'>
      <div className="container mx-auto px-6">
        <div className='grid grid-cols-1 md:grid-cols-3 gap-16'>
          {/* Explore More Section */}
          <div className='flex flex-col gap-4 text-center'>
            <h2 className='text-2xl font-semibold'>Explore More</h2>
            <p className='text-gray-300 font-medium text-base'>
              Discover the best in fitness, wellness, and lifestyle content. Stay updated with the latest trends, offers, and more.
            </p>
          </div>

          {/* Newsletter Subscription */}
          <div className='flex flex-col gap-4 text-center'>
            <h2 className='text-2xl font-semibold'>Subscribe To Our Newsletter</h2>
            <input 
              type="email" 
              placeholder='Your email address' 
              className='px-4 py-3 text-gray-900 font-medium border-none outline-none rounded-md placeholder:text-gray-600 transition-all focus:ring-2 focus:ring-indigo-600' 
            />
            <button 
              type='submit' 
              className='px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md transition-all ease-in-out hover:bg-indigo-700 hover:scale-105'>
              Submit
            </button>
          </div>

          {/* Social Media Links */}
          <div className='flex flex-col gap-4 text-center'>
            <h2 className='text-2xl font-semibold'>Follow Us</h2>
            <ul className='space-y-2'>
              <li>
                <a href="#" className='text-lg text-gray-300 hover:text-indigo-500 transition-all'>Twitter</a>
              </li>
              <li>
                <a href="#" className='text-lg text-gray-300 hover:text-indigo-500 transition-all'>Facebook</a>
              </li>
              <li>
                <a href="#" className='text-lg text-gray-300 hover:text-indigo-500 transition-all'>Instagram</a>
              </li>
              <li>
                <a href="#" className='text-lg text-gray-300 hover:text-indigo-500 transition-all'>LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='border-t border-gray-700 mt-10 pt-6 text-center'>
          <p className='text-gray-400'>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

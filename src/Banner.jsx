import React from 'react';
import contact from './assets/BackgroundFolder/contact-image.png';
import home from './assets/BackgroundFolder/home.png';
import about from './assets/BackgroundFolder/About.png'
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"


function Banner() {

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {
        location.pathname == '/Login' || location.pathname == '/Register' ? "" :
          <div id='Banner' className='min-h-screen flex Home items-center md:flex-row flex-col gap-2 px-[2%] '>

            <motion.div
              className='md:w-[40%]'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <div >
                <br />
                {
                  location.pathname == '/' &&
                  <>
                    <h2 className='text-white font-bold text-5xl leading-snug tracking-widest'>Effortlessly Organize Your Tasks , Your Ultimate Task Management Solution Awaits!</h2>
                    <button onClick={()=> navigate('/Dashboard')} className='px-4 py-2 font-medium border-2 border-white text-white mt-3 active:bg-black'>Let's Explore</button>
                  </>
                  ||
                  location.pathname == '/About' &&
                  <>
                    <h1 className='text-white font-bold text-5xl leading-snug tracking-widest text-center'> About us</h1>
                    <h2 className='text-center text-base font-medium text-white'>Home/About</h2>

                  </>

                  ||
                  location.pathname == '/Contact' &&
                  <>
                    <h1 className='text-white font-bold text-5xl leading-snug tracking-widest text-center'>Contact us</h1>
                    <h2 className='text-center text-base font-medium text-white'>Home/Contact</h2>

                  </>
                }
              </div>

            </motion.div>



            <div className='md:w-[55%] '>
              <br />
              <img src={`${location.pathname == '/' && home || location.pathname == '/Contact' && contact || location.pathname == '/About' && about}`} className='max-w-[450px] float-right bannerAnimation ' />
            </div>

          </div>
      }







    </>
  )
}

export default Banner
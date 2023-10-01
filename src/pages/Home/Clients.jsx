import React from 'react';
import google from '../../assets/clients/google.svg'
import amazon from '../../assets/clients/amazon1.svg'
import dribble from '../../assets/clients/dribbble.svg'
import linkedIn from '../../assets/clients/linkedin.svg'
import spotify from '../../assets/clients/spotify.svg'
import medium from '../../assets/clients/medium.svg'

const Clients = () => {
    return (
        <div className='container'>
            <div className='text-center lg:mt-40'>
                <h1 className='text-3xl font-bold text-[#185abc]'>Happy clients</h1>
                <p className='text-gray-400 py-4 w-3/4 md:w-2/3 lg:w-1/3 mx-auto'>Lorem ipsum dolor sit amet consectetur. Tortor egestas feugiat sed ridiculus et eget nunc. Ultrices tempus tincidunt eget.</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 justify-items-center mt-10 sm:mt-16 md:mt-20 lg:mt-28 mb-20 sm:mb-32  md:mb-40 lg:mb-48 '>
                <div className='w-fit h-24 flex items-start pt-2'>
                    <img className='w-[110px] sm:w-[130px] md:w-[150px]' src={google} alt="" />
                </div>
                <div className='w-fit h-24 flex items-start pt-2'>
                    <img className='w-[110px] sm:w-[130px] md:w-[150px]' src={dribble} alt="" />
                </div>
                <div className='w-fit h-24 flex items-start pt-2'>
                    <img className='w-[110px] sm:w-[130px] md:w-[150px]' src={linkedIn} alt="w-[200px]" />
                </div>
                <div className='w-fit h-24 flex items-start pt-2'>
                    <img className='w-[110px] sm:w-[130px] md:w-[150px]' src={amazon} alt="" />
                </div>
                <div className='w-fit h-24 flex items-start pt-2'>
                    <img className='w-[110px] sm:w-[130px] md:w-[150px]' src={medium} alt="" />
                </div>
                <div className='w-fit h-28 flex items-start'>
                    <img className='w-[110px] sm:w-[130px] md:w-[150px]' src={spotify} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Clients;
import { faArrowLeft, faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const WorkTogether = () => {
    return (
            <div className='py-8 sm:py-12 md:py-20 text-center text-white bg-[#011c2a]'>
                <h1 className='font-bold text-xl sm:text-2xl md:text-3xl'>Do You Have project Idea?<br />Let's discuss your project!</h1>
                <div className='w-3/4 lg:w-1/4 mx-auto mt-6 text-gray-400 mb-8 sm:mb-0 text'>
                    <p className=''>Lorem ipsum dolor sit amet consectetur. Malesuada at quis leo pellentesque quam amet fermentum. Venenatis enim tellus.</p>
                </div>
                <button className='mt-4 py-2 px-4 bg-[#185ABC] rounded text-white font-semibold text-base flex gap-2 mx-auto'>Let's Work Together <FontAwesomeIcon className='my-auto' icon={faArrowRight} /></button>
            </div>
    );
};

export default WorkTogether;
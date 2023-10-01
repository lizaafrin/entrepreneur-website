import React from 'react';
import notes from '../../assets/workProcess/notes.png'
import device from '../../assets/workProcess/device.png'
import business from '../../assets/workProcess/business.png'
import pencil from '../../assets/workProcess/vector.png'

const WorkProcess = () => {
    return (
        <div className='container'>
            <div className='flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 my-24 sm:my-28 md:my-32'>
                <div className='w-full md:w-1/2 my-auto text-justify'>
                    <h1 className='text-[#185abc] text-3xl font-bold mb-6 text-center md:text-left'>Work Process</h1>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rerum itaque esse rem voluptatibus, molestiae laudantium est veritatis excepturi! Tenetur, consequatur doloremque sit tempore pariatur tempora voluptatibus, reprehenderit minus vel, cumque eum! Suscipit nihil repellat totam. Dolorem quia culpa tempore eligendi iure, aperiam nesciunt. Quae hic odit iste in amet!</p>
                    <br />
                    <p className='text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem voluptatum vero fuga porro perspiciatis inventore consectetur aliquam laborum nobis!</p>
                </div>
                <div className='w-full md:w-1/2 mx-4 md:mx-0'>
                    <div className='grid grid-cols-2 gap-10 md:gap-4'>
                        <div className='cursor-pointer hover:shadow-lg hover:py-8 md:hover:py-4 hover:px-8 md:hover:px-4 hover:lg-px-8 hover:-translate-x-4 hover:rounded-md'>
                            <img className='bg-[#cce6fa] px-2 py-2 rounded hover:bg-[#185abc] mb-4' src={notes} alt="" />
                            <h3 className='font-bold text-lg'>1. Research</h3>
                            <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
                        </div>
                        <div className='cursor-pointer hover:shadow-lg hover:py-8 md:hover:py-4 hover:px-8 md:hover:px-4 hover:lg-px-8 hover:-translate-x-4 hover:rounded-md'>
                            <img className='bg-[#cce6fa] px-2 py-2 rounded  hover:bg-white mb-4' src={business} alt="" />
                            <h3 className='font-bold text-lg'>2. Analyze</h3>
                            <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
                        </div>
                        <div className='cursor-pointer hover:shadow-lg hover:py-8 md:hover:py-4 hover:px-8 md:hover:px-4 hover:lg-px-8 hover:-translate-x-4 hover:rounded-md'>
                            <img className='bg-[#cce6fa] px-2 py-2 rounded  hover:bg-white mb-4' src={pencil} alt="" />
                            <h3 className='font-bold text-lg'>3. Design</h3>
                            <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
                        </div>
                        <div className='cursor-pointer hover:shadow-lg hover:py-8 md:hover:py-4 hover:px-8 md:hover:px-4 hover:lg-px-8 hover:-translate-x-4 hover:rounded-md'>
                            <img className='bg-[#cce6fa] px-2 py-2 rounded  hover:bg-white mb-4' src={device} alt="" />
                            <h3 className='font-bold text-lg'>4. Launce</h3>
                            <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;
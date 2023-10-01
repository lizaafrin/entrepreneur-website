import React from 'react';
import bannerImg from '../../assets/BannerSection/unsplash_wKOKidNT14w.png';
import bannerBg from '../../assets/BannerSection/Group 1000001768.png';
import bannerImg1 from '../../assets/BannerSection/Rectangle 30.png'
import bannerBg2 from '../../assets/BannerSection/Ellipse 4.png'
import bannerBg3 from '../../assets/BannerSection/Ellipse 2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FaBeer, FaBehance, FaFacebookF, FaFirefoxBrowser, FaGithub, FaGlobe, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='container'>
            <div className='flex flex-col sm:flex-row gap-4'>
                <div className='w-full sm:w-2/5 md:w-1/2 mt-14 md:my-auto lg:px-4 2xl:px-0 flex flex-col'>
                    <h1 className='text-3xl sm:text-4xl font-semibold'>Hello, I'm Soykot Hosen</h1>
                    <p className='mt-8 text-justify'>Lorem ipsum dolor sit amet consectetur. Magna nulla fermentum metus sed laoreet id risus. Nisl amet ac ut vitae egestas scelerisque nec libero. Mattis gravida nibh suspendisse maecenas sed. Fringilla consectetur at.</p>

                    <button className='my-4 py-2 px-4 bg-[#185ABC] rounded text-white font-semibold text-base w-fit'>Say Hello!</button>
                </div>
                <div className=' w-full sm:w-3/5 md:w-1/2 mb-4 md:mb-0 flex'>
                    <div className='md:w-[600px] md:h-[575px]  py-4 sm:py-10 md:py-0 mx-auto'>
                        <img className='relative lg:h-[470px] md:h-[360px] h-[340px]' src={bannerBg} alt="" />
                        <img className='absolute top-80 sm:top-10  lg:h-[570px] md:h-[450px] h-[400px]' src={bannerImg} alt="" />
                    </div>
                </div>
            </div>

            <div className='flex flex-row gap-1 my-10 sm:mt-10 md:mt-0 justify-center sm:justify-start text-center'>
                <div className='bg-[#e8f5ff] px-3 sm:px-8 py-2 w-1/3 sm:w-52'>
                    <h1 className='font-bold text-xl text-center'>15 Y.</h1>
                    <small className='text-gray-400'>Experience</small>
                </div>
                <div className='bg-[#e8f5ff] px-3 sm:px-8 py-2 w-1/3 sm:w-52'>
                    <h1 className='font-bold text-xl text-center'>250+</h1>
                    <small className='text-gray-400'>Project Completed</small>
                </div>
                <div className='bg-[#e8f5ff] px-3 sm:px-8 py-2 w-1/3 sm:w-52'>
                    <h1 className='font-bold text-xl text-center'>58.</h1>
                    <small className='text-gray-400'>Happy Client</small>
                </div>
            </div>

            <div className='sm:mt-16 md:mt-28 lg:mt-40 mb-20 sm:mb-24 md:mb-28 lg:mb-36 card pt-8 pb-16 shadow-md'>
                <div className='flex flex-col sm:flex-row md:items-center gap-4'>
                    <div className='w-full sm:w-2/5 md:w-1/2 flex flex-col justify-center items-center relative'>
                        <img className='' src={bannerImg1} alt="" />
                        <div className='absolute -bottom-6 sm:bottom-20 md:-bottom-5 bg-white text-2xl text-blue-500 flex justify-around rounded shadow max-w-xs w-3/4 lg:w-1/2 py-2 px-4'>
                            <a href='' className='bg-white rounded-md px-1 py-2 hover:text-white hover:-translate-y-1 transition-all hover:bg-blue-400 cursor-pointer duration-300'><FaFacebookF /></a>
                            <a href="" className='bg-white rounded-md px-1 py-2 hover:text-white hover:-translate-y-1 transition-all hover:bg-blue-400 cursor-pointer duration-300'> <FaGlobe /></a>
                            <a href="" className='bg-white rounded-md px-1 py-2 hover:text-white hover:-translate-y-1 transition-all hover:bg-blue-400 cursor-pointer duration-300'><FaLinkedin /></a>
                            <a href="" className='bg-white rounded-md px-1 py-2 hover:text-white hover:-translate-y-1 transition-all hover:bg-blue-400 cursor-pointer duration-300'><FaInstagramSquare /></a>
                            <a href="" className='bg-white rounded-md px-1 py-2 hover:text-white hover:-translate-y-1 transition-all hover:bg-blue-400 cursor-pointer duration-300'> <FaBehance /></a>
                        </div>
                    </div>
                    <div className='w-full sm:w-3/5 md:w-1/2 my-0 md:my-auto mt-8'>
                        <div className='w-full px-4 md:px-8 text-justify'>
                            <h1 className='font-bold text-2xl md:text-3xl pb-5 text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, at.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut cumque sint ab provident, consequatur expedita nihil deserunt cum voluptatibus molestias, eaque soluta minima eos quae, ullam esse impedit cupiditate officia?</p>
                            <br />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum nostrum facilis vero esse quae fugiat, aperiam debitis voluptas corporis, maiores quaerat sed enim, minus commodi.</p>

                            <div className='flex gap-4 mt-4'>
                                <button className='my-4 py-2 px-4 bg-[#185ABC] rounded text-white font-semibold text-base'>My Project</button>
                                <a download='' href='' className=' border border-blue-500 my-4 py-2 px-4 rounded cursor-pointer'><FontAwesomeIcon icon={faDownload} /> Download CV</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import location from '../../assets/Project/location.png'
import arrow from '../../assets/Project/Paper Plane.png'
import { FaBehance, FaEnvelope, FaEnvelopeOpen, FaFacebookF, FaGlobe, FaInstagramSquare, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const ProjectForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.floating_name?.value;
        const email = form.floating_email?.value;
        const location = form.floating_Location?.value;
        const budget = form.floating_Budget?.value;
        const subject = form.floating_Subject?.value;
        const message = form.floating_Message?.value;
        console.log(name, email, location, budget, subject, message);
    };

    return (
        <div className=''>
            <div className='flex flex-col md:flex-row my-10 md:my-20 lg:my-24 lg:m-20 gap-6 bg-white shadow pt-10 md:py-6 lg:pt-20 px-2 md:px-10'>
                <div className='w-full md:w-1/2'>
                    <h1 className='text-3xl font-bold text-[#185abc] mb-4'>Let's discuss your Project</h1>
                    <p className='w-full md:w-3/4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ea pariatur magnam debitis iste temporibus.</p>
                    <div className='flex flex-row gap-4 items-center mt-8 card cursor-pointer hover:shadow hover:p-4 md:hover:w-2/3 hover:-translate-x-4'>
                        <FaMapMarkerAlt className='text-5xl bg-[#f6ebff] rounded  py-2 px-1 text-[#2875e9] hover:text-white hover:bg-[#185abc]'></FaMapMarkerAlt>
                        <div>
                            <h4 className='font-semibold text-sm'>Address</h4>
                            <small>Rajshahi</small>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4 items-center mt-8 card cursor-pointer hover:shadow hover:p-4 md:hover:w-2/3 hover:-translate-x-4'>
                        <FaEnvelope className='text-5xl bg-[#f6ebff] rounded  py-2 px-1 text-[#2875e9] md:hover:text-6xl hover:text-white hover:bg-[#185abc]'></FaEnvelope>
                        <div>
                            <h4 className='font-semibold text-sm'>My Email</h4>
                            <small>mymail@gmail.com</small>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4 items-center mt-8 card cursor-pointer hover:shadow hover:p-4 md:hover:w-2/3 hover:-translate-x-4'>
                        <FaPhoneAlt className='text-5xl bg-[#f6ebff] rounded  py-2 px-1 text-[#2875e9] hover:text-white hover:bg-[#185abc]'></FaPhoneAlt>
                        <div>
                            <h4 className='font-semibold text-sm'>Call me now</h4>
                            <small>0170000100</small>
                        </div>
                    </div>
                    <div className='bg-white text-2xl text-blue-500 flex justify-around rounded shadow max-w-xs w-full md:w-3/4 xl:w-1/2 py-2 px-4 mt-10 md:mt-8 lg:mt-12'>
                        <a href='' className='bg-white rounded-md px-1 py-2 hover:text-white hover:-translate-y-1 transition-all hover:bg-blue-400 cursor-pointer duration-300'><FaFacebookF /></a>
                        <a href="" className='bg-white rounded-md px-1 py-2 hover:text-white hover:-translate-y-1 transition-all hover:bg-blue-400 cursor-pointer duration-300'> <FaGlobe /></a>
                        <a href="" className='bg-white rounded-md px-1 py-2 hover:text-white hover:-translate-y-1 transition-all hover:bg-blue-400 cursor-pointer duration-300'><FaLinkedin /></a>
                        <a href="" className='bg-white rounded-md px-1 py-2 hover:text-white hover:-translate-y-1 transition-all hover:bg-blue-400 cursor-pointer duration-300'><FaInstagramSquare /></a>
                        <a href="" className='bg-white rounded-md px-1 py-2 hover:text-white hover:-translate-y-1 transition-all hover:bg-blue-400 cursor-pointer duration-300'> <FaBehance /></a>
                    </div>
                </div>

                <div className='mt-6 md:mt-0 md:w-1/2'>
                    <p className='text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, impedit dignissimos libero debitis laborum qui in minima placeat quos sunt.</p>
                    <form
                        onSubmit={handleSubmit}
                        className="py-4 lg:py-8 rounded-lg w-full lg:w-full md:mx-auto px-4 md:px-0"
                    >
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="name"
                                name="floating_name"
                                id="floating_name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none    focus:border-[#2875e9] peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#2875e9]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Name*
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">

                            <input
                                type="email"
                                name="floating_email"
                                id="floating_email"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none    focus:border-[#2875e9] peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_email"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#2875e9]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Email*
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="floating_Location"
                                id="floating_Location"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none    focus:border-[#2875e9] peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="floating_Location"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#2875e9]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Location*
                            </label>
                        </div>
                        <div className='flex gap-4'>
                            <div className="relative z-0 w-2/5 mb-6 group">
                                <input
                                    type="text"
                                    name="floating_Budget"
                                    id="floating_Budget"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none    focus:border-[#2875e9] peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_Budget"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#2875e9]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Budget*
                                </label>
                            </div>
                            <div className="relative z-0 w-3/5 mb-6 group">
                                <input
                                    type="text"
                                    name="floating_Subject"
                                    id="floating_Subject"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none    focus:border-[#2875e9] peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_Subject"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#2875e9]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Subject*
                                </label>
                            </div>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="floating_Message"
                                id="floating_Message"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none    focus:border-[#2875e9] peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_Message"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#2875e9]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Message*
                            </label>
                        </div>

                        <div className="text-left">
                            <button className='my-4 py-2 px-4 bg-[#185ABC] rounded text-white font-semibold text-base inline-flex'>Submit <img className='ms-3 w-6' src={arrow} alt="" /></button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProjectForm;
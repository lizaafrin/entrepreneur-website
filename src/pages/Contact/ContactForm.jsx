import React from 'react';
import arrow from '../../assets/Project/Paper Plane.png'
import { FaBehance, FaDiscord, FaEnvelope, FaEnvelopeOpen, FaFacebookF, FaGlobe, FaInstagramSquare, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ContactBg1 from '../../assets/contact/Ellipse 793.png';
import ContactBg2 from '../../assets/contact/Ellipse 794.png';

const ContactForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        // const name = form.floating_name?.value;
        // const email = form.floating_email?.value;
        // const location = form.floating_Location?.value;
        const firstName = form.first_name?.value;
        const lastName = form.last_name?.value;
        const message = form.last_name?.value;
        console.log(firstName, lastName, message);
    };

    return (
        <div className='md:container'>
            <div className='flex flex-col md:flex-row my-10 lg:m-20 gap-6 shadow-md'>
                <div className='w-full md:w-1/2 lg:w-3/4 xl:w-2/5 card bg-[#011c2a] text-white p-10 relative'>
                    <img className='absolute bottom-0 right-0' src={ContactBg1} alt="" />
                    <img className='absolute bottom-20 right-12' src={ContactBg2} alt="" />
                    
                    <h1 className='text-3xl font-bold mb-4'>Contact Information</h1>
                    <p className='text-gray-400 mb-10'>Say something to start a live chat!</p>
                    <div className='flex items-center gap-6 my-5'>
                        <FaPhoneAlt className='text-xl' />
                        <span> +01700010100</span>
                    </div>
                    <div className='flex items-center gap-6 my-5'>
                        <FaEnvelope className='text-xl' />
                        <span> demo@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-6 my-5'>
                        <FaMapMarkerAlt className='text-xl' />
                        <span className='w-2/3'> 132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
                    </div>

                    <div className='flex gap-6 mt-20 text-[#185abc] text-xl'>
                        <Link to=''>
                            <FaTwitter />
                        </Link>
                        <Link to=''>
                            <FaInstagramSquare />
                        </Link>

                        <Link to=''>
                            <FaDiscord />
                        </Link>

                    </div>
                </div>

                <div className='md:w-1/2 lg:w-4/5 xl:w-3/5 p-6'>
                    <form
                        onSubmit={handleSubmit}
                        className="py-4 lg:py-8 rounded-lg w-full lg:w-full mx-auto"
                    >
                        {/* <div className="relative z-0 w-full mb-6 group">
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
                    </div> */}
                        <div className='flex gap-4'>
                            <div className="relative z-0 w-2/5 mb-6 group">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none    focus:border-[#2875e9] peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="first_name"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#2875e9]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    First Name*
                                </label>
                            </div>
                            <div className="relative z-0 w-3/5 mb-6 group">
                                <input
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none    focus:border-[#2875e9] peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="last_name"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#2875e9]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Last Name*
                                </label>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div className="relative z-0 w-2/5 mb-6 group">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none    focus:border-[#2875e9] peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="email"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#2875e9]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Email*
                                </label>
                            </div>
                            <div className="relative z-0 w-3/5 mb-6 group">
                                <input
                                    type="number"
                                    name="phoneNum"
                                    id="phoneNum"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none    focus:border-[#2875e9] peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="phoneNum"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#2875e9]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Phone Number*
                                </label>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-lg font-bold text-[#185abc] my-4'>Select Subject</h3>
                            <div className=" flex justify-between">
                                <label className="flex gap-4 items-center">
                                    <input type="checkbox" checked="checked" className="checkbox checkbox-primary checkbox-sm" />
                                    <span className="text-primary font-semibold">General Inquiry</span>
                                </label>
                                <label className="flex gap-4 items-center">
                                    <input type="checkbox" checked="" className="checkbox checkbox-primary checkbox-sm" />
                                    <span className="text-primary font-semibold">General Inquiry</span>
                                </label>
                                <label className="flex gap-4 items-center">
                                    <input type="checkbox" checked="" className="checkbox checkbox-primary checkbox-sm" />
                                    <span className="text-primary font-semibold">General Inquiry</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <h4 className='mt-10 mb-4 text-gray-400'>Message</h4>
                            <textarea placeholder="Write Your Message" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                        </div>


                        <div className="text-left">
                            <button className='mt-8 mb-4 py-2 px-4 bg-[#185ABC] rounded text-white font-semibold text-base inline-flex'>Send Message</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
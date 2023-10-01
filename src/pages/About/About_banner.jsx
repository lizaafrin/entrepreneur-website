import React from 'react';
import bannerImg from '../../assets/BannerSection/Rectangle 30.png'
import './About_banner.css';

const About_banner = () => {
    return (
        <div className='container'>
            <div className='flex flex-col md:flex-row gap-4 md:my-14  lg:my-20 lg:pb-20 '>
                <div className='mt-14 md:mt-0 md:w-2/4 lg:w-1/2'>
                    <img className='w-2/3 md:w-full lg:w-[484px] xl:w-[620px] mx-auto md:mx-0 md:z-10' src={bannerImg} alt="" />
                </div>
                <div className='mt-10 md:mt-0 w-full md:w-1/2'>
                    <h1 className='font-bold text-xl  md:text-2xl lg:text-3xl xl:text-4xl mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo consequuntur eius rem mollitia et.</h1>
                    <p className='lg:py-6 text-justify xl:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat non cum natus corrupti harum explicabo modi voluptate autem omnis quisquam blanditiis officia consequatur, ad, recusandae debitis. Facilis recusandae ratione soluta quisquam nisi minus fuga repellat iste suscipit voluptates ipsum aperiam modi at, natus veritatis veniam deleniti doloribus sequi nesciunt totam.Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <p className='signature text-4xl md:text-5xl text-[#185abc] xl:text-6xl py-4'>Soykot Hosen</p>
                </div>
            </div>
        </div>
    );
};

export default About_banner;
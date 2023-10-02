import React from 'react';
import Banner from './Banner';
import bannerBg2 from '../../assets/BannerSection/Ellipse 2.png'
import bannerBg3 from '../../assets/BannerSection/Ellipse 3.png'
import bannerBg4 from '../../assets/BannerSection/Ellipse 4.png'
import bannerBg5 from '../../assets/BannerSection/Ellipse 5.png'
import WorkTogether from './WorkTogether';
import workBG from '../../assets/BannerSection/workBG .png'
import WorkProcess from './WorkProcess';
import Clients from './Clients';
import Testimonial from './Testimonial';
import ProjectForm from './ProjectForm';
import HomeBlog from './Home_Blog';
import LazyLoad from 'react-lazy-load';

const Home = () => {
    return (
        <>
            <div className='relative mt-5'>
                <LazyLoad>
                    <img className='absolute right-0' src={bannerBg3} alt="" />
                </LazyLoad>
                <LazyLoad>
                    <img className='absolute right-0' src={bannerBg4} alt="" />
                </LazyLoad>
                <LazyLoad>
                    <img className='absolute -bottom-32 left-0 hidden sm:block' src={bannerBg2} alt="" />
                </LazyLoad>
                <Banner></Banner>
            </div>
            <div className='relative'>
                <LazyLoad>
                    <img className='absolute top-8 sm:top-4 md:-top-2 xl:-top-28 left-0 xl:left-[15%]' src={workBG} alt="" />
                </LazyLoad>
                <WorkTogether></WorkTogether>
            </div>
            <WorkProcess></WorkProcess>
            <HomeBlog></HomeBlog>
            <div className='relative'>
                <LazyLoad>
                    <img className="hidden md:block md:absolute -top-3/4" src={bannerBg5} alt="" />
                </LazyLoad>
                <Clients></Clients>
            </div>
            <Testimonial></Testimonial>
            <div className='container'>
                <ProjectForm></ProjectForm>
            </div>
        </>
    );
};

export default Home;
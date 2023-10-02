import React from 'react';
import Header from '../Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import footerBG from '../../assets/BannerSection/Background-Overlay (2).png';
import About_banner from './About_banner';
import bannerImg from '../../assets/BannerSection/Background-overlay (3).png'
import bannerGradient from '../../assets/BannerSection/Ellipse 5.png'
import About_Details from './About_Details';
import ProjectForm from '../Home/ProjectForm';
import LazyLoad from 'react-lazy-load';

const About = () => {
    return (
        <div>
            <div className='relative pb-14 md:pb-32'>
                <LazyLoad>
                    <img className='absolute top-40 h-[1200px] w-[1000px]' src={bannerGradient} alt="" />
                </LazyLoad>
                <LazyLoad>
                    <img className='hidden md:block md:absolute md:-z-10 md:top-72 lg:top-96 lg:left-0 xl:left-0 w-full' src={bannerImg} alt="" />
                </LazyLoad>
                <About_banner></About_banner>
            </div>
            <About_Details></About_Details>
            <div className='container'>
                <ProjectForm></ProjectForm>
            </div>
        </div>
    );
};

export default About;
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

const About = () => {
    return (
        <div>
            <div className='relative pb-14 md:pb-32'>
                <img className='absolute top-40 h-[1200px] w-[1000px]' src={bannerGradient} alt="" />
                <img className='hidden md:block md:absolute md:-z-10 md:top-72 lg:top-96 lg:left-0 xl:left-32' src={bannerImg} alt="" />
                <About_banner></About_banner>
            </div>
            <About_Details></About_Details>
            <ProjectForm></ProjectForm>
        </div>
    );
};

export default About;
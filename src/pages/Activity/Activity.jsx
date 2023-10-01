import React from 'react';
import activityImg from '../../assets/blog/Frame 285 1.png'
import ProjectForm from '../Home/ProjectForm';

const Activity = () => {
    return (
        <div className='container'>
            <div className='text-center my-10'>
                <h1 className='text-3xl font-bold text-[#185abc]'>Activity</h1>
                <p className='text-gray-400 my-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div>
                <img src={activityImg} alt="" />
            </div>
            <ProjectForm></ProjectForm>
        </div>
    );
};

export default Activity;
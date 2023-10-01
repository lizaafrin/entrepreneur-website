import React from 'react';
import eventImg from '../../assets/blog/Tab-Image.png'
import ProjectForm from '../Home/ProjectForm';


const LifeEvent = () => {
    return (
        <div className='container'>
            <div className='text-center my-10'>
                <h1 className='text-3xl font-bold text-[#185abc]'>Life Event</h1>
                <p className='text-gray-400 my-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>

            <div className='flex flex-col-reverse md:flex-row gap-8 my-20'>
                <div className='md:w-1/2 flex flex-col'>
                    <div className='hover:border-l-8 hover:p-6 hover:card hover:shadow cursor-pointer border-l-orange-400'>
                        <h1 className='font-semibold text-lg mt-4'>
                            Lorem ipsum dolor sit amet consectetur. Eu egestas ut volutpat sed tristique tellus.
                        </h1>
                        <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur. Justo cras viverra donec tellus tellus nisi nisi. Libero ac lobortis justo enim pulvinar amet accumsan mauris. Fames montes eu magna tellus viverra enim gravida lacus etiam. Ultricies leo quam ornare nunc quis mattis. Eget iaculis tristique quis molestie blandit risus. Morbi.</p>
                    </div>
                    <div className='hover:border-l-8 hover:p-6 hover:card hover:shadow cursor-pointer border-l-orange-400 my-6 md:my-16'>
                        <h1 className='font-semibold text-lg mt-4'>
                            Lorem ipsum dolor sit amet consectetur. Eu egestas ut volutpat sed tristique tellus.
                        </h1>
                        <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur. Justo cras viverra donec tellus tellus nisi nisi. Libero ac lobortis justo enim pulvinar amet accumsan mauris. Fames montes eu magna tellus viverra enim gravida lacus etiam. Ultricies leo quam ornare nunc quis mattis. Eget iaculis tristique quis molestie blandit risus. Morbi.</p>
                    </div>
                    <div className='hover:border-l-8 hover:p-6 hover:card hover:shadow cursor-pointer border-l-orange-400'>
                        <h1 className='font-semibold text-lg mt-4'>
                            Lorem ipsum dolor sit amet consectetur. Eu egestas ut volutpat sed tristique tellus.
                        </h1>
                        <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur. Justo cras viverra donec tellus tellus nisi nisi. Libero ac lobortis justo enim pulvinar amet accumsan mauris. Fames montes eu magna tellus viverra enim gravida lacus etiam. Ultricies leo quam ornare nunc quis mattis. Eget iaculis tristique quis molestie blandit risus. Morbi.</p>
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex justify-end'>
                    <img className='w-full lg:w-[90%] lg:h-[90%] object-cover' src={eventImg} alt="" />
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-8'>
                <div className='md:w-1/2 flex justify-start'>
                    <img className='w-full lg:w-[90%] lg:h-[90%] object-cover' src={eventImg} alt="" />
                </div>
                <div className='md:w-1/2 flex flex-col '>
                    <div className='hover:border-l-8 hover:p-6 hover:card hover:shadow cursor-pointer border-l-orange-400'>
                        <h1 className='font-semibold text-lg mt-4'>
                            Lorem ipsum dolor sit amet consectetur. Eu egestas ut volutpat sed tristique tellus.
                        </h1>
                        <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur. Justo cras viverra donec tellus tellus nisi nisi. Libero ac lobortis justo enim pulvinar amet accumsan mauris. Fames montes eu magna tellus viverra enim gravida lacus etiam. Ultricies leo quam ornare nunc quis mattis. Eget iaculis tristique quis molestie blandit risus. Morbi.</p>
                    </div>
                    <div className='hover:border-l-8 hover:p-6 hover:card hover:shadow cursor-pointer border-l-orange-400 my-6 md:my-16'>
                        <h1 className='font-semibold text-lg mt-4'>
                            Lorem ipsum dolor sit amet consectetur. Eu egestas ut volutpat sed tristique tellus.
                        </h1>
                        <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur. Justo cras viverra donec tellus tellus nisi nisi. Libero ac lobortis justo enim pulvinar amet accumsan mauris. Fames montes eu magna tellus viverra enim gravida lacus etiam. Ultricies leo quam ornare nunc quis mattis. Eget iaculis tristique quis molestie blandit risus. Morbi.</p>
                    </div>
                    <div className='hover:border-l-8 hover:p-6 hover:card hover:shadow cursor-pointer border-l-orange-400'>
                        <h1 className='font-semibold text-lg mt-4'>
                            Lorem ipsum dolor sit amet consectetur. Eu egestas ut volutpat sed tristique tellus.
                        </h1>
                        <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur. Justo cras viverra donec tellus tellus nisi nisi. Libero ac lobortis justo enim pulvinar amet accumsan mauris. Fames montes eu magna tellus viverra enim gravida lacus etiam. Ultricies leo quam ornare nunc quis mattis. Eget iaculis tristique quis molestie blandit risus. Morbi.</p>
                    </div>
                </div>
            </div>


            <ProjectForm></ProjectForm>
        </div>
    );
};

export default LifeEvent;
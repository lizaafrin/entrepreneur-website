import React from 'react';
import card1 from "../../assets/blog/Rectangle 33.png"
import card2 from "../../assets/blog/Rectangle 34.png"
import card3 from "../../assets/blog/Rectangle 37.png"


const BlogCard = () => {
    return (
        <div className=''>
            <div className='text-left my-10'>
                <h1 className='text-3xl font-bold text-[#185abc]'>Lastest News and Resources</h1>
                <p className='text-gray-400 my-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className='flex flex-col gap-10 my-10'>
                <div className='flex flex-col md:flex-row gap-8'>
                    <div className='md:w-1/3'>
                        <img className='' src={card1} alt="" />
                    </div>
                    <div className='md:w-2/3'>
                        <h1 className='font-semibold text-lg '>
                            Lorem ipsum dolor sit amet consectetur. Eu egestas ut volutpat sed tristique tellus.
                        </h1>
                        <p className='text-gray-400  mt-4'>Lorem ipsum dolor sit amet consectetur. Justo cras viverra donec tellus tellus nisi nisi. Libero ac lobortis justo enim pulvinar amet accumsan mauris. Fames montes eu magna tellus viverra enim gravida lacus etiam. Ultricies leo quam ornare nunc quis mattis. Eget iaculis tristique quis molestie blandit risus. Morbi.</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row  gap-8'>
                    <div className='md:w-1/3'>
                        <img src={card2} alt="" />
                    </div>
                    <div className='md:w-2/3'>
                        <h1 className='font-semibold text-lg'>
                            Lorem ipsum dolor sit amet consectetur. Eu egestas ut volutpat sed tristique tellus.
                        </h1>
                        <p className='text-gray-400  mt-4'>Lorem ipsum dolor sit amet consectetur. Justo cras viverra donec tellus tellus nisi nisi. Libero ac lobortis justo enim pulvinar amet accumsan mauris. Fames montes eu magna tellus viverra enim gravida lacus etiam. Ultricies leo quam ornare nunc quis mattis. Eget iaculis tristique quis molestie blandit risus. Morbi.</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row  gap-8'>
                    <div className='md:w-1/3'>
                        <img src={card3} alt="" />
                    </div>
                    <div className='md:w-2/3'>
                        <h1 className='font-semibold text-lg'>
                            Lorem ipsum dolor sit amet consectetur. Eu egestas ut volutpat sed tristique tellus.
                        </h1>
                        <p className='text-gray-400  mt-4'>Lorem ipsum dolor sit amet consectetur. Justo cras viverra donec tellus tellus nisi nisi. Libero ac lobortis justo enim pulvinar amet accumsan mauris. Fames montes eu magna tellus viverra enim gravida lacus etiam. Ultricies leo quam ornare nunc quis mattis. Eget iaculis tristique quis molestie blandit risus. Morbi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
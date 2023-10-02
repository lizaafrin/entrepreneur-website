import React from 'react';
import BlogBannerImg from '../../assets/blog/Rectangle 32.png';
import LazyLoad from 'react-lazy-load';

const BlogBanner = () => {
    return (
        <div className=''>
            <div className='text-center mt-10'>
                <h1 className='text-3xl font-bold text-[#185abc]'>Lastest News and Resources</h1>
                <p className='text-gray-400 my-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <LazyLoad>
                    <img className='w-full mb-10' src={BlogBannerImg} alt="" />
                </LazyLoad>
            </div>
            <div className='my-10'>
                <span className='bg-[#f4c467] rounded-2xl px-6 py-1 '>News</span>
                <h1 className='font-semibold text-lg mt-4'>
                    Lorem ipsum dolor sit amet consectetur. Eu egestas ut volutpat sed tristique tellus.
                </h1>
                <p className='text-gray-400 lg:w-2/3 mt-4 text-justify'>Lorem ipsum dolor sit amet consectetur. Justo cras viverra donec tellus tellus nisi nisi. Libero ac lobortis justo enim pulvinar amet accumsan mauris. Fames montes eu magna tellus viverra enim gravida lacus etiam. Ultricies leo quam ornare nunc quis mattis. Eget iaculis tristique quis molestie blandit risus. Morbi.</p>
                <button className='underline text-gray-400 py-6'>Read More</button>
            </div>
        </div>
    );
};

export default BlogBanner;
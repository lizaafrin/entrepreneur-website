import React from 'react';
import { Navigation, Pagination, A11y,Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Home_Blog.css';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import blog_img1 from '../../assets/blog/unsplash_z0MDyylvY1k.png'
import blog_img2 from '../../assets/blog/unsplash_phIFdC6lA4E.png'
import blog_img3 from '../../assets/blog/unsplash_coj7UZ7iN60.png'

const HomeBlog = () => {
    const data = [
        {
            id: 1,
            comment: '22 october,2023 / 246b comments',
            para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, inventore.'
        },
        {
            id: 2,
            comment: '22 october,2023 / 246b comments',
            para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, inventore.'
        },
        {
            id: 3,
            comment: '22 october,2023 / 246b comments',
            para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, inventore.'
        },
        {
            id: 4,
            comment: '22 october,2023 / 246b comments',
            para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, inventore.'
        },
    ]
    return (
        <div className='container'>
            <div className=' text-center my-20'>
                <h1 className='text-3xl font-bold text-[#185abc]' >Blog</h1>
                <p className='text-gray-400 w-3/4 sm:w-2/3 md:w-1/3 mx-auto mt-6'>Lorem ipsum dolor sit amet consectetur. Eget faucibus quis est nisl vitae ultrices vestibulum pharetra vitae. Quisque quis.</p>
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                    // slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    scrollbar={{ draggable: true }}
                    navigation
                    className="mt-14"
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                          width: 640,
                          slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                          width: 768,
                          slidesPerView: 2,
                        },
                        1024: {
                          width: 1024,
                          slidesPerView: 3,
                        },
                      }}
                >

                    {/* {
                        data.map((content,index)=>{
                            <SwiperSlide key={index}>
                            <div className="card w-40 sm:w-52 md:w-60 lg:w-72 xl:w-96 bg-base-100 shadow-xl">
                                <figure><img className='w-full' src={blog_img1} alt="" /></figure>
                                <div className="text-left card-body">
                                    <small>{content}</small>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, inventore.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        })
                    } */}
                        <SwiperSlide>
                            <div className="card lg:w-72 bg-base-100 shadow-xl">
                                <figure><img className='w-full' src={blog_img1} alt="" /></figure>
                                <div className="text-left card-body">
                                    <small>22 october,2023 / 246b comments</small>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, inventore.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card lg:w-72 bg-base-100 shadow-xl">
                                <figure><img className='w-full' src={blog_img2} alt="" /></figure>
                                <div className="text-left card-body">
                                    <small>22 october,2023 / 246b comments</small>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, inventore.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card lg:w-72 bg-base-100 shadow-xl">
                                <figure><img className='w-full' src={blog_img3} alt="" /></figure>
                                <div className="text-left card-body">
                                    <small>22 october,2023 / 246b comments</small>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, inventore.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card lg:w-72 bg-base-100 shadow-xl">
                                <figure><img className='w-full' src={blog_img1} alt="" /></figure>
                                <div className="text-left card-body">
                                    <small>22 october,2023 / 246b comments</small>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, inventore.</p>
                                </div>
                            </div>
                        </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default HomeBlog;
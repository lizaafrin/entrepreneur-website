import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            header: 'Lorem ipsum dolor sit amet consectetur. Tortor egestas feugiat sed ridiculus et eget nunc. Ultrices tempus tincidunt eget.',
            des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi corrupti magnam sunt eos repudiandae laboriosam veritatis, officia officiis. Quasi reprehenderit, facilis exercitationem doloribus ut assumenda, voluptas repellat velit est deserunt, consequuntur quidem ipsum eligendi nihil repudiandae quas nisi excepturi! Assumenda vero ullam modi ad iure laudantium. Quo odio velit deleniti eum nemo ullam id exercitationem facilis ab non. Velit beatae dolorum provident laborum fuga illum sit molestias corrupti eveniet eius?',
            client_name: 'Mahmud Hasan',
            client_designation: 'Managing Director, ABC company',
        },
        {
            id: 2,
            header: 'Lorem ipsum dolor sit amet consectetur. Tortor egestas feugiat sed ridiculus et eget nunc. Ultrices tempus tincidunt eget.',
            des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi corrupti magnam sunt eos repudiandae laboriosam veritatis, officia officiis. Quasi reprehenderit, facilis exercitationem doloribus ut assumenda, voluptas repellat velit est deserunt, consequuntur quidem ipsum eligendi nihil repudiandae quas nisi excepturi! Assumenda vero ullam modi ad iure laudantium. Quo odio velit deleniti eum nemo ullam id exercitationem facilis ab non. Velit beatae dolorum provident laborum fuga illum sit molestias corrupti eveniet eius?',
            client_name: 'ABM Moniruzzaman',
            client_designation: 'CEO, ABM company',
        },
        {
            id: 3,
            header: 'Lorem ipsum dolor sit amet consectetur. Tortor egestas feugiat sed ridiculus et eget nunc. Ultrices tempus tincidunt eget.',
            des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi corrupti magnam sunt eos repudiandae laboriosam veritatis, officia officiis. Quasi reprehenderit, facilis exercitationem doloribus ut assumenda, voluptas repellat velit est deserunt, consequuntur quidem ipsum eligendi nihil repudiandae quas nisi excepturi! Assumenda vero ullam modi ad iure laudantium. Quo odio velit deleniti eum nemo ullam id exercitationem facilis ab non. Velit beatae dolorum provident laborum fuga illum sit molestias corrupti eveniet eius?',
            client_name: 'Muntasir Rahman',
            client_designation: 'Manager, XYZ company',
        },
    ]


    return (
        <div className='container'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold text-[#185abc]'>Testimonials</h1>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    // pagination={{ clickable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                >
                    {
                        testimonials.map((testimonial, index) =>
                            <SwiperSlide key={testimonial.id}>
                                <div>
                                    <p className='text-gray-400 py-4 w-3/4 md:w-2/3 lg:w-1/3 mx-auto'>{testimonial.header}</p>
                                    <br />
                                    <p className='w-3/4 md:w-2/3 mx-auto text-justify'>{testimonial.des}</p>
                                    <h5 className='font-semibold mt-6'>{testimonial.client_name}</h5>
                                    <span>{testimonial.client_designation}</span>
                                </div>
                            </SwiperSlide>
                        )
                    }

                </Swiper>

            </div>
        </div>
    );
};

export default Testimonial;
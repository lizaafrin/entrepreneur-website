import React from 'react';

const Testimonial = () => {
    const testimonial = [
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

                <div>
                    <p className='text-gray-400 py-4 w-3/4 md:w-2/3 lg:w-1/3 mx-auto'>Lorem ipsum dolor sit amet consectetur. Tortor egestas feugiat sed ridiculus et eget nunc. Ultrices tempus tincidunt eget.</p>
                    <br />
                    <p className='w-3/4 md:w-2/3 mx-auto text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi corrupti magnam sunt eos repudiandae laboriosam veritatis, officia officiis. Quasi reprehenderit, facilis exercitationem doloribus ut assumenda, voluptas repellat velit est deserunt, consequuntur quidem ipsum eligendi nihil repudiandae quas nisi excepturi! Assumenda vero ullam modi ad iure laudantium. Quo odio velit deleniti eum nemo ullam id exercitationem facilis ab non. Velit beatae dolorum provident laborum fuga illum sit molestias corrupti eveniet eius?</p>
                    <h5 className='font-semibold mt-6'>John Doe</h5>
                    <span>Managing Director, ABC company</span>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
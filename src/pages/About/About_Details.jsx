import React from 'react';

const About_Details = () => {
    return (
        <div className='container'>
            {/* ---------About------------ */}
            <div className='flex flex-col md:flex-row mb-20'>
                <div className='w-1/3 uppercase'>
                    <h1 className='text-xl md:text-2xl font-bold text-[#185abc]'>About</h1>
                </div>
                <div className='md:w-2/3 mt-4 md:mt-0'>
                    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione adipisci praesentium veniam similique, fugit, provident rem obcaecati sint ad voluptas iure doloremque harum est modi ab molestias inventore magni voluptatum omnis iste asperiores. Quos recusandae obcaecati officia reiciendis, illo provident! Veritatis quae iste saepe laudantium maxime debitis, velit corporis ut.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione adipisci praesentium veniam similique, fugit, provident rem obcaecati sint ad voluptas iure doloremque harum est modi ab molestias inventore magni voluptatum omnis iste asperiores. Quos recusandae obcaecati officia reiciendis, illo provident! Veritatis quae iste saepe laudantium maxime debitis, velit corporis ut.Ratione adipisci praesentium veniam similique, fugit, provident rem obcaecati sint ad voluptas iure doloremque harum est modi ab molestias inventore magni voluptatum omnis iste asperiores. Quos recusandae obcaecati officia reiciendis, illo provident! Veritatis quae iste saepe laudantium maxime debitis, velit corporis ut.

                    </p>
                </div>
            </div>


            {/* ---------Experience------------ */}
            <div className='flex flex-col md:flex-row mb-20'>
                <div className='w-1/3 uppercase'>
                    <h1 className='text-xl md:text-2xl font-bold text-[#185abc]'>Experience</h1>
                </div>
                <div className='md:w-2/3  mt-6 md:mt-0'>
                    <form action="">
                        <div className='flex justify-between border-b-2 pb-2'>
                            <div className=''>
                                <h3 className='uppercase text-base'>Art Director</h3>
                                <small>Art studio</small>
                            </div>
                            <div className='text-red-500'>
                                <span>Oct 20220 - Currently</span>
                            </div>
                        </div>
                        <div className='flex justify-between border-b-2 py-6'>
                            <div className=''>
                                <h3 className='uppercase text-base'>Jury</h3>
                                <small>Awards</small>
                            </div>
                            <div className='text-red-500'>
                                <span>Oct 20220 - Currently</span>
                            </div>
                        </div>
                        <div className='flex justify-between border-b-2 py-6'>
                            <div className=''>
                                <h3 className='uppercase text-base'>Photographer & Art Director</h3>
                                <small>Awards</small>
                            </div>
                            <div className='text-red-500'>
                                <span>Oct 20220 - Currently</span>
                            </div>
                        </div>
                        <div className='flex justify-between border-b-2 py-6'>
                            <div className=''>
                                <h3 className='uppercase text-base'>Art Study</h3>
                                <small>Harvard</small>
                            </div>
                            <div className='text-red-500'>
                                <span>Oct 20220 - Currently</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

              {/* ---------Recognition------------ */}
              <div className='flex flex-col md:flex-row mb-20 md:mb-40'>
                <div className='w-1/3 uppercase'>
                    <h1 className='text-xl md:text-2xl font-bold text-[#185abc]'>Recognitions</h1>
                </div>
                <div className='md:w-2/3  mt-6 md:mt-0'>
                    <form action="">
                        <div className='flex justify-between border-b-2 pb-2'>
                            <div className=''>
                                <h3 className='uppercase text-base'>Art Director</h3>
                                <small>Feb 2021</small>
                            </div>
                            <div className='text-red-500'>
                                <span>Art studio</span>
                            </div>
                        </div>
                        <div className='flex justify-between border-b-2 py-6'>
                            <div className=''>
                                <h3 className='uppercase text-base'>Cover Photo</h3>
                                <small>May 2021</small>
                            </div>
                            <div className='text-red-500'>
                                <span>Time Megazine</span>
                            </div>
                        </div>
                        <div className='flex justify-between border-b-2 py-6'>
                            <div className=''>
                                <h3 className='uppercase text-base'>Design Portfolio</h3>
                                <small>Dec 2021</small>
                            </div>
                            <div className='text-red-500'>
                                <span>Awards</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default About_Details;
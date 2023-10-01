import React from 'react';
import ContactForm from './ContactForm';



const Contact = () => {
    return (
        <div className='container'>
            <div className='text-center my-10'>
                <h1 className='text-3xl font-bold text-[#185abc]'>Contact Us</h1>
                <p className='text-gray-400 my-6'>Any question or remarks? Just write us a message!</p>
            </div>

                <ContactForm></ContactForm>
        </div>
    );
};

export default Contact;
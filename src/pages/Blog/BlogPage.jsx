import React from 'react';
import BlogBanner from './BlogBanner';
import BlogCard from './BlogCard';
import ProjectForm from '../Home/ProjectForm';


const BlogPage = () => {
    return (
        <div className='container'>
            <BlogBanner></BlogBanner>
            <BlogCard></BlogCard>
            <ProjectForm></ProjectForm>
        </div>
    );
};

export default BlogPage;
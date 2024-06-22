import React from 'react';
import BlogPost from './BlogPost';

const BlogList = ({ blogs }) => {
  return (
    <>
    
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {blogs.map((blog, index) => (
        <BlogPost
          key={index}
          title={blog.title}
          img={blog.img}
          author={blog.author}
          authorLink={blog.authorLink}
          content={blog.content}
         
        />
      ))}
    </div>
    </>
  );
};

export default BlogList;

import React from 'react';


const BlogPost = ({ title, img, author, authorLink, content }) => {
  return (
    <>
   
    <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden mb-6">
      <img className="w-full h-48 object-cover" src={img} alt={title} />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{content}</p>
        <a href={authorLink} className="text-indigo-500 hover:underline">{author}</a>
      </div>
    </div>

    </>
  );
};

export default BlogPost;

import PropTypes from 'prop-types';
import { MdOutlineBookmarks } from "react-icons/md";


const Blog = ({ blog, handleAddToBookmarks,handleMarkAsRead }) => {
    // destructuring process
    const { title, cover,author,author_img,reading_time,posted_date,
        hashtags} =blog; 

    return (
        <div className='mt-10'>
            <img className='w-full' src={cover} alt={`cover of the title ${title}`} />
            <div className='flex justify-between mt-4'>
                <div className='flex'>
                    <div>
                        <img className='w-14' src={author_img} alt="" />
                    </div>
                    <div className='ml-6'>
                        <h1>{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                    
                </div>

                <div className='space-x-5'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmarks(blog)} 
                    className='text-red-700'><MdOutlineBookmarks></MdOutlineBookmarks></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map( (hash,index) => <span key={index}><a href="">#{hash} </a></span>)
                }
            </p>

            <button onClick={() => handleMarkAsRead(reading_time)}
            className='bg-gray-500 rounded-xl p-2'>Make as Read</button>
            
        </div>
    );
};


Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
    
}

export default Blog;
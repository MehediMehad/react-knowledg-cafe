import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog, handleAddToBookMark, handleMarkAsRead}) => {
    const {id, title, cover,hashtags, posted_date, reading_time, author, author_img} = blog
    return (
        <div className='mb-20 shadow-xl p-7 space-y-5'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className="flex justify-between ">
                <div className="flex ">
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className='text-2xl'>{author} </h3>
                        <p className=''>{posted_date} </p>
                    </div>
                </div>
                <div>
                    <span className='items-center justify-center'>{reading_time} min read</span>
                    <button onClick={ ()=> handleAddToBookMark(blog)} className=' text-gray-600 hover:text-gray-950'> <FaBookmark></FaBookmark> </button>
                </div>
            </div>

            <h2 className='text-4xl'>{title} </h2>
            <p>
                {
                    hashtags.map((has, i) => <span key={i}><a href="">{has}</a></span>)
                }
            </p>
            <button onClick={()=> handleMarkAsRead(id, reading_time)} className='underline text-purple-500 hover:text-red-500 font-bold'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes ={
    blog : PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;
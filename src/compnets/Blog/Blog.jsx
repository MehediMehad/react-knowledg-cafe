import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog, handleAddToBookMark}) => {
    const {title, cover,hashtags, posted_date, reading_time, author, author_img} = blog
    return (
        <div className='mb-20 border-2 p-7'>
            <img className='w-full border-2 mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className="flex justify-between mb-5">
                <div className="flex ">
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className='text-2xl'>{author} </h3>
                        <p className=''>{posted_date} </p>
                    </div>
                </div>
                <div>
                    <span className='items-center justify-center'>{reading_time} min read</span>
                    <button onClick={handleAddToBookMark} className='ml-2 text-gray-600 hover:text-gray-950'> <FaBookmark></FaBookmark> </button>
                </div>
            </div>

            <h2 className='text-4xl'>{title} </h2>
            {
                hashtags.map((has, i) => <span key={i}><a href="">{has}</a></span>)
            }
        </div>
    );
};

Blog.propTypes ={
    blog : PropTypes.object.isRequired
}
export default Blog;
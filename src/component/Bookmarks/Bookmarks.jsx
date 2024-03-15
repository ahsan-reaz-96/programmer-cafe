import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-5 rounded-xl mt-20">
            <div className='p-4'>
                <h3 className="text-3xl text-center">Set Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-2xl text-center p-4">Bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;
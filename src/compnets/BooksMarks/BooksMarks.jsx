import PropTypes from 'prop-types'
import BooksMark from '../../BooksMark/BooksMark'

const BooksMarks = ({booksMarks, readingTime} )=> {
  return (
    <div className="md:w-1/3 bg-gray-100 m-4 p-4 sticky top-0 rounded-xl mt-16 h-screen">
      <div className="">
        <h3 className='text-4xl'>Reading Time: {readingTime}</h3>
      </div>
        <h2 className='text-3xl text-center'>BooksMarks: {booksMarks.length}</h2>
        {
            booksMarks.map((booksMark, idx) => <BooksMark key={idx} booksMark={booksMark}></BooksMark>)
        }
    </div>
  )
}

BooksMarks.propTypes = {
    booksMarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default BooksMarks
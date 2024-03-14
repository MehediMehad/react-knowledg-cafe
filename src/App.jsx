
import { useState } from 'react'
import './App.css'
import Blogs from './compnets/Blogs/Blogs'
import BooksMarks from './compnets/BooksMarks/BooksMarks'
import Header from './compnets/Header/Header'


function App() {
  const [booksMarks, setBookMark] = useState([]);
  const [readingTime, setReadingTime] = useState(0); 

  const handleAddToBookMark = blog =>{
    const newBooksMarks = [...booksMarks, blog];
    setBookMark(newBooksMarks)
  }

  const handleMarkAsRead =(id, time )=>{
    const newReadingTime =  readingTime + time;
    setReadingTime(newReadingTime)
    const remainingBookmarks = booksMarks.filter(booksMark => booksMark.id !== id)
    setBookMark(remainingBookmarks)
  }

  return (
    <div className='md:max-w-7xl mx-auto'>
      <Header></Header>
      <div className="md:flex p-5">
        <Blogs handleAddToBookMark={handleAddToBookMark} handleMarkAsRead={handleMarkAsRead} ></Blogs>
        <BooksMarks booksMarks={booksMarks} readingTime={readingTime}></BooksMarks>
      </div>
    </div>
  )
}

export default App

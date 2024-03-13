
import { useState } from 'react'
import './App.css'
import Blogs from './compnets/Blogs/Blogs'
import BooksMarks from './compnets/BooksMarks/BooksMarks'
import Header from './compnets/Header/Header'


function App() {
  const [BooksMark, setBookMark] = useState([]);
  const handleAddToBookMark = blog =>{
    console.log('Booksmark adding soon');
  }

  return (
    <div className='md:max-w-7xl mx-auto'>
      <Header></Header>
      <div className="md:flex p-5">
        <Blogs handleAddToBookMark={handleAddToBookMark} ></Blogs>
        <BooksMarks></BooksMarks>
      </div>
    </div>
  )
}

export default App

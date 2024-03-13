
import './App.css'
import Blogs from './compnets/Blogs/Blogs'
import BooksMarks from './compnets/BooksMarks/BooksMarks'
import Header from './compnets/Header/Header'


function App() {

  return (
    <>
      <Header></Header>
      <div className="md:flex ">
        <Blogs></Blogs>
        <BooksMarks></BooksMarks>
      </div>
    </>
  )
}

export default App

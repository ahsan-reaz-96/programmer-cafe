

import './App.css'
import Header from './component/Header/header'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks , setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = blog =>{
    // console.log(blog);
    const  newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks); 
  }

  const handleMarkAsRead = time => {
    // console.log('marking as read', time)
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime); 
  }

  // apps a handle banabo, ettare pathaobo blogs a
  // blogs theke pathabo blog a
  // terpor onClick handler diye eitake control korbo

  return (
    <>

      <Header></Header>
      <div className='md:flex  max-w-7xl mx-auto'>
        <Blogs handleAddToBookmarks = {handleAddToBookmarks} 
        handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks = {bookmarks} readingTime = {readingTime}></Bookmarks>
      </div>
      
      
      
    </>
  )
}

export default App

import { useState } from 'react'
import './assets/css/App.css'
import { useEffect } from 'react'
import useFetch from './hooks/useFetch'
import Search from './components/Search'
import { BOOKURL } from './utils/OpenBookConst'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import AuthorDetails from './pages/AuthorDetails'
import NavAuthors from './layouts/NavAuthors/NavAuthors'
import Footer from './layouts/Footer/Footer'


function App() {
  const [bookName, setBookName] = useState("")
  const { data, loading, error, fetchData } = useFetch(BOOKURL);

  useEffect(() => {

    const callApi = async () => {
      fetchData(bookName)
    }

    if (bookName) {
      callApi()
    }

  }, [bookName])


  const inputEvent = (event) => {
    setBookName(event)
  }

  return (
    <>
      <NavAuthors/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/author/:nameAuthor' element={<AuthorDetails/>}></Route>
        <Route path='/search' element={<Search  serchEvent={inputEvent} />}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

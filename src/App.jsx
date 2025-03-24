import { useState } from 'react'
import './assets/css/App.css'
import { useEffect } from 'react'
import Search from './components/Search'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import NavAuthors from './layouts/NavAuthors/NavAuthors'
import Footer from './layouts/Footer/Footer'
import CategoryDetails from './pages/CategoryDetails'


function App() {
  const [bookName, setBookName] = useState("")

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
        <Route path='/category/:typeCategory' element={<CategoryDetails/>}></Route>
        <Route path='/search' element={<Search  serchEvent={inputEvent} />}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Movie from './pages/MovieDetails'
import Search from './pages/Search'


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='movie/:id' element={<Movie />}/>
        <Route path='search' element={<Search />}/>
      </Routes>
    </div>
  )
}

export default App

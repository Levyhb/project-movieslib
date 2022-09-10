import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Movie from './pages/MovieDetails'
import NotFound from './pages/NotFound'
import Search from './pages/Search'


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='movie/:id' element={<Movie />}/>
        <Route path='search' element={<Search />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App

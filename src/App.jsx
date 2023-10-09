import { BrowserRouter ,Routes , Route } from 'react-router-dom'
import Header from './components/Header'
import Feed from './components/Feed'
import SearchResult from './components/SearchResult'
import VideoDetail from './components/VideoDetail'
import {AppContext} from './context/ContextApi'
import ChannelDetail from './components/ChannelDetail'
import Home from './components/Home'
import About from './components/About'
function App() {

  return (
    <>
    <AppContext>
    <BrowserRouter>
      <div className="flex flex-col h-full">
      <Header/>
      <Routes>
        <Route path='/'  element={<Feed/>}/>
        <Route path='/searchResult/:searchQuery' element={<SearchResult/>}/>
        <Route path='/video/:id' element={<VideoDetail/>}/>
        <Route path='/channel/:id' element={<ChannelDetail/>}>
          {/* <Route path='home' element={<Home/>}/> */}
          {/* <Route path='about' element={<About/>}/> */}
        </Route>
      </Routes>
      </div>
    </BrowserRouter>
    </AppContext>
    </>
  )
}

export default App

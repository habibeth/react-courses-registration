import './App.css'
import Courses from './components/Courses/Courses'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className="md:flex">
        <Courses></Courses>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App

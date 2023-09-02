
import './App.css'
import Header from './components/Header'
import Keyboard from './components/Keyboard'
import Letters from './components/Letters'

function App() {

  return (
    <>
      <div className='max-w-[638px] mx-auto flex-col items-center flex'>
        <Header />
        <Letters />
        <Keyboard />
      </div>
    </>
  )
}

export default App

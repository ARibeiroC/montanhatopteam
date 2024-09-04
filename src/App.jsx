import './App.css'
import {Header} from './components/Header'
import {Home} from './components/Home'

function App() {
  return (
    <div className="app">
        <div className="filter"></div>
        <Header />
        <Home />
    </div>
  )
}

export {App}

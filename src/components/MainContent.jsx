import { Home } from "./Home"
import { About } from './About'
import './MainContent.css'

function MainContent(){
    return (
        <div className="content-pages">
            <Home />
            <About />
        </div>
    )
}

export { MainContent }
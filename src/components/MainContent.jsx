import { Home } from "./Home"
import { Aboutwe } from './Aboutwe'
import './MainContent.css'

function MainContent(){
    return (
        <div className="content-pages">
            <Home />
            <Aboutwe />
        </div>
    )
}

export { MainContent }
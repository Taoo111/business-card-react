import Info from './components/Info.js';
import About from './components/About.js';
import Footer from './components/Footer.js'

export default function App(){
    return (
        <div className="container">
            <Info />
            <About />
            <Footer />
        </div>
    )
}
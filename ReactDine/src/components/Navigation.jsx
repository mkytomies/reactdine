import { Link } from "react-router-dom";
import './Navigation.css'
import 'typeface-notable';

const Navigation = () => {
    return(
        <>
        <div className="headerDiv" style={{ fontFamily: 'Notable, sans-serif' }}>
                <header className="header">
                    <div>
                        <Link to={'/'} className="logo">ReactDine</Link>
                    </div>
                    <nav>
                        <ul className="list">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/menu'}>Menu</Link></li>
                            <li><Link to={'/cart'}>🛒</Link></li>
                        </ul>
                    </nav>
                </header>
                <div className="marquee">
                    <div>
                        <span>💥 Dive into comfort classics 💥</span>
                        <span>💥 Savor the essence of Italy 💥</span>
                        <span>💥 Crisp, crunch, and freshness 💥</span>
                        <span>💥 Cheesy comfort on every plate 💥</span>   
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation;
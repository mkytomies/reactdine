import { Link } from "react-router-dom";

import './Home.css'
import buttonStyles from '../components/Button.module.css'

import 'typeface-notable';

const Home = () => {
    return(
        <>
            <div className="main-container" style={{ fontFamily: 'Notable, sans-serif' }}>
                <div className="text-column">
                    <h1>“HERE WE HAVE A HEADLINE”</h1>
                    <p>Some sort of text here, probably Lorem Impsum</p>
                    <Link to={'/menu'} className={buttonStyles.button}>Menu</Link>
                </div>
                <div className="image-column">
                    <img src="/images/veggie-burger.png" />
                    <p className="bubble">Burgir</p>
                </div>
            </div>
        </>
    )
}

export default Home;
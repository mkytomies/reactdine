import './Footer.css'

import 'typeface-notable';

const Footer = () => {
    return(
        <>
            <div className="footer" style={{ fontFamily: 'Notable, sans-serif' }}>
                <div className="column1">
                    <h3>Footer text</h3>
                    <p>Footer text</p>
                    <p>Footer text</p>
                </div>
                <div className="column2">
                    <h1>ReactDine</h1>
                </div>
            </div>
        </>
    )
}

export default Footer;
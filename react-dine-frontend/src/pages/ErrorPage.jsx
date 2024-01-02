import Navigation from "../components/Navigation.jsx";
import 'typeface-notable';

const ErrorPage = () => {
    return(
        <>
            <Navigation />
            <h1 style={{ fontFamily: 'Notable, sans-serif', padding: '8rem 0rem' }}>Oops page not found!</h1>
        </>
    )
}

export default ErrorPage;
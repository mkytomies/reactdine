import UserForm from '../components/UserForm.jsx';
import SimpleItem from '../components/SimpleItem.jsx';

import 'typeface-notable';
import './Checkout.css'

const Checkout = () => {

    return(
        <>
            <div className='mainDiv'>
            <div className='formDiv'>
                <h2 style={{ fontFamily: 'Notable, sans-serif', fontSize:'2rem' }}>Checkout</h2>
                <UserForm />
            </div>
            <div className='orderDiv'>
                <h3 style={{ fontFamily: 'Notable, sans-serif' }}>Your Order:</h3>
                <SimpleItem />
            </div>
        </div>
        </>
    )
}

export default Checkout;
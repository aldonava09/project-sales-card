import React from 'react';
import { useState } from 'react';
import '../../styles/main/main.css';
import Deal from './__deal/main__deal.jsx';
import PaymentType from './__paymentType/main__paymentType.jsx';
import Cards from './__cards/main__cards.jsx';

function Main() {

    const [paymentMode, setPaymentMode] = useState(true);

    return (
        <div className="main">
            <Deal/>
            <PaymentType paymentMode={paymentMode} setPaymentMode={setPaymentMode}/>
            <Cards paymentMode={paymentMode}/>
        </div>
    );
}

export default Main;
import React, {useState} from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './ToDo.styles.css';

import Footer from '../Footer/Footer';

export default function ToDo() {

    const [amount,setAmount] = useState<number>(1);
    const [click,setClick] = useState<boolean>(false);

    const onAmountChange = (e:any) =>{
        console.log(e.target.value);
        setAmount(e.target.value.toString());
    }


    return (
        <div className='Donate'>
            <h1>Fuu your money $$$$</h1>
            <h2>I want to donate: </h2>
            <input type='number' value={amount} onChange={onAmountChange} />
            <h2> PLN and make someone's day much better</h2>
            <button onClick={()=>{setClick(true)}}>DONATE</button>
            {click && <PayPalScriptProvider options={{ "client-id": "AeLMPfH9JtaiN1ohPSYGBv5MzcDhYPORstj0l1fki8-woB0Bg5bjMydZ3LsbeAm7UhssE_QW2RVmDtuT",commit:true, currency:'PLN',intent: "capture"}}>
                <PayPalButtons className='Buttons_PP' createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {   
                                description:'for money',
                                amount: {
                                    currency_code: 'PLN',
                                    value: amount.toString(),
                                }
                            }]
                })}}
                onApprove={async (data,action) =>{
                    const order = await action.order.capture;
                    console.log(order.arguments); 
                }}
                onError={(error)=>{
                    console.log(error)
                }}
                />
            </PayPalScriptProvider>}
            <Footer />
        </div>
    )
}

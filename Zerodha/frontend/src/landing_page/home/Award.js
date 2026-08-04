import React from 'react';

function Awards() {
    return (  
       <div className='container mt-5'>
        <div className='row'>
            <div className='col-6'>
                <img src='/media/largestBroker.svg'/>
            </div>
            <div className='col-6 p-5'>
                <h1>Largest Stock Broker In India</h1>
                <p>
                    2+ million zerodha clients contribute over 15% of all retail order
                     volumes in india by daily by trading and investing in:
                </p>
                <div className='row p-4'>
                    <div className='col-6'>
                        <ul>
                            <li>Future & Option</li>
                            <br/>
                            <li>Commodity Derivatives</li>
                            <br/>
                            <li>Curremcy & Dervivetives</li>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <ul>
                            <li>Stocks & IPO</li>
                            <br/>
                            <li>Direct Mutual Funds</li>
                            <br/>
                            <li>Bonds and Growth</li>
                        </ul>
                    </div>
                </div>
                <img src='media/pressLogos.png' style={{width:"75%"}}/>
            </div>
        </div>
       </div>
    );
}

export default Awards;
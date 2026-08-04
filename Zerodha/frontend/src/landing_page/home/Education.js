import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/education.svg'/>
            </div>
            <div className='col-6 mp-5'>
                <h3 className='fs-3'>Free and open market education</h3>
                <br/>
                <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                <a href='' style={{textDecoration:"none"}} >Varsity<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                <br/>
                  <br/>
                <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                <a href='' style={{textDecoration:"none"}} >TradingQ&A <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
            </div>
            </div>
        </div>
     );
}

export default Education;
import React from 'react';
 function Stats() {
    return ( 
       <div className='container' p-5>
        <br/>
        <br/>
        <br/>
        <br/>

        <div className='row' p-3>
            <div className='col-6 p-5'>
                <h3 className='fs-2 mb-5'>Trust with confidence</h3>
                <br/>
                <h5 className='fs-4'>Customer-first always</h5>
                <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                <br/>
                <h5 className='fs-4'>No spam or gimmicks</h5>
                <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                <br/>
                <h5 className='fs-4'>The Zerodha universe</h5>
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                <br/>
                <h5 className='fs-4'>Do better with money</h5>
                <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className='col-6 p-5'>
                <img src='media/ecosystem.png' style={{width:"100%"}}/>
                <div className='text-center'>
                    <a href='' className='mx-5' style={{textDecoration:"none"}} >Explore our Products <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    <a href='' style={{textDecoration:"none"}} >Try Kite Demo <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    <hr/>
                </div>
            </div>
        </div>
       </div>
     );
 }
 
 export default Stats;
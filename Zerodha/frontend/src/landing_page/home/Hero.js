import React from 'react';

function Hero() {
    return (  
        <div className='container '>
            <div className='row text-center'>
                <img src='media/landing.svg' alt='Hero image' className='mt-5 mb-5' style={{width:'65%',margin:"0 auto"}}  />
                <h3>Invest in everything</h3>
                <p className='mt-2 fs-4' >Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className=' mt-4 p-2 btn btn-primary fs-5' style={{width:"17%",margin:"0 auto"}}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Hero;
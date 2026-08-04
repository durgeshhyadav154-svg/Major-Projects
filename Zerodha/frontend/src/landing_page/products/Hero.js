import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row mt-5 border-bottom'>
                <div className='text-center mt-5 mb-5'>
                    <h3>Zerodha Products</h3>
                    <h5 style={{marginTop:"20px"}}>Sleek, modern, and intuitive trading platforms</h5>
                    <p style={{fontSize:"16px", color:"#424242",fontFamily:"sans-serif",lineHeight:"35px",marginTop:"20px",marginBottom:"70px"}}>Check out our <a href='#'>investment offerings     <i class="fa fa-arrow-right" aria-hidden="true"></i></a></p>
                </div>
            </div>
        </div>
     );
}

export default Hero;
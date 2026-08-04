import React from 'react';

function Hero() {
    return ( 
<div className='container'>
        <div className='row'>
            <div className='col m-5 p-5 border-bottom'>
                <h1 style={{ color:"#666666",fontSize:"25px",textAlign:'center',marginBottom:"60px" }}>We pioneered the discount broking model in India.<br/>
                Now, we are breaking ground with our technology.</h1>
            </div>  
        </div>
        <div className='row mb-5'>
            <div className='col-2'> </div>
            <div className='col-4'>
                    <p style={{fontSize:"16px", color:"#424242",fontFamily:"sans-serif",lineHeight:"35px"}}>
                    We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                    <br/>
                    <br/>
                    Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                    <br/>
                    <br/>
                    Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                   </p>
            </div>
            <div className='col-4'>
                <p style={{fontSize:"16px", color:"#424242",fontFamily:"sans-serif",lineHeight:"35px",textAlign:"-webkit-left"}}>
                    In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                    <br/>
                    <br/>
                    Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                    <br/>
                    <br/>
                    And yet, we are always up to something new every day.Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.
                </p>
            </div>
            <div className='col-2 mb-5'> </div>
        </div>
        <div className='row'>
                <h3 style={{ textAlign:"center",color:"#666666"}}>People</h3>
              <div>

            </div>
                <div className='row'>
                <div className='col-6 text-center p-5'>
                    <img src='/media/nithinKamath.jpg' style={{ borderRadius:"50%" ,height:"300px"}} alt="nithinKamath CEO"></img>
                    <p style={{fontSize:"18px", color:"#424242",fontFamily:"sans-serif",marginTop:"20px"}}>Nithin Kamath</p>
                    <p style={{fontSize:"14px", color:"#424242",fontFamily:"sans-serif"}}>Founder,CEO</p>
                </div>
                <div className='col-6 p-5'>
                    <p style={{fontSize:"16px", color:"#424242",fontFamily:"sans-serif",lineHeight:"35px"}}>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader.
                        <br/>
                        <br/>
                        Today, Zerodha has changed the landscape of the Indian broking industry.
                        <br/>
                        <br/>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                        Playing basketball is his zen.
                    </p>
                </div>
             </div>
            </div>
    </div>
     );
}

export default Hero;

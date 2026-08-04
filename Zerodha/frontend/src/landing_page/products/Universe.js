import React from 'react';

function Universe() {
    return ( 
        
        <div className='container'>
                 <div className='row text-center'>

                    {/* //TOP PART OF UNIVERSAL DIV */}

                    <p style={{fontSize:"23px", color:"#424242",fontFamily:"sans-serif",lineHeight:"35px"}}>
                        Want to know more about our technology stack? Check out the <a href='/'>Zerodha.tech</a> blog.
                       </p>
                       <h4 style={{fontSize:"25px",marginTop:"50px",marginBottom:"25px" }}>The Zerodha Universe</h4>
                       <p style={{fontSize:"16px", color:"#424242",fontFamily:"sans-serif"}}>
                        Extend your trading and investment experience even further with our partner platforms
                       </p>

                       {/* COLAABORATION COMPNIES */}

                    <div className='col-4 mb-5 p-5'>
                        <div>
                        <a href='#' ><img src='media/zerodhaFundhouse.png' style={{height:"55px",marginLeft:"10px"}}></img>
                        <p style={{marginTop:"20px",fontSize:"12 px"}}>Our asset management <br/>venture that is 
                        creating simple and transparent<br/> index funds to help you save for your goals.
                       </p>
                       </a>
                        </div>
                       <br/>
                        <div>
                        <a href='#' ><img src='media/streakLogo.png' style={{height:"55px",marginLeft:"10px"}}></img>
                        <p style={{marginTop:"20px",fontSize:"12 px"}}>Our asset management <br/>venture that is 
                        creating simple and transparent<br/> index funds to help you save for your goals.
                       </p>
                        </a>
                        </div>
                    </div>

                    {/* COLAABORATION COMPNIES */}
            
                    <div className='col-4 mb-5 p-5'>
                        <div>
                        <a href='#'><img src='media/sensibullLogo.svg' style={{height:"40px",marginLeft:"10px"}}></img>
                        <p style={{marginTop:"20px",fontSize:"12 px",marginBottom:"60px"}}>Our asset management 
                        <br/>venture that is 
                        creating simple and transparent<br/> index funds to help you save for your goals.
                       </p>
                       </a>
                        </div>
                       <div>
                        <a href='#' ><img src='media/smallcaseLogo.png' style={{height:"55px",marginLeft:"10px"}}></img>
                        <p style={{marginTop:"20px",fontSize:"12 px"}}>Our asset management <br/>venture that is 
                        creating simple and transparent<br/> index funds to help you save for your goals.
                       </p>
                        </a>
                       </div>
                    </div>

                    {/* COLAABORATION COMPNIES */}
                    
                    <div className='col-4  mb-5 p-5'>
                        <div>
                        <a href='#'><img src='media/tijori.svg' style={{height:"55px",}}></img>
                        <p style={{marginTop:"20px",fontSize:"12 px",marginBottom:"50px"}}>Investment research platform <br/>venture that is 
                        that offers detailed insights on stocks,<br/> sectors, supply chains, and more.
                       </p>
                       </a>
                        </div>
                        <div>
                        <a href='#' ><img src='media/dittoLogo.png' style={{height:"55px",marginLeft:"30px"}}></img>
                        <p style={{marginTop:"20px",fontSize:"12 px"}}>Personalized advice on life <br/>and health insurance. No spam,<br/> and no mis-selling.
                       </p>
                        </a>
                        </div>
                    </div>

                    
                 </div>
        </div>
     );
}

export default Universe;
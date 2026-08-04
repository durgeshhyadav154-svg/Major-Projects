import React from 'react';

function RightSection({imgUrl,productName,productDiscription,learnMore}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-5 p-5 mt-5'>
                    <div>
                    <h1 style={{fontSize:"25px",marginTop:"50px" }}>{productName}</h1>
                    <p style={{fontSize:"16px", color:"#424242",fontFamily:"sans-serif",lineHeight:"35px"}}>{productDiscription}</p>
                    </div>
                    <div>
                    <a href={learnMore}>learn More <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                
                  <div className='col-6 text-center p-1'>
                    <img src={imgUrl}></img>
                </div>
            </div>
        </div>
     );
}

export default RightSection;
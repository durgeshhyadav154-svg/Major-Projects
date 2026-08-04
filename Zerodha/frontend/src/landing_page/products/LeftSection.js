import React from 'react';

function LeftSection({imgUrl,productName,productDiscription,tryDemo,learnMore,googlePlay,appStore}) {
    return (
       <div className='container p-5'>
            <div className='row mb-5'>
                <div className='col-6 p-5 text-center '>
                    <img src={imgUrl} style={{marginRight:"50px"}}></img>
                </div>
                <div className='col-1'></div>
                <div className='col-5 mt-5 p-5'>
                    <div>
                    <h1 style={{fontSize:"25px",marginTop:"50px" }}>{productName}</h1>
                    <p style={{fontSize:"16px", color:"#424242",fontFamily:"sans-serif",lineHeight:"35px"}}>{productDiscription}</p>
                    </div>
                    <div>
                    <a href={tryDemo}>Try Demo<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore} style={{marginLeft:"50px"}}>Learn More <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-4'>
                    <a href={googlePlay}><img src='media/googlePlayBadge.svg'></img></a>
                    <a href={appStore} style={{marginLeft:"50px"}}><img src='media/appstoreBadge.svg'></img></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;
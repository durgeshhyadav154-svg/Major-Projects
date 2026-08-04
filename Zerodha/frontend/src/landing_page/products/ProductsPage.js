import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
function ProductPage() {
    return ( 
      <>
      <Hero/>
      <LeftSection imgUrl="media/coin.png" 
      productName="Kite"
      productDiscription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
      tryDemo="" 
      learnMore="" 
      googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3" 
      appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"/>

      <RightSection imgUrl="media/console.png" 
      productName="Console" 
      productDiscription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." 
      tryDemo="" 
      learnMore="" 
      googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3" 
      appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"/>

      <LeftSection imgUrl="media/coin.png" 
      productName="Coin" 
      productDiscription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
      tryDemo=""
      learnMore=""     
      googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3" 
      appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"/>

      <RightSection imgUrl="media/landingtel.svg" 
      productName="Kite Connect API" 
      productDiscription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." 
      tryDemo="" 
      learnMore="" 
      googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3" 
      appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"/>


      <LeftSection imgUrl="media/varsity-products.svg" 
      productName="Varsity mobile" 
      productDiscription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
      tryDemo="" 
      learnMore="" 
      googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3" 
      appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"/>

      <Universe/>
      </>
     );
}

export default ProductPage;
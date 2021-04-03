import React from 'react'
import './css/Home.css'
import Product from './Product.js'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/prime/Gateway/new_ft_hero_vanv2._CB430308772_.jpg" alt=""/>

        <div className="home__row">
          <Product
            id="88494859484"
            title="Canon CAMERA EOS 2000D 18-55 III, 2728C002"
            price={399.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81T7Yel1EsL._AC_SX679_.jpg"
            rating={4}/>

          <Product
            id="88432322359484"
            title="MISBHV top Sport Active ajustado"
            price={99.99}
            image="https://cdn-images.farfetch-contents.com/15/42/97/34/15429734_28510221_1000.jpg"
            rating={5}/>

          <Product
            id="12284"
            title="Tommy Hilfiger Mens Analogue Classic Quartz Watch with Gold Plated Strap 1791513"
            price={62.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81cy3HmFG7L._AC_UY879_.jpg"
            rating={5}/>
        </div>

        <div className="home__row">
        <Product
          id="1233359484"
          title="Apple iPad Pro (2020 4ª gen), 1 TB, Gris espacial, WiFi, 12.9 Liquid Retin"
          price={1299.99}
          image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTk8Bz8lcgAWr-rglJaKGU-9KR7fEGDulrNNG0C3U7ZG0sdCh0ot3arcOkXJWUOsTQFRS7i8jM2GxkT84Qc2tDIRr8X-jBW&usqp=CAE"
          rating={4}/>


          <Product
            id="34233232"
            title="Gaming Keyboard UK, VicTsing Ultra-Slim All-Metal Frame USB Wired Keyboard with Comfortable Wrist Rest"
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71oWWHSMQoL._AC_SX679_.jpg"
            rating={4}/>
        </div>

        <div className="home__row">
          <Product
            id="09092322359484"
            title="Bottega Veneta bolsa de hombro The Chain Cassette"
            price={2999.99}
            image="https://cdn-images.farfetch-contents.com/16/27/33/50/16273350_62385d50-43f7-4978-8268-456320247ea6_480.jpg"
            rating={5}/>

        </div>

        <div className="home__row">

        <Product
          id="2222359484"
          title="TV LED 55 Xiaomi Mi TV 4S UHD 4K, Quad Core, Bluetooth, Android TV, PatchWall, Google Assistant"
          price={499.99}
          image="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_81202543/fee_786_587_png"
          rating={3}/>

        <Product
          id="09092322359484"
          title="Balencianga sudadera con logo estampado"
          price={399.99}
          image="https://cdn-images.farfetch-contents.com/16/19/19/68/16191968_32008730_1000.jpg"
          rating={4}/>

        </div>

      </div>
    </div>
  );
}

export default Home;

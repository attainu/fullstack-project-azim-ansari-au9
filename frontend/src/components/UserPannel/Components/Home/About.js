import React from 'react';
import './About.css';

function About() {
  return (
    <div className='container1'>
      <h1 className='heading'>
        What are the benefits of investing in mutual funds?
      </h1>
      <p className='para'>
        So many! But to name a few,

        Higher Returns: Mutual funds have the potential to give higher returns, when compared to traditional investing options such as bank FDs, NSCs, PPF etc. The returns earned from most funds are exempt from taxes (equity) or offer attractive tax benefits (debt), when held for longer duration. You can build a sizeable amount investing in mutual funds, and benefit from the effect of compounding.

        Flexibility: Mutual funds allow you to rebalance your portfolio to suit your needs. Depending upon your risk appetite, age and income, you have the flexibility to shift between equity and debt mutual funds.

        Liquidity: Mutual fund investments can be redeemed as and when needed, providing easy liquidity. They come with little or no lock-in periods.
      </p>

      <h1 className='heading'>
        How do you get started?
      </h1>
      <p className='para'>
        Easy! Just sign up for a free-for-life FundsIndia account and let the experts do the work for you. FundsIndia is India's friendliest investment platform. We provide our investors easy access to a wide range of investment products like mutual funds from leading fund houses in India, corporate fixed deposits, stocks and much more in one convenient online location. In short, we are your one stop shop to build wealth!
      </p>
      <div className='img-gallery'>
          <img src='mutual-funds.jpg' alt='funds'/>
          <img src='watering.jpg' alt='watering'/>
          <img src='mutual-fund-combination.jpg' alt='combination'/>
      </div>
    </div>
    
  );
}

export default About;

import React from 'react';
import './Coin.css';
import CountUp from 'react-countup';



const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
    <div className='col my-5'  data-aos="fade-up">
      <div className='card border-0 p-3 h-100 text-center'>
        <div className='coin'>
          <img src={image} alt='crypto' className="mb-2" />
          <div className="d-flex justify-content-between align-items-center mt-5">
            <h3 class="fw-bold mb-2">{name}</h3>
            <p className='bg-white rounded text-dark px-1 align-self-center'>{symbol}</p>
          </div>
        </div>
        <div className='coin-data'>
          <h4 className='fw-bold my-2'>₹ <CountUp end={price} duration={3} /></h4>
          <p className='coin-volume'>₹{volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className='fw-bold'><span class="text-white-50">Price Change : </span><span class="text-danger bg-white rounded p-1">{priceChange.toFixed(2)}%</span></p>
          ) : (
            <p className='fw-bold'><span class="text-white-50">Price Change : </span><span class="text-success bg-white rounded p-1">{priceChange.toFixed(2)}%</span></p>
          )}

          <p className='coin-marketcap'>
            Mkt Cap: ₹{marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;

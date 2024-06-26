import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL =
  'https://my-json-server.typicode.com/themeland/netstorm-json-1/wallet';

const Activity = () => {
  const [data, setData] = useState({});
  const [walletData, setWalletData] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        setData(res.data);
        setWalletData(res.data.walletData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="wallet-connect-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-7">
            {/* Intro */}
            <div className="intro text-center">
              <span>{data.preHeading}</span>
              <h3 className="mt-3 mb-0">{data.heading}</h3>
              <p>{data.content}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center items">
          {walletData.map((item, idx) => {
            return (
              <div key={`wd_${idx}`} className="col-12 col-md-6 col-lg-4 item">
                {/* Single Wallet */}
                <div className="card single-wallet">
                  <a className="d-block text-center" href="/login">
                    <img className="avatar-lg" src={item.img} alt="" />
                    <h4 className="mb-0">{item.title}</h4>
                    <p>{item.content}</p>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Activity;

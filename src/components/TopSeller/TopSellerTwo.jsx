import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL =
  'https://my-json-server.typicode.com/themeland/netstorm-json/seller';

const TopSeller = () => {
  const [data, setData] = useState({});
  const [sellerData, setSellerData] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        setData(res.data);
        setSellerData(res.data.sellerData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="top-seller-area pt-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Intro */}
            <div className="intro d-flex justify-content-between align-items-end m-0">
              <div className="intro-content">
                <span>{data.preHeading}</span>
                <h3 className="mt-3 mb-0">{data.heading}</h3>
              </div>
              <div className="intro-btn">
                <a className="btn content-btn" href="/authors">
                  View All
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row items">
          {sellerData.map((item, idx) => {
            return (
              <div key={`ts_${idx}`} className="col-12 col-sm-6 col-lg-4 item">
                {/* Single Seller */}
                <div className="card no-hover">
                  <div className="single-seller d-flex align-items-center">
                    <a href="/author">
                      <img
                        className="avatar-md rounded-circle"
                        src={item.img}
                        alt=""
                      />
                    </a>
                    {/* Seller Info */}
                    <div className="seller-info ml-3">
                      <a className="seller mb-2" href="/author">
                        {item.seller}
                      </a>
                      <span>{item.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopSeller;

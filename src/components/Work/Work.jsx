import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL =
  'https://my-json-server.typicode.com/themeland/netstorm-json/work';

const Work = () => {
  const [data, setData] = useState({});
  const [workData, setWorkData] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        setData(res.data);
        setWorkData(res.data.workData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="work-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Intro */}
            <div className="intro mb-4">
              <div className="intro-content">
                <span>{data.preHeading}</span>
                <h3 className="mt-3 mb-0">{data.heading}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row items">
          {workData.map((item, idx) => {
            return (
              <div key={`wd_${idx}`} className="col-12 col-sm-6 col-lg-3 item">
                {/* Single Work */}
                <div className="single-work">
                  <i className={item.icon} />
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;

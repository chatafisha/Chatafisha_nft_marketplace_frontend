import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL =
  'https://my-json-server.typicode.com/themeland/netstorm-json-2/sidebar';

const Sidebar = () => {
  const [data, setData] = useState({});
  const [widgetData_1, setWidgetData1] = useState([]);
  const [widgetData_2, setWidgetData2] = useState([]);
  const [widgetData_3, setWidgetData3] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        setData(res.data);
        setWidgetData1(res.data.widgetData_1);
        setWidgetData2(res.data.widgetData_2);
        setWidgetData3(res.data.widgetData_3);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <aside className="col-12 col-lg-4 pl-lg-5 p-0 float-right sidebar">
      <div className="row">
        <div className="col-12 align-self-center text-left">
          {/* Widget [categories] */}
          <div className="item widget-categories">
            <h4 className="title">{data.widgetTitle_1}</h4>
            <ul className="list-group list-group-flush">
              {widgetData_1.map((item, idx) => {
                return (
                  <li
                    key={`wdo_${idx}`}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <a href="#">{item.title}</a>
                    <span className="badge circle">{item.content}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Widget [tags] */}
          <div className="item widget-tags">
            <h4 className="title">{data.widgetTitle_2}</h4>
            {widgetData_2.map((item, idx) => {
              return (
                <a key={`wdt_${idx}`} href="" className="badge tag">
                  {item.title}
                </a>
              );
            })}
          </div>
          {/* Widget [share-this] */}
          <div className="item widget-share-this">
            <h4 className="title">{data.widgetTitle_3}</h4>
            <ul className="navbar-nav social share-list">
              {widgetData_3.map((item, idx) => {
                return (
                  <li key={`wdth_${idx}`} className="nav-item">
                    <a href="#" className="nav-link">
                      <i className={item.icon} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

import React, { Component } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';

const BASE_URL =
  'https://my-json-server.typicode.com/themeland/netstorm-json-2/blogSingle';

const BlogSingle = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="single featured post-details">
      <div className="container">
        <div className="row">
          {/* Main */}
          <div className="col-12 col-lg-8 p-0">
            <div className="row">
              <div className="col-12 align-self-center">
                {/* Image */}
                <div className="blog-thumb">
                  <img className="w-100" src={data.image} alt="" />
                </div>
                <h2 className="featured ml-0">{data.title}</h2>
                <p>{data.content_1}</p>
                <p></p>
                <blockquote>{data.quote}</blockquote>
                <p>{data.content_2}</p>
                <p>{data.content_3}</p>
                {/* Post Holder */}
                <ul className="mb-5 post-holder">
                  <li className="post-meta-item">
                    <div className="date">
                      <span className="posted-on">
                        Posted On{' '}
                        <a href="#" rel="bookmark">
                          <time
                            className="entry-date published updated"
                            dateTime="2018-11-01T06:18:46+00:00"
                          >
                            {data.date}
                          </time>
                        </a>
                      </span>
                    </div>
                  </li>
                </ul>
                {/* Comments */}
                <h3 className="comments-reply-text mb-3">
                  {data.commentTitle}
                </h3>
                <p className="mt-3">{data.commentContent}</p>
                <form>
                  <fieldset>
                    <div className="row">
                      <div className="col-12 col-lg-6 input-group p-0 pr-lg-3 mb-3">
                        <input
                          type="text"
                          name="name"
                          data-minlength={3}
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="col-12 col-lg-6 input-group p-0 mb-3">
                        <input
                          type="email"
                          name="email"
                          data-minlength={3}
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 input-group p-0 mb-3">
                        <textarea
                          name="message"
                          data-minlength={3}
                          rows={4}
                          placeholder="Message"
                          required
                          defaultValue={''}
                        />
                      </div>
                    </div>
                    <div className="col-12 input-group p-0">
                      <a className="btn btn-bordered-white text-white">
                        {data.commentBtn}
                        <i className="icon-login ml-2" />
                      </a>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default BlogSingle;

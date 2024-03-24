import React, { useEffect, useState } from 'react';

import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { useParams, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ReducerNames } from '../utils/constants';
import { wallet } from '..';

const ItemDetails = () => {
  const { userAccountId } = useSelector((state) => state[ReducerNames.COMMON]);
  const [nft, setNft] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const tokenId = id.split('=')[1];
  useEffect(() => {
    if (window.location.search.includes('transactionHashes')) {
      window.location.href = '/transfer-msg/succeeded';
    }

    axios
      .get(
        `https://chatafisha-backend.netlify.app/.netlify/functions/api/find/${tokenId}`
      )
      .then((res) => {
        setNft(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleLinkClick = (url) => {
    window.location.href = url;
  };

  const formikTransfer = useFormik({
    initialValues: {
      address: '',
    },
    onSubmit: (values) => {
      console.log(values);
      wallet
        .transferNft({
          receiverId: values.address,
          tokenId: tokenId,
        })
        .then((res) => {
          console.log(res);
          navigate('/transfer-msg/succeeded');
        })
        .catch((err) => {
          handleLinkClick('/transfer-msg/failed');
        });
    },
  });

  return (
    <div className="main">
      <Breadcrumb title="Item Details" subpage="Explore" page="Item Details" />
      <section className="item-details-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-5">
              <div className="item-info">
                <div className="item-thumb text-center">
                  <img src={nft?.media} alt="" />
                </div>
                <div className="card no-hover countdown-times my-4">
                  {nft && (
                    <div
                      className="countdown d-flex justify-content-center"
                      data-date={nft.date}
                    />
                  )}
                  {/* <div
                      className="countdown d-flex justify-content-center"
                      data-date={thisinitData.date}
                    /> */}
                </div>
                {/* Netstorm Tab */}

                {/* Tab Content */}
              </div>
            </div>
            <div className="col-12 col-lg-6">
              {/* Content */}
              <div className="content mt-5 mt-lg-0">
                <h3 className="m-0">{nft?.name}</h3>
                <p>{nft?.description}</p>
                {/* Owner */}
                <div className="owner d-flex align-items-center">
                  <span>Owned By</span>
                  <a
                    className="owner-meta d-flex align-items-center ml-3"
                    key={nft?.owner_id}
                    href=""
                  >
                    <h6 className="ml-2">{nft?.owner_id}</h6>
                  </a>
                </div>
                {/* Item Info List */}
                {nft && (
                  <div className="item-info-list mt-4">
                    <ul className="list-unstyled">
                      <li className="price d-flex justify-content-between">
                        <strong>Type Of Waste : {nft.typeofwaste}</strong>
                        {/* <span>{initData.price_2}</span>
                        <span>{initData.count}</span> */}
                      </li>
                      <li>
                        <strong>kilograms : </strong>
                        <span>{nft.kgs} kg</span>
                      </li>
                      <li>
                        <strong>Image Proof : </strong>
                        <div className="item-thumb text-center">
                          <img src={nft.image} alt="" />
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
                {/*
                 <div className="item-info-list mt-4">
                    <ul className="list-unstyled">
                      <li className="price d-flex justify-content-between">
                        <span>Current Price {initData.price_1}</span>
                        <span>{initData.price_2}</span>
                        <span>{initData.count}</span>
                      </li>
                      <li>
                        <span>Size </span>
                        <span>{initData.size}</span>
                      </li>
                      <li>
                        <span>Volume Traded </span>
                        <span>{initData.volume}</span>
                      </li>
                    </ul>
                  </div> */}
                {nft?.owner_id == userAccountId && (
                  <form
                    onSubmit={formikTransfer.handleSubmit}
                    className="item-form card no-hover"
                  >
                    <div className="form-group mt-3">
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        id="address"
                        placeholder="receiver id"
                        onChange={formikTransfer.handleChange}
                        onBlur={formikTransfer.handleBlur}
                        value={formikTransfer.values.title}
                        required="required"
                      />
                    </div>

                    <button className="btn w-100 mt-3 mt-sm-4" type="submit">
                      Transfer
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <LiveAuctions /> */}
    </div>
  );
};

export default ItemDetails;

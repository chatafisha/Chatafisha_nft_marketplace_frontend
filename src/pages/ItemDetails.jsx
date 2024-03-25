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

  const formatKey = (key) => {
    return key
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const FormatDescription = () => {
    const pairs = (nft?.description ?? '')
      .split('\n')
      .reduce((accumulator, currentPair) => {
        const [key, ...value] = currentPair.split(': ');
        accumulator.push({ key, value: value.join(': ') });
        return accumulator;
      }, []);

    return (
      <div>
        {pairs.map(({ key, value }, index) => {
          if (!value) {
            return;
          }
          const isLink = value?.includes('https://');
          return (
            <div className="my-1" key={index}>
              <strong>{formatKey(key)}:</strong>{' '}
              {isLink ? (
                <a
                  className="owner-meta d-flex align-items-center"
                  key={value}
                  href={value}
                  target="_blank"
                >
                  <span className="text-truncate">{value}</span>
                </a>
              ) : (
                value
              )}
            </div>
          );
        })}
      </div>
    );
  };

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
              <div className="content mt-2 mt-lg-0">
                <h3 className="m-0">{nft?.name}</h3>
                <FormatDescription />
                {/* Owner */}
                <div className="owner d-flex align-items-center">
                  <strong>Owned By</strong>
                  <a
                    className="owner-meta"
                    key={nft?.accountid}
                    href={`https://nearblocks.io/address/${nft?.accountid}`}
                    target="_blank"
                  >
                    <span className="ml-1">{nft?.accountid}</span>
                  </a>
                </div>
                {/* Item Info List */}

                <div className="item-info-list mt-2">
                  <ul className="list-unstyled">
                    <li className="price d-flex justify-content-between">
                      <strong>Type Of Waste : {nft?.typeofwaste}</strong>
                      {/* <span>{initData.price_2}</span>
                        <span>{initData.count}</span> */}
                    </li>
                    <li>
                      <strong>kilograms : </strong>
                      <span>{nft?.kgs} kg</span>
                    </li>
                    <li>
                      <strong>Image Proof : </strong>
                      <div className="item-thumb text-center">
                        <img src={nft?.image} alt="" />
                      </div>
                    </li>
                  </ul>
                </div>

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
                {userAccountId && nft?.accountid == userAccountId && (
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

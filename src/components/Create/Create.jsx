import React, { Component, useEffect, useState } from 'react';
import AuthorProfile from '../AuthorProfile/AuthorProfile';

import { useFormik } from 'formik';
import axios from 'axios';
import { wallet } from '../..';
import { useLocation } from 'react-router-dom';

function Create() {
  const [collections, setCollections] = useState([]);
  const { state } = useLocation();
  const inputFormData = state?.data;

  useEffect(() => {
    const getColls = async () => {
      const colls = await wallet.getCollectionsNames();
      setCollections(colls); // Update the state
    };
    getColls();
    wallet.getData().then((res) => {
      console.log(res);
    });
    wallet.getNftTokens().then((res) => {
      console.log(res);
    });
  }, []);

  const handleLinkClick = (url) => {
    window.location.href = url;
  };

  const formikNft = useFormik({
    initialValues: {
      code: inputFormData?.code ?? '',
      title: '',
      url: '',
      description: inputFormData
        ? JSON.stringify(
            {
              description: inputFormData.description,
              kgs: inputFormData.kgs,
              name: inputFormData.name,
              typeofwaste: inputFormData.typeofwaste,
            },
            null,
            2
          )
        : '',
      accountId: inputFormData?.accountid ?? '',
      collectionName: '',
      email: inputFormData?.email ?? '',
    },
    onSubmit: (values) => {
      wallet
        .mintNft({
          assetCode: values.code,
          assetTitle: values.title,
          assetDescription: values.description,
          assetUrl: values.url,
          assetCollection: values.collectionName,
          accountId: values.accountId,
          emailAddr: values.email,
        })
        .then(async (res) => {})
        .catch((err) => {
          handleLinkClick('/create-msg/failed');
        });
    },
  });

  return (
    <section className="author-area">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-md-7">
            {/* Intro */}
            <div className="intro mt-5 mt-lg-0 mb-4 mb-lg-5">
              <div className="intro-content">
                <span>Get Started</span>
                <h3 className="mt-3 mb-0">Create NFT</h3>
              </div>
            </div>
            {/* Item Form */}

            <form
              onSubmit={formikNft.handleSubmit}
              className="item-form card no-hover"
            >
              <div className="row">
                {/* <div className="col-12">
                                        <div className="input-group form-group">
                                            <div className="custom-file">
                                                <input type="file" className="custom-file-input" id="inputGroupFile01" />
                                                <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                                            </div>
                                        </div>
                                    </div> */}
                <div className="col-12">
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="code"
                      id="code"
                      placeholder="Code of the NFT"
                      onChange={formikNft.handleChange}
                      onBlur={formikNft.handleBlur}
                      value={formikNft.values.code}
                      required="required"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      id="title"
                      placeholder="Item Title"
                      onChange={formikNft.handleChange}
                      onBlur={formikNft.handleBlur}
                      value={formikNft.values.title}
                      required="required"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="url"
                      id="url"
                      placeholder="Item URL"
                      onChange={formikNft.handleChange}
                      onBlur={formikNft.handleBlur}
                      value={formikNft.values.url}
                      required="required"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="description"
                      placeholder="Description"
                      id="description"
                      cols={30}
                      rows={9}
                      onChange={formikNft.handleChange}
                      onBlur={formikNft.handleBlur}
                      value={formikNft.values.description}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="accountId"
                      id="accountId"
                      onChange={formikNft.handleChange}
                      onBlur={formikNft.handleBlur}
                      value={formikNft.values.accountId}
                      placeholder="Wallet Address"
                      required="required"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      id="email"
                      onChange={formikNft.handleChange}
                      onBlur={formikNft.handleBlur}
                      value={formikNft.values.email}
                      placeholder="Email Address"
                      required="required"
                    />
                  </div>
                </div>

                {/* <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="price" placeholder="Item Price" required="required" />
                                        </div>
                                    </div> */}
                {/* <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="royality" placeholder="Royality" required="required" />
                                        </div>
                                    </div> */}
                {/* <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Size" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="copies" placeholder="No of Copies" required="required" />
                                        </div>
                                    </div> */}
                <div className="col-12">
                  <div>Collection</div>
                  <div className="form-group mt-3">
                    {collections.map((item, index) => (
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="collectionName"
                          id={item}
                          value={item}
                          key={index}
                          onChange={() => {
                            formikNft.setFieldValue('collectionName', item);
                          }}
                        />
                        <label className="form-check-label" htmlFor={item}>
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn w-100 mt-3 mt-sm-4" type="submit">
                    Create Item
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Create;

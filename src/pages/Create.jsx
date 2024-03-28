import React, { useEffect } from 'react';

import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Creates from '../components/Create/Create';
import { useSelector } from 'react-redux';
import { ReducerNames } from '../utils/constants';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import emailjs from '@emailjs/browser';

const sendEmail = async (data) => {
  const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAIL_MINT_TEMPLATE_ID;
  const publicId = process.env.REACT_APP_PUBLIC_KEY;
  emailjs.init(publicId);
  // Create an HTML form element
  const form = document.createElement('form');
  form.style.display = 'none'; // Hide the form

  // Append fields to the form
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const input = document.createElement('input');
      input.name = key;
      input.value = data[key];
      form.appendChild(input);
    }
  }
  console.log(data, form);
  document.body.appendChild(form);

  emailjs.sendForm(serviceId, templateId, form).then(
    (response) => {
      console.log('Email sent successfully:', response);
    },
    (error) => {
      console.error('Email sending failed:', error);
    }
  );
};

async function fetchTxnDetails({ txnHash, accountId, navigate }) {
  axios
    .post(
      'https://rpc.mainnet.near.org',
      JSON.stringify({
        jsonrpc: '2.0',
        id: 'dontcare',
        method: 'tx',
        params: [txnHash, accountId],
      }),
      {
        headers: {
          'content-type': 'application/json',
        },
      }
    )
    .then(async (transaction) => {
      const data = transaction.data.result.transaction;
      const methodName = data?.actions[0].FunctionCall.method_name;
      if (methodName === 'mint_nft') {
        const args = data?.actions[0].FunctionCall.args;
        if (args) {
          const parsedArgs = JSON.parse(atob(args));
          const description = JSON.parse(parsedArgs.description ?? '');
          const email = parsedArgs.token_metadata?.email;
          if (email) {
            await sendEmail({
              code: parsedArgs.token_id,
              name: description?.name ?? 'Our new NFT Owner',
              email: email,
            });
          }
          await axios
            .put(
              `https://chatafisha-backend.netlify.app/.netlify/functions/api/update-status/${parsedArgs.token_id}`
            )
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
          if (!window.location.href.includes('success-mint')) {
            navigate(parsedArgs);
          }
        }
      }
    });
}

const Create = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const transactionHashes = queryParams.get('transactionHashes');
  const { userAccountId } = useSelector((state) => state[ReducerNames.COMMON]);
  useEffect(() => {
    if (transactionHashes && userAccountId) {
      fetchTxnDetails({
        txnHash: transactionHashes,
        accountId: userAccountId,
        navigate: (args) =>
          navigate('/success-mint', { state: { args: args } }),
      });
    }
  }, [userAccountId, transactionHashes]);

  return (
    <div className="main">
      <Breadcrumb title="Create" subpage="Pages" page="Create" />
      <Creates />
    </div>
  );
};

export default Create;

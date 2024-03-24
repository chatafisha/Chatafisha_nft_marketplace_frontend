import React from 'react';

import { useParams } from 'react-router';

const TransferMsg = () => {
  const { type } = useParams();
  return (
    <div className="main">
      <section>
        <h1>NFT transfer {type} </h1>
      </section>
    </div>
  );
};

export default TransferMsg;

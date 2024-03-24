import React, { useEffect } from 'react';

import { useParams } from 'react-router';

const CreateMsg = () => {
  const { type } = useParams();
  useEffect(() => {
    console.log(type);
  }, []);
  return (
    <div className="main">
      <section>
        <h1>NFT Mint {type}</h1>
      </section>
    </div>
  );
};

export default CreateMsg;

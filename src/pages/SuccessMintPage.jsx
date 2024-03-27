import { useLocation } from 'react-router-dom';

const SucessMint = () => {
  const location = useLocation();
  let { args } = location.state;

  return (
    <div className="main" style={{ marginTop: '100px' }}>
      <div className="container">
        <div class="alert alert-success" role="alert">
          You have successfully minted NFT.
          <br /> The metadata of the NFT is following:
          <br />
          {JSON.stringify(args, null, 2)}
        </div>
      </div>
    </div>
  );
};
export default SucessMint;

// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import 'react-toastify/dist/ReactToastify.css';
import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react'; // Provider imports 'rollbar'
import { Provider as ReduxProvider } from 'react-redux';

// NEAR
import { Wallet } from './utils/nearWallet';
import { getConfig } from './utils/networkConfig';
import store from './redux/store';

const CONTRACT_ADDRESS = getConfig().app_contract;
const rollbarConfig = {
  accessToken: '31e514c3334a42728684b0638472dd32',
  environment: 'testenv',
};
export const wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS });

const root = ReactDOM.createRoot(document.getElementById('root'));

// Setup on page load
window.onload = async () => {
  root.render(
    <RollbarProvider config={rollbarConfig}>
      <ErrorBoundary
        fallbackUI={
          <p className="p-4">Oops an error occurred , please try again</p>
        }
      >
        <ReduxProvider store={store}>
          <App />
        </ReduxProvider>
      </ErrorBoundary>
    </RollbarProvider>
  );
};

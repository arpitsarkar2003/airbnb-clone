import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function LoadingScreen() {
  const [hideLoading, setHideLoading] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      // myScroll("#hero")
      setHideLoading(true);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-screen ${hideLoading ? "hidden" : "block"}  duration-500 bg-white h-screen w-screen flex justify-center items-center`}>
      <img src={"https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif"} alt="Loading" className='w-32 h-32'/>
    </div>
  );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoadingScreen />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";

const Home = ({ active = false, isOpen }) => {
  let color = !active ? "#676767" : "#90050F";

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.51602 2.36664L3.02435 5.86664C2.27435 6.44997 1.66602 7.69164 1.66602 8.63331V14.8083C1.66602 16.7416 3.24102 18.325 5.17435 18.325H14.8244C16.7577 18.325 18.3327 16.7416 18.3327 14.8166V8.74997C18.3327 7.74164 17.6577 6.44997 16.8327 5.87497L11.6827 2.26664C10.516 1.44997 8.64102 1.49164 7.51602 2.36664Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 14.9917V12.4917'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Home;

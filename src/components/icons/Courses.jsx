import React from "react";

const Courses = ({ active = false, isOpen }) => {
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
        d='M6.51495 2C5.21095 2.129 4.33295 2.419 3.67695 3.076C2.50195 4.253 2.50195 6.148 2.50195 9.939V13.959C2.50195 17.749 2.50195 19.645 3.67695 20.823C4.85195 22.001 6.74395 22 10.527 22H12.534C16.317 22 18.209 22 19.384 20.823C20.451 19.753 20.55 18.106 20.559 14.977'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.5277 7.00017L11.5307 10.5002C12.0907 11.6102 12.7937 11.9002 14.5407 12.0002C15.9297 11.9662 16.7357 11.8022 17.4237 11.2042C17.8927 10.7962 18.1047 10.1812 18.2077 9.56917L18.5517 7.50017M21.0597 5.50017V10.5002M8.60267 4.93317C10.1897 3.61617 11.6037 2.90917 14.5367 2.13117C14.8676 2.04381 15.2157 2.04553 15.5457 2.13617C18.1417 2.85017 19.5437 3.48417 21.4217 4.89417C21.5017 4.95417 21.5257 5.06617 21.4697 5.14917C20.8567 6.05117 19.4877 6.78217 16.1297 8.08417C15.4302 8.35329 14.6551 8.34901 13.9587 8.07217C10.3827 6.65217 8.73867 5.89217 8.53867 5.10317C8.53217 5.07168 8.53473 5.03899 8.54606 5.0089C8.55739 4.97881 8.57701 4.95255 8.60267 4.93317Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Courses;

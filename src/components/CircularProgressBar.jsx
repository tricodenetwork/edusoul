const CircularProgressBar = ({ percentage }) => {
  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className='flex justify-center items-center w-16 h-16'>
      <svg className='' width={64} height={64}>
        <circle
          className='fill-none stroke-gray-300'
          cx={32}
          cy={32}
          r={radius}
          strokeWidth={10}
        />
        <circle
          className='fill-none -rotate-90 stroke-primary transition-all'
          cx={32}
          cy={32}
          r={radius}
          strokeWidth={10}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap='round'
          style={{ transformOrigin: "50% 50%" }}
        />
        <text
          x='50%'
          y='50%'
          textAnchor='middle'
          dy='.3em'
          className='text-[8px] fill-appBlack font-semibold'
        >
          {`${percentage}%`}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;

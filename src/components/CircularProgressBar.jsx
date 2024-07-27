const CircularProgressBar = ({ percentage, diameter = 64, radius = 25 }) => {
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div
      style={{ width: diameter, height: diameter }}
      className='flex justify-center items-center'
    >
      <svg className='' width={diameter} height={diameter}>
        <circle
          className='fill-none stroke-gray-300'
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          strokeWidth={10}
        />
        <circle
          className='fill-none -rotate-90 stroke-primary transition-all'
          cx={diameter / 2}
          cy={diameter / 2}
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

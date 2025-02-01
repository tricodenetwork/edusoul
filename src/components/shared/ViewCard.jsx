"use client";
const ViewCard = ({ headerLeft, headerRight }) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className=' border-[#99B2C6] border rounded-[8px] mt-[42px]'>
      <div className='grid border-[#99b2c6] bg-[#f6f6f6] h-[40px] rounded-t-[8px] place-content-center px-[25px] grid-cols-[3fr,1fr,1fr]'>
        <p className='text-[13px]'>{headerLeft}</p>
        <p className='text-[13px] text-center flex items-center justify-center'>
          {headerRight}
        </p>
        <p className='text-[13px]'></p>
      </div>
      <div className='grid border-[#99b2c6]  h-[80px] rounded-t-[8px] place-content-center px-[25px] grid-cols-[3fr,1fr,1fr]'>
        <div className=''>
          <h4 className='text-[16px] font-semibold text-appBlack'>Event One</h4>
          <p className='text-[13px]'>Introduction to the Old Testament</p>
        </div>
        <p className='text-[13px] text-center flex items-center justify-center'>
          10
        </p>
        <AppButton title={"Edit Event"} action={() => console.log("Hello")} />
      </div>
    </div>
  );
};
export default ViewCard;

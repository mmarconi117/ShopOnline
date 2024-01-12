import userIcon from '../../assets/ICONS/user/prof_user.png';

const Welcome = () => {
  return (
    <div className="hidden min-[1450px]:flex flex-col py-5 min-h-[636px] px-[22px] items-center rounded-[10px] bg-white">
      <img src={userIcon} alt="user_icon" className="w-16 h-16 mx-auto" />
      <p className="mt-3 mb-[38px] font-Roboto text-xl leading-6 font-bold">Welcome to SONNY</p>
      <div className='bg-gray-300 h-full w-[271px] rounded-lg'>
        {/* Content goes here */}
      </div>
    </div>
  );
};

export default Welcome;
import PropTypes from 'prop-types';

export  const ExploreItem = ({src,title}) => {
  return (
    <div className="flex w-[219px] flex-col pt-[10px] pb-5 px-[10x] justify-center items-center bg-[#FBFDFE] gap-[17px]">
        <img src={src} alt="" className="w-[197px] h-[179px] rounded-sm"/>
        <div className="text-[#2284B6] text-center text-xl font-semibold font-[Roboto]">{title}</div>
    </div>
  )

}

ExploreItem.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
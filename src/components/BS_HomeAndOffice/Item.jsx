import PropTypes from "prop-types";

export const Item = ({ src, description, price }) => {


  return (
      <a
      href="#"
      className="bg-white flex flex-col p-2 pb-3 justify-start gap-4 min-w-[175px] min-h-[373px] rounded-[5px] border border-solid border-[#AEA9B1] min-[465px]:w-[219px] min-[465px]:p-[10px] min-[465px]:pb-4 min-[465px]:gap-6 min-[465px]:border-0"
    >
      <img
        src={src}
        alt=""
        className="w-[159px] h-[214px] rounded-[3px] bg-center object-cover min-[391px]:w-[199px] min-[391px]:h-[222px] min-[391px]:rounded-[5px]"
      />

      <div className="font-Roboto flex flex-col justify-center items-start gap-3 min-[391px]:gap-4">
        <div className="text-[14px] leading-5 tracking-[0.25px]">
          {description}
        </div>
        <div className="text-[14px] leading-5 tracking-[0.25px]">
          from <span className="text-[#09618E] text-xl font-bold leading-6 tracking-[0.15px]">{`$${price}`}</span>
        </div>
      </div>
    </a>
    
    
  );
};

Item.propTypes = {
  src: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

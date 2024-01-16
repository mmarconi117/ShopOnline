import ticket from "../../assets/ICONS/ticket.svg";
import user from "../../assets/ICONS/user.png";
import leftArrow from "../../assets/ICONS/LeftArrow.svg"
import group from "../../assets/ICONS/Group.svg";
import eye from "../../assets/ICONS/eye.svg"
import RightArrow from "../../assets/ICONS/RightArrow.svg"
import delivery from "../../assets/ICONS/delivery.svg"

const Account = () => {
  return (
    <div className="w-full flex flex-col gap-4 self-center px-4 pt-6 lg:flex-row lg:justify-center lg:items-start lg:gap-[25px] font-Roboto">
      <div className="sidebar w-full self-stretch lg:w-[20%] flex flex-col lg:gap-5 p-2 lg:px-8 lg:pt-5 lg:pb-[35px] min-w-max bg-white text-base font-medium">
        <div className="account flex justify-between lg:justify-start items-start lg:pb-5 lg:border-b border-[#938F96] border-solid">
          <div className="flex justify-center items-center gap-[14px]">
            <span className="hidden lg:inline-block">
              <img src={user} alt="user-icon" className="w-6 h-6"/>
            </span>
            <a href="/account">My account</a>
          </div>
          <span>
            <img className="lg:hidden w-6 h-6" src={leftArrow} alt="user-icon" />
          </span>
        </div>
        <div className="hidden lg:flex gap-[14px] items-start">
          <span><img src={ticket} alt="" className="w-6 h-6"/></span>
          <a href="">Orders</a>
        </div>
        <div className="hidden lg:flex gap-[14px] items-start">
          <span><img src={ticket} alt="" className="w-6 h-6"/></span>
          <a href="">Payments</a>
        </div>
        <div className="hidden lg:flex gap-[14px] items-start">
          <span><img src={ticket} alt="" className="w-6 h-6"/></span>
          <a href="">Pending Reviews</a>
        </div>
        <div className="hidden lg:flex gap-[14px] items-start">
          <span><img src={ticket} alt="" className="w-6 h-6"/></span>
          <a href="">Voucher</a>
        </div>
        <div className="hidden lg:flex gap-[14px] items-start">
          <span><img src={ticket} alt="" className="w-6 h-6"/></span>
          <a href="">Recently Viewed</a>
        </div>
        <div className="hidden lg:flex gap-[14px] items-start pb-5 border-b border-[#938F96] border-solid">
          <span><img src={ticket} alt="" className="w-6 h-6"/></span>
          <a href="">Notifications</a>
        </div>
        <div className="hidden lg:block">
          <a href="">Account Management</a>
        </div>
        <div className="hidden lg:block">
          <a href="">Edit Shipping address</a>
        </div>
        <div className="hidden lg:block">
          <a href="">Digital service and device Support</a>
        </div>
        <div className="hidden lg:block pb-5 border-b border-[#938F96] border-solid">
          <a href="">Customer Service</a>
        </div>
        <button className="hidden lg:flex items-start justify-center gap-[14px]">
          <span>
            <img src={user} alt="logout icon"/>
          </span>
          <div className="text-[#E46962]">LOGOUT</div>
        </button>
      </div>
      <div className="rightSection w-full lg:w-[70%] flex flex-col lg:gap-14">
        <div className="menu bg-white flex flex-col p-8 pt-7 gap-14 lg:gap-10">
          <div className="hero flex justify-start gap-3 lg:gap-8">
            <img src={group} alt="hero icon" className="w-12 h-12 "/>
            <div className="inline-flex flex-col items-start gap-[2px] lg:gap-1">
              <p className="text-xl font-semibold text-[#313133] lg:text-[32px] lg:leading-[52px]">Username</p>
              <p className="text-xs text-[#79767D] lg:text-base lg:text-[#313133]">userId:{1234}</p>
            </div>
          </div>

          <div className="buttons flex justify-around items-start gap-14 lg:justify-around">
            <button className="flex flex-col gap-2 items-center">
              <img src={eye} alt="Wishlist icon" className="w-6 h-6 lg:w-12 lg:h-12" />
              <p className="text-[14px] leading-5 lg:text-base">Wishlist</p>
            </button>
            <button className="flex flex-col gap-2 items-center">
              <img src={eye} alt="view icon" className="w-6 h-6 lg:w-12 lg:h-12" />
              <p className="text-[14px] leading-5 lg:text-base">Viewed</p>
            </button>
            <button className="flex flex-col gap-2 items-center">
              <img src={eye} alt="percentage icon" className="w-6 h-6 lg:w-12 lg:h-12" />
              <p className="text-[14px] leading-5 lg:text-base">Coupons</p>
            </button>
          </div>
        </div>

        <div className="line lg:hidden h-[1px] self-center bg-[#CAC5CD] w-[95%]"></div>

        <div className="shipping-status max-lg:bg-white p-8 pb-12 lg:p-0 flex flex-col gap-5">
          <div className="flex justify-between items-center lg:px-9 lg:py-4 bg-white">
            <p className=" text-[#313133] font-semibold text-base lg:text-2xl lg:leading-10">My order</p>
            <div className="flex justify-between items-center">
              <button className="text-[14px] leading-[22px] max-lg:underline text-[#3A92BE] lg:text-[#313133] lg:text-base">View</button>
              <span className="hidden lg:block"><img src={RightArrow} alt="right arrow" className="w-6 h-6"/></span>
            </div>
          </div>

          {/* Desktop Version */}
          <div className="hidden lg:flex bg-white justify-around px-[72px] py-5">
            <button className="flex flex-col items-center gap-2">
              <span><img src={delivery} alt="shipping icon" className="w-12 h-12"/></span>
              <div>Shipped</div>
            </button>
            <button className="flex flex-col items-center gap-2">
              <span><img src={delivery} alt="To be shipped icon" className="w-12 h-12"/></span>
              <div>To be shipped</div>
            </button>
            <button className="flex flex-col items-center gap-2">
              <span><img src={delivery} alt="unpaid icon" className="w-12 h-12"/></span>
              <div>Unpaid</div>
            </button>
            <button className="flex flex-col items-center gap-2">
              <span><img src={delivery} alt="To be reviewed icon" className="w-12 h-12"/></span>
              <div>To be reviewed</div>
            </button>
          </div>
          {/* Mobile version */}
          
          <div className="lg:hidden bg-white flex flex-col gap-4">
            <div className="flex justify-between items-center text-[14px] leading-5">
              <div>Shipped</div>
              <div>{`(12)`}</div>
            </div>
            <div className="flex justify-between items-center text-[14px] leading-5">
              <div>To be shipped</div>
              <div>{`(04)`}</div>
            </div>
            <div className="flex justify-between items-center text-[14px] leading-5">
              <div>Unpaid</div>
              <div>{`(01)`}</div>
            </div>
            <div className="flex justify-between items-center text-[14px] leading-5">
              <div>To be reviewed</div>
              <div>{`(24)`}</div>
            </div>
            <div className="flex justify-between items-center text-[14px] leading-5">
              <div>Refunds</div>
              <div>None</div>
            </div>

          </div>
          <div className="bg-white flex flex-col items-start gap-[10px] lg:gap-4 lg:px-9 lg:py-6">
            <div className="flex gap-4 items-center lg:gap-[25px]">
              <div className="bg-[#E6E0E9] w-4 h-4 rounded-full"></div>
              <button className="text-[14px] leading-5 lg:text-base">My appeal</button>
            </div>
            <div className="flex gap-4 items-center lg:gap-[25px]">
              <div className="bg-[#E6E0E9] w-4 h-4 rounded-full"></div>
              <button className="text-[14px] leading-5 lg:text-base">In dispute</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;

import Footer from "../../components/Footer/Footer";
import yellowchat from "../../assets/ICONS/yellowchat.svg"
import notify from "../../assets/ICONS/notify.svg"
import myaccout from "../../assets/ICONS/myaccout.svg"
import order from "../../assets/ICONS/order.svg"
import Payonline from "../../assets/ICONS/Payonline.svg"
import pending from "../../assets/ICONS/pending.svg"
import voucher from "../../assets/ICONS/voucher.svg"
import saved from "../../assets/ICONS/voucher.svg"
import Recently from "../../assets/ICONS/Recently.svg"
import logoutred from "../../assets/ICONS/logoutred.svg"



const Help = () => {
  return (
    <div>

      <div className="self-stretch mt-20 mx-8 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
            <span className="items-stretch bg-white flex w-full grow flex-col mx-auto pt-5 pb-9 px-8 rounded-md max-md:mt-2.5 max-md:px-5">

              <span className="items-stretch flex justify-between gap-3.5">
                <img

                  src={myaccout} alt=""
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-zinc-800 text-base font-medium leading-6">
                  <a href="/account">My account</a>
                </div>
              </span>

              <span className="items-stretch flex justify-between gap-3.5 mt-10">
                <img src={order} alt="" />
                <div className="text-zinc-800 text-base font-medium leading-6">
                  <a href="">Orders</a>
                </div>
              </span>

              <span className="items-stretch flex justify-between gap-3.5 mt-5">
                <img src={Payonline} alt="" />
                <div className="text-zinc-800 text-base font-medium leading-6">
                  <a href="">Payments</a>
                </div>
              </span>
              <span className="items-stretch flex justify-between gap-3.5 mt-5">
                <img src={pending} alt="" />
                <div className="text-zinc-800 text-base font-medium leading-6">
                  <a href="">Pending Reviews</a>
                </div>
              </span>

              <span className="items-stretch flex justify-between gap-3.5 mt-5">
                <img src={voucher} alt="" />

                <div className="text-zinc-800 text-base font-medium leading-6">
                  <a href="">Voucher</a>
                </div>
              </span>

              <span className="items-stretch flex justify-between gap-3.5 mt-5">
                <img src={saved} alt="" />
                <div className="text-zinc-800 text-base font-medium leading-6">
                  <a href="">Saved items</a>
                </div>
              </span>

              <span className="items-stretch flex justify-between gap-3.5 mt-5">
                <img src={Recently} alt="" />
                <div className="text-zinc-800 text-base font-medium leading-6">
                  <a href="">Recently Viewed</a>
                </div>
              </span>
              <span className="items-stretch flex justify-between gap-3.5 mt-5">
                <img

                  src={notify} alt=""
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-zinc-800 text-base font-medium leading-6">
                  <a href="">Notifications</a>
                </div>
              </span>

              <div className="text-zinc-800 text-base font-medium leading-6">
                <a href="">Notifications</a>
              </div>

              <div className="text-zinc-800 text-base font-medium leading-6 mt-10">
                <a href="">Account Management</a>
              </div>
              <div className="text-zinc-800 text-base font-medium leading-6">
                <a href="">Edit Shipping address</a>
              </div>
              <div className="text-zinc-800 text-base font-medium leading-6">
                <a href="">Digital service and device Support</a>
              </div>
              <div className="text-zinc-800 text-base font-medium leading-6 mt-5">
                <a href="">Customer Service</a>
              </div>
              <span className="justify-between items-stretch flex gap-3.5 mt-10 px-20 max-md:px-5">
                <img src={logoutred} alt="" />
                <div className="text-red-400 text-base font-medium leading-6">LOGOUT</div>
              </span>
            </span>
          </div>

          <div className="flex flex-col items-stretch w-[76%] ml-5 max-md:w-full max-md:ml-0">
            <span className="flex flex-col items-stretch max-md:max-w-full max-md:mt-2.5">
              <div className="bg-white flex flex-col justify-center items-center px-16 py-8 max-md:max-w-full max-md:px-5">
                <span className="flex w-[423px] max-w-full flex-col items-stretch">
                  <span className="flex flex-col pl-6 pr-14 items-end max-md:max-w-full max-md:px-5">
                    <div className="text-neutral-800 text-center text-2xl leading-8 whitespace-nowrap">
                      Need help? Let us help you!
                    </div>
                    <div className="text-neutral-800 text-center text-2xl leading-8 self-stretch whitespace-nowrap mt-9">
                      Give us a call: 1-800-123-4567
                    </div>
                  </span>
                  <div className="text-neutral-800 text-center text-2xl leading-8 mt-2.5 max-md:max-w-full">
                    Email us: nyshopping@shopping.com
                  </div>
                  <div className="text-neutral-800 text-center text-2xl leading-8 self-center whitespace-nowrap mt-1">
                    Monday - Friday 6am - 5pm PST
                  </div>
                  <div className="text-neutral-800 text-center text-2xl leading-8 self-center whitespace-nowrap mt-1.5">
                    Saturday - Sunday 8am - 2pm PST
                  </div>
                </span>
              </div>
              <div className="text-zinc-800 text-4xl font-medium leading-10 ml-4 mt-8 self-start max-md:max-w-full">
                See frequently asked question on popular Topics
              </div>
              <img

                src={yellowchat} alt=""
                className="aspect-[0.23] object-contain object-center w-16 shadow-sm overflow-hidden max-w-full mt-16 self-end max-md:mt-10"
              />
            </span>
          </div>
        </div>
      </div>


      <button className="text-cyan-600 text-center text-xl leading-6 whitespace-nowrap justify-center items-stretch border border-[color:var(--Color-Styles-Primary-color-blue-T1000,#2284B6)] self-center ml-44 mt-28 px-12 py-4 rounded-md border-solid max-md:mt-10 max-md:px-5">
        Give us feedback
      </button>


      <Footer />
    </div>
  );
};

export default Help;


import facebook from "../../assets/ICONS/socials/facebook.svg";
import twitter from "../../assets/ICONS/socials/twitter.svg";
import linkedin from "../../assets/ICONS/socials/linkedin.svg";
import instagram from "../../assets/ICONS/socials/instagram.svg";
import dhl from "../../assets/ICONS/payment/dhl.svg"
import visa from "../../assets/ICONS/payment/visa.svg"
import mastercard from "../../assets/ICONS/payment/mastercard.svg"
import paypal from "../../assets/ICONS/payment/paypal.svg"
const PaymentSocial = () => {
  return (
    <div className="flex flex-col self-center">
      <div className="flex flex-col items-start gap-12">
        <div className="flex flex-col gap-4">
          <div className="text-[#605D64] font-[Roboto] text-xl font-bold leading-[120%]">Join us on</div>
          <div className="flex gap-2">
            <img src={facebook} alt="" className="w-8 h-8"/>
            <img src={instagram} alt="" className="w-8 h-8"/>
            <img src={linkedin} alt="" className="w-8 h-8"/>
            <img src={twitter} alt="" className="w-8 h-8"/>
          </div>
        </div>
      <div>
        <div className="text-[#605D64] font-[Roboto] text-xl font-bold leading-[120%]">PAYMENT METHODS AND DELIVERY PARTNERS</div>
        <div className="flex gap-8">
            <img src={visa} alt="" className="w-8 h-8"/>
            <img src={dhl} alt="" className="w-8 h-8"/>
            <img src={mastercard} alt="" className="w-8 h-8"/>
            <img src={paypal} alt="" className="w-8 h-8"/>
          </div>
      </div>
      </div>

    </div>
  );
};

export default PaymentSocial;

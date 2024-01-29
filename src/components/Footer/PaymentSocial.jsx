
import visa from "../../assets/ICONS/payment/visa.svg";
import mastercard from "../../assets/ICONS/payment/mastercard.svg";
import paypal from "../../assets/ICONS/payment/paypal.svg";

const PaymentSocial = () => {
  const payments = [visa, mastercard, paypal];

  return (
    <div className="flex flex-col self-center pt-10">
      <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between md:gap-12">
        <div className="mt-4 sm:mt-0">
          <div className="text-[#b7b9ba] font-[Roboto] text-xl font-bold">PAYMENT METHODS</div>
          <div className="flex gap-4 text-center justify-center">
            {payments.map((pay, index) => (
              <div key={index}>
                <img src={pay} alt="" className="w-8 h-8" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSocial;

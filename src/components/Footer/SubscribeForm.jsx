

const SubscribeForm = () => {
  return (
    <div className="flex flex-col items-center gap-14">
      <div className="flex flex-col items-center gap-2">

        <div className="text-2xl font-normal leading-[120%] text-[#48464C]">New to YORK SHOPPERS</div>
        <div className="text-xl font-[Roboto] font-normal leading-[120%]">
          Subscribe to our newsletter to get updates on our latest offers
        </div>
        <div className="border border-solid border-[#3A92BE] rounded-md w-[80%]  flex">
          <input type="text" placeholder="Email" className="flex-1 p-2"/>
          <button className="p-2 bg-[#09618E]">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;

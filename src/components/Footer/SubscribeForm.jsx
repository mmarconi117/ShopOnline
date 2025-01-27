import { useState } from "react";
// import emailjs from '@emailjs/browser';

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isValidEmail(email)===true) {
      // Handle further actions like sending the email here
      setIsValid(true)
      ////i'm thinking of installing emailjs npm////
      /////serviceID,templateID, publicID will need to be replace with info from tonyrocksllc@gmail.com emailJS account
      const serviceID="service_v0cu1sb";   ////
      const templateID="template_sbrssjl";   ////
      const publicKey="kt0-H3pTQETucgU43";   ////
         ///dynamic template params///

      const templateParams={
        from_email:email
      }
      ///send emails///
      emailjs.send(serviceID,templateID,templateParams,publicKey).then((response)=>{
        console.log('success!!!!',response)
        setEmail('')
      }).catch((error)=>{
        console.log('error email->',error)
      })
    } else {
      setIsValid(false);
    }

  };

  const handleChange = (event) => {
    setEmail(event.target.value);
    // setIsValid(true);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 justify-center min-w-[200px]">
      <div className="text-xl font-normal whitespace-normal leading-[120%] text-[#b7b9ba] text-center font-sansita-one">
        New to Shop Online New York
      </div>
      <div className="max-w-[220px] text-base lg:text-xl leading-5 font-[Roboto] text-[#b7b9ba] font-normal text-center ">
        Subscribe to our newsletter to get updates on our latest offers
      </div>
      <div className="self-stretch flex justify-start">
          <input
            onChange={handleChange}
            value={email}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="p-2 w-2/3 rounded-l-md outline-none"
          />
          <button type="submit" className="p-2 bg-[#eec643] rounded-r-md">
            Subscribe
          </button>
        {!isValid && (
          <p className="text-[#FF0000] text-sm">Please Enter Valid Email</p>
        )}
      </div>
    </form>
  );
};

export default SubscribeForm;

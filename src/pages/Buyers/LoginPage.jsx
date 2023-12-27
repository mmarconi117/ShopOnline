import facebook from "../../assets/ICONS/socials/facebook.svg";
import twitter from "../../assets/ICONS/socials/twitter.svg";
import linkedin from "../../assets/ICONS/socials/linkedin.svg";
import instagram from "../../assets/ICONS/socials/instagram.svg";

const LoginPage = () => {
  const socialMedia = [facebook, instagram, linkedin, twitter];

  return (
    <div className="flex flex-col items-center gap-5 sm:gap-0 mb-8 font-['Roboto'] max-sm:px-4 max-sm:py-12">
      <div className="flex flex-col gap-4 p-4 text-center">
        <h1 className="text-[#2284B6]">LOGO</h1>
        <h3 className="sm:text-xl">Welcome to xxxx</h3>
        <p className="text-xs sm:text-base">Type your e-mail or phone number to log in to your account.</p>
      </div>
      <div className="flex flex-col max-w-[704px] w-full border-0 sm:border-[0.5px] sm:border-[#938F96] sm:p-10">
        <form action="" className="flex flex-col gap-5 max-sm:gap-6 leading-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold max-sm:font-medium max-sm:text-[14px] leading-6 max-sm:leading-[22px]">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              className="p-3 pl-5 border-[1px] border-[#938F96] rounded-md"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-semibold max-sm:font-medium max-sm:text-[14px] max-sm:leading-[22px]">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              className="p-3 pl-5 border-[1px] border-[#938F96] rounded-md"
            />
          </div>

          <div className="flex gap-2 font-normal max-sm:leading-4 max-sm:text-xs">
            <input type="checkbox" name="" id="" />
            <span>Stay signed in</span>
          </div>

          <button
            type="submit"
            className="bg-[#EEC643] px-8 py-4 max-sm:py-[14px] max-sm:px-[30px] max-w-[704px] sm:font-semibold w-full mx-auto mt-8 rounded-md max-sm:text-sm"
          >
            Log in
          </button>
        </form>

        <div className="py-8 text-center">
          Dont have an account?
          <a href="/signup" className="p-2 underline text-[#1F2070] ">
            Sign up
          </a>
        </div>

        <div>
          <div className="flex items-center">
            <div className="flex-1 h-px bg-[#938F96]"></div>
            <div className="mx-4 text-sm font-['Roboto']">or continue with</div>
            <div className="flex-1 h-px bg-[#938F96]"></div>
          </div>
          <div className="flex justify-center py-10 gap-9">
            {socialMedia.map((media,i)=>{
              return <img key={i} src={media} className="w-12 h-12 max-sm:w-8 max-sm:h-8"/>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

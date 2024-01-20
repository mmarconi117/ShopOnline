import SideBar from './Components/SideBar/SideBar';
import Body from './Components/Body/Body';
import TopBar from './Components/TopBar/TopBar'

function PaymentServices() {
  return (
    <div className="w-full">
      <TopBar />
      <div className='flex w-[1512px]'>
        <SideBar />
        <Body />
      </div>
    </div>
  );
}

export default PaymentServices;


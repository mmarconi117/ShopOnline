import SideBar from '../../../components/SideBar/SideBar';
import Body from './components/Body';
import TopBar from '../../../components/TopBar/TopBar'

function NotificationSettings() {
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

export default NotificationSettings;
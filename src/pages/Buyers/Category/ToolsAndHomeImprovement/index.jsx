import Electrical from "./Electrical";
import Flooring from "./Flooring";
import Hardware from "./Hardware";
import LightbulbsAndFans from "./LightbulbsAndFans";
import Mailboxes from "./Mailboxes";
import OutdoorTools from "./OutdoorTools";
import Paint from "./Paint";
import Plumbing from "./Plumbing";
import Tools from "./Tools";
import Wallpaper from "./Wallpaper";
import UpperBody from "./upperBody";

const ToolsAndHomeImprovement = () => {
    return (
        <div className="bg-[#f5f5f9]">
            <UpperBody />
            <LightbulbsAndFans />
            <Hardware />
            <Electrical />
            <Paint />
            <Wallpaper />
            <Flooring />
            <Plumbing />
            <Mailboxes />
            <Tools />
            <OutdoorTools />
        </div>
    );
};

export default ToolsAndHomeImprovement;
import { useNavigate } from 'react-router-dom'

function DesktopView() {
    const navigate = useNavigate();

    //Function to navigate to Camping page
    const DesktopView = () => {
        navigate('/desktopview');
    };

    return (
        <div>
            <button href="#" onClick={DesktopView}>
                Desktop View
            </button>
        </div>
    );
}

export default DesktopView;
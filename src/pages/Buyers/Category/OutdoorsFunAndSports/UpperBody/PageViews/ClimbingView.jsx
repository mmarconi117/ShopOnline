import { useNavigate } from 'react-router-dom'

function ClimbingView() {
    const navigate = useNavigate();

    //Function to navigate to Climbing page
    const ClimbingView = () => {
        navigate('/climbingview');
    };

    return(
        <div>
            <button href="#" onClick={ClimbingView}>
                Climbing and Mountaineering
            </button>
        </div>
    );
}

export default ClimbingView;
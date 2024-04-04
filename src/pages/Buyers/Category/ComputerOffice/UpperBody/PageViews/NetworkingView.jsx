import { useNavigate } from 'react-router-dom'

function NetworkingView() {
    const navigate = useNavigate();

    //Function to navigate to Camping page
    const NetworkingView = () => {
        navigate('/networkingview');
    };

    return (
        <div>
            <button href="#" onClick={NetworkingView}>
                Networking View
            </button>
        </div>
    );
}

export default NetworkingView;
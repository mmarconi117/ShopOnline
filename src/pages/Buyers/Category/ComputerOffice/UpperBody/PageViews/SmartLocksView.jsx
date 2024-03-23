import { useNavigate } from 'react-router-dom'

function SmartLocksView() {
    const navigate = useNavigate();

    //Function to navigate to Camping page
    const SmartLocksView = () => {
        navigate('/smartlocksview');
    };

    return (
        <div>
            <button href="#" onClick={SmartLocksView}>
                Smart Locks and Accessories
            </button>
        </div>
    );
}

export default SmartLocksView;
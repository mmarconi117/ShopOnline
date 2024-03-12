import { useNavigate } from 'react-router-dom'

function GymToolsView() {
    const navigate = useNavigate();

    //Function to navigate to Gym Tools page
    const GymToolsView = () => {
        navigate('/gymtoolsview');
    };

    return(
        <div>
            <button href="#" onClick={GymToolsView}>
                Gym Tools and Equipment
            </button>
        </div>
    );
}

export default GymToolsView;
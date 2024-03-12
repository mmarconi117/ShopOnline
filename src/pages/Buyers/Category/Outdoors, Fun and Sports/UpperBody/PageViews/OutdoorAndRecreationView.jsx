import { useNavigate } from 'react-router-dom'

function OutdoorAndRecreationView() {
    const navigate = useNavigate();

    //Function to navigate to Outdoor and rec page
    const OutdoorAndRecreationView = () => {
        navigate('/outdoorrecview');
    };

    return(
        <div>
            <button href="#" onClick={OutdoorAndRecreationView}>
                Outdoor and Recreation
            </button>
        </div>
    );
}

export default OutdoorAndRecreationView;
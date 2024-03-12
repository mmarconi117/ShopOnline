import { useNavigate } from 'react-router-dom'

function OutdoorsAndSportsView() {
    const navigate = useNavigate();

    //Function to navigate to Outdoors and Sports page
    const OutdoorsAndSportsView = () => {
        navigate('/outdoorsandsportsview');
    };

    return(
        <div>
            <button href="#" onClick={OutdoorsAndSportsView}>
                Outdoors and Sports
            </button>
        </div>
    );
}

export default OutdoorsAndSportsView;
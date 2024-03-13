import { useNavigate } from 'react-router-dom'

function CampingView() {
    const navigate = useNavigate();

    //Function to navigate to Camping page
    const CampingView = () => {
        navigate('/campingview');
    };

    return(
        <div>
            <button href="#" onClick={CampingView}>
                Camping Supplies
            </button>
        </div>
    );
}

export default CampingView;
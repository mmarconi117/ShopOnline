import { useNavigate } from 'react-router-dom'

function CyclingView() {
    const navigate = useNavigate();

    //Function to navigate to Cycling page
    const CyclingView = () => {
        navigate('/cyclingview');
    };

    return(
        <div>
            <button href="#" onClick={CyclingView}>
                Cycling
            </button>
        </div>
    );
}

export default CyclingView;
import {useNavigate} from 'react-router-dom'

function SurvivalView() {
    const navigate = useNavigate();

    //Function to navigate to Survival and Navigation page
    const SurvivalView = () => {
        navigate('/survivalview');
    };

    return(
        <div>
            <button href="#" onClick={SurvivalView}>
                Survival and Navigation
            </button>
        </div>
    );
}

export default SurvivalView;
import { useNavigate } from 'react-router-dom'

function PresentationView() {
    const navigate = useNavigate();

    //Function to navigate to Camping page
    const PresentationView = () => {
        navigate('/officesuppliesview');
    };

    return (
        <div>
            <button href="#" onClick={PresentationView}>
                Presentation Supplies
            </button>
        </div>
    );
}

export default PresentationView;
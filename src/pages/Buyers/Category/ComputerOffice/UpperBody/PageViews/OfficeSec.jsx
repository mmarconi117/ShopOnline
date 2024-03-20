import { useNavigate } from 'react-router-dom'

function OfficeSecView() {
    const navigate = useNavigate();

    //Function to navigate to Camping page
    const OfficeSecView = () => {
        navigate('/officesecview');
    };

    return (
        <div>
            <button href="#" onClick={OfficeSecView}>
                Office Security
            </button>
        </div>
    );
}

export default OfficeSecView;
import { useNavigate } from 'react-router-dom'

function PrintersView() {
    const navigate = useNavigate();

    //Function to navigate to Camping page
    const PrintersView = () => {
        navigate('/printersview');
    };

    return (
        <div>
            <button href="#" onClick={PrintersView}>
                Printers and Scanners
            </button>
        </div>
    );
}

export default PrintersView;
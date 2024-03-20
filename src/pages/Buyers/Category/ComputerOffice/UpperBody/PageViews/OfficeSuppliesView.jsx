import { useNavigate } from 'react-router-dom'

function OfficeSuppliesView() {
    const navigate = useNavigate();

    //Function to navigate to Camping page
    const OfficeSuppliesView = () => {
        navigate('/officesuppliesview');
    };

    return (
        <div>
            <button href="#" onClick={OfficeSuppliesView}>
                Office Supplies
            </button>
        </div>
    );
}

export default OfficeSuppliesView;
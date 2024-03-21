import { useNavigate } from 'react-router-dom'

function LaptopsView() {
    const navigate = useNavigate();

    //Function to navigate to Camping page
    const LaptopsView = () => {
        navigate('/laptopsview');
    };

    return (
        <div>
            <button href="#" onClick={LaptopsView}>
                Laptops View
            </button>
        </div>
    );
}

export default LaptopsView;
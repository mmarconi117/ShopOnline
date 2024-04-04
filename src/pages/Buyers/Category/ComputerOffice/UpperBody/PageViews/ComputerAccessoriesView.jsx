import { useNavigate } from 'react-router-dom'

function ComputerAccessoriesView() {
    const navigate = useNavigate();

    //Function to navigate to Camping page
    const ComputerAccessoriesView= () => {
        navigate('/computeraccessories');
    };

    return (
        <div>
            <button href="#" onClick={ComputerAccessoriesView}>
                Computer Accessories
            </button>
        </div>
    );
}

export default ComputerAccessoriesView;
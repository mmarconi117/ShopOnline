import { useNavigate } from 'react-router-dom'

function StorageView() {
    const navigate = useNavigate();

    //Function to navigate to Camping page
    const StorageView = () => {
        navigate('/storageview');
    };

    return (
        <div>
            <button href="#" onClick={StorageView}>
                Organisation and Storage
            </button>
        </div>
    );
}

export default StorageView;
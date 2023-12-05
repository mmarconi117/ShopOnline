import { useNavigate } from 'react-router-dom';

function Dressesview(){
    //React Router element that helps to navigate between pages
    const navigate = useNavigate();

    const Dressesview = () => {
    // Perform the logic for checkout (replace with your desired implementation)
    // 
        navigate('/dressesview')
    };

    return(
        <div className="buttonview" style={{float: "left", padding: 10}}>
            <button href="#" onClick={Dressesview}>Dressesview</button>
        </div>
    );
}

export default Dressesview;
import { useNavigate } from 'react-router-dom';

function Topsview(){
    //React Router element that helps to navigate between pages
    const navigate = useNavigate();

    const Swimwearview = () => {
    // Perform the logic for checkout (replace with your desired implementation)
    // 
        navigate('/swimwearview')
    };

    return(
        <div className="buttonview" style={{float: "left", padding: 10}}>
            <button href="#" onClick={Swimwearview}>Swimwear</button>
        </div>
    );
}

export default Topsview;
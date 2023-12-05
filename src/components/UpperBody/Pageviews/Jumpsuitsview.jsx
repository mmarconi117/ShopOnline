import { useNavigate } from 'react-router-dom';

function Jumpsuitsview(){
 
    //React Router element that helps to navigate between pages
    const navigate = useNavigate();

    const Jumpsuitsview = () => {
    // Perform the logic for checkout (replace with your desired implementation)
    // 
        navigate('/jumpsuitsview')
    };

    return(
        <div className="buttonview" style={{float: "left", padding: 10}}>
            <button href="#" onClick={Jumpsuitsview}>Jumpsuitsview</button>
        </div>
    );
}

export default Jumpsuitsview;
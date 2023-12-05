import { useNavigate } from 'react-router-dom';

function Bottomsview(){
    //React Router element that helps to navigate between pages
    const navigate = useNavigate();

    const Bottomsview = () => {
    // Perform the logic for checkout (replace with your desired implementation)
    // 
        navigate('/bottomsview')
    };

    return(
        <div className="buttonview" style={{float: "left", padding: 10}}>
            <button href="#" onClick={Bottomsview}>Bottomsview</button>
        </div>
    );
}

export default Bottomsview;
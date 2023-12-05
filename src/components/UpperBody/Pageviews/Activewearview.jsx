import { useNavigate } from 'react-router-dom';

function Activewearview(){
    //React Router element that helps to navigate between pages
    const navigate = useNavigate();

    const Activewearview = () => {
    // Perform the logic for checkout (replace with your desired implementation)
    // 
        navigate('/activewearview')
    };

    return(
        <div className="buttonview" style={{float: "left", padding: 10}}>
            <button href="#" onClick={Activewearview}>Activewearview</button>
        </div>
    );
}

export default Activewearview;
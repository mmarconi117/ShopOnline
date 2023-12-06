import { useNavigate } from 'react-router-dom';

function Swimwearview(){

    //React Router element that helps to navigate between pages
    const navigate = useNavigate();

    const Swimwearview = () => {
    // function that navigates to swimwear page
        navigate('/swimwearview')
    };

    return(
        <div className="buttonview" style={{float: "left", padding: 10}}>
            <button href="#" onClick={Swimwearview}>Swimwear</button>
        </div>
    );
}

export default Swimwearview;
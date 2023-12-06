import { useNavigate } from 'react-router-dom';

function Jumpsuitsview(){
 
    //React Router element that helps to navigate between pages
    const navigate = useNavigate();

    const Jumpsuitsview = () => {
    // function that navigates to jumpsuits page
        navigate('/jumpsuitsview')
    };

    return(
        <div className="buttonview" style={{float: "left", padding: 10}}>
            <button href="#" onClick={Jumpsuitsview}>Jumpsuitsview</button>
        </div>
    );
}

export default Jumpsuitsview;
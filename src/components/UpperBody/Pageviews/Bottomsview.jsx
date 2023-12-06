import { useNavigate } from 'react-router-dom';

function Bottomsview(){
    //React Router element that helps to navigate between pages
    const navigate = useNavigate();

    const Bottomsview = () => {
    // function that navigates to bottoms page
        navigate('/bottomsview')
    };

    return(
        <div className="buttonview" style={{float: "left", padding: 10}}>
            <button href="#" onClick={Bottomsview}>Bottomsview</button>
        </div>
    );
}

export default Bottomsview;
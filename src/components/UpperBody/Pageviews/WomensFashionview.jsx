/*export default function Form(){
    function handleSubmit(e) {
        e.preventDefault();    console.log("You clicked women's fashion.");
      }

    return(        
        <form onSubmit={handleSubmit} style={{float: "left", padding: 10}}>
            <button type="submit">Women's Fashion</button>
        </form>
    );
}*/ //this is a click function. Leaving it commented out for now.

function WomensFashionview(){
    return(
        <div className="buttonview" style={{float: "left", padding: 10}}>
            <h1>Women's Fashion</h1>
        </div>
    );
}

export default WomensFashionview;

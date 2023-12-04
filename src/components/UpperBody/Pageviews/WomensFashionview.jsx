export default function Form(){
    function handleSubmit(e) {
        e.preventDefault();    console.log("You clicked women's fashion.");
      }

    return(        
        <form onSubmit={handleSubmit} style={{float: "left", padding: 10}}>
            <button type="submit">Women's Fashion</button>
        </form>
    );
}

import imagesList from "./JumpsuitsRowImages";
function JumpsuitsRow() {
    return (
        <div className="bottomrow" style={{ width: "100%", height: "10%", float: "left"}}>
            <h1 style={{fontSize: 20, fontWeight: "bold"}}>Jumpsuits</h1>
            {imagesList.map((image) =>(

                <div key={image.id} style={{backgroundColor:"#ffffff", width: 200, height: 250, float: "left", padding: 10, marginBottom: 30, borderColor: "black", borderWidth: 3, marginLeft: "1%"}}>
                    <img src={image.src} alt={image.alt}/>
                    <p style={{fontSize: 12, fontFamily:"sans-serif"}}>{image.description}</p>
                </div>

            ))}
        </div>
    );
}

export default JumpsuitsRow;
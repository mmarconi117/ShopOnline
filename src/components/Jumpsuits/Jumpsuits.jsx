import imagesList from "./JumpsuitsRowImages";
function JumpsuitsRow() {
    return (
        <div className="bottomrow" style={{ width: "100%", height: "10%", float: "left"}}>
            <h1 style={{fontSize: 20, fontWeight: "bold"}}>Jumpsuits</h1>
            {imagesList.map((image) =>(
                <img style={{ wdith: 200, height: 180, float: "left", padding: 10,}} key={image.id} src={image.src} alt={image.alt}/>
            ))}
        </div>
    );
}

export default JumpsuitsRow;
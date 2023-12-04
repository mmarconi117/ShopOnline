import imagesList from "./TopsRowImages";
function TopsRow() {
    return (
        <div className="toprow" style={{ width: "100%", height: "10%"}}>
            <h1 style={{fontSize: 20, fontWeight: "bold"}}>Tops</h1>
            {imagesList.map((image) =>(
                <img style={{ wdith: 200, height: 180, float: "left", padding: 10,}} key={image.id} src={image.src} alt={image.alt}/>
            ))}
        </div>
    );
}

export default TopsRow;
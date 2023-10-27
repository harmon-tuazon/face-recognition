import DetectionBox from "./detectionBox";

const FaceRecognition = ({imageURL, faceBoxes}) => {
    
    return (
        <div className="image-container">
            <img id="imageInput" alt="chosen image" src={imageURL} />
            {faceBoxes.map((faceBox) => {
                return <DetectionBox 
                            key={faceBox.id}
                            faceBox={faceBox}/>
            })}
        </div>
    )
}

export default FaceRecognition;
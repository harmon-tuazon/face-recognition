const FaceRecognition = ({imageURL, faceBox}) => {
    const {leftCol, topRow, rightCol, bottomRow} = faceBox;

    return (
        <div className="image-container">
            <img id="imageInput" alt="chosen image" src={imageURL} />
            <div className="faceBox" style={{top: topRow, right: rightCol, bottom: bottomRow, left:leftCol}}></div>
        </div>
    )
}

export default FaceRecognition;
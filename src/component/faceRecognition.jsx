const FaceRecognition = ({imageURL}) => {
    return (
        <div className="image-container">
          <img alt="chosen image" src={imageURL} />
        </div>
    )
}

export default FaceRecognition;
const DetectionBox = ({faceBox}) => {
    const {leftCol, topRow, rightCol, bottomRow} = faceBox;

    return (
        <>
            <div 
                className="faceBox" 
                style={{
                    top: topRow, 
                    right: rightCol, 
                    bottom: bottomRow, 
                    left:leftCol}}>
            </div>
        </>
    )
}

export default DetectionBox;
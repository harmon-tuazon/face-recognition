import { useState } from "react";
import ImageLinkForm from "../component/imageLinkForm";
import FaceRecognition from "../component/faceRecognition";

const Home = () => {
    const [imageURL, setImageURL] = useState('')
    const [linkInput, setLinkInput] = useState('')

    const handleChange = (event) => {
        setLinkInput(event.target.value)
    }

    const handleClick = (event) => {
        event.preventDefault();
        setImageURL(linkInput);

        /*this is where the API stuff happens*/
    }


    return (
        <>
            <ImageLinkForm 
                handleClick={handleClick} 
                handleChange={handleChange} 
                linkInput={linkInput}/>
            <FaceRecognition imageURL={imageURL} />
        </>
    )
}

export default Home;
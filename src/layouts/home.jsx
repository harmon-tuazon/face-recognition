import { useEffect, useState } from "react";
import ImageLinkForm from "../component/imageLinkForm";
import FaceRecognition from "../component/faceRecognition";

const Home = () => {
    const [imageURL, setImageURL] = useState('')
    const [linkInput, setLinkInput] = useState('')

    useEffect(() => {
        if (imageURL === "") return;

        const fetchClarifaiRequest = async () => {
            const response = await fetch("https://api.clarifai.com/v2/models/" + "face-detection" + "/outputs",returnClarifaiReqeuestOption(linkInput));
            const data = await response.json();
    
            try {
                console.log(data.outputs[0].data.regions[0].region_info.bounding_box)
            }
            catch(err) {
                console.log(err)
            }} 
            fetchClarifaiRequest() 
        }, [imageURL])

    const returnClarifaiReqeuestOption = (imageURL) => {
        const PAT = '4d1e9d6b2893438fbc2b71eb63005665';
        const USER_ID = 'pqouo73fxd7a';       
        const APP_ID = 'face-brain-recognition';
        const MODEL_ID = 'face-detection';
        const IMAGE_URL = imageURL;

        const raw = JSON.stringify({
            "user_app_id": {
                "user_id": USER_ID,
                "app_id": APP_ID
            },
            "inputs": [
                {
                    "data": {
                        "image": {
                            "url": IMAGE_URL
                        }
                    }
                }
            ]
        });

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Key ' + PAT
            },
            body: raw
        }
        return requestOptions;
    }

    const handleChange = (event) => {
        setLinkInput(event.target.value)
    }

    const handleClick = (event) => {
        event.preventDefault();
        setImageURL(linkInput);
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
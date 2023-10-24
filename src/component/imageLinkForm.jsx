

const ImageLinkForm = ({handleClick, handleChange, linkInput}) => {
    return (
        <form className="image-form">
          <label htmlFor="imageUrl-input">Input Image Url To Detect Face</label>

          <div className="inputForm">
            <input 
              id="imageUrl-input" 
              type="url"
              name="imageUrl-input" 
              value={linkInput}
              onChange={handleChange}/>
            <button 
              type="submit" 
              className="submitBtn"
              onClick={handleClick}>Detect</button>
          </div>
        </form>
    )
}

export default ImageLinkForm;
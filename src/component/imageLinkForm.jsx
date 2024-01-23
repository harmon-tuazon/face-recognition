

const ImageLinkForm = ({handleClick, handleChange, linkInput}) => {

   /* const handleImageSubmit = async () => {
        const userEntries = await fetch('http://localhost:3000/profile/:id/images', 
        { method: 'put',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({})                       })

    } */

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
import React from 'react'
import Img1 from './images/tahapic.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo,faPhotoFilm, faFaceGrinWide } from '@fortawesome/free-solid-svg-icons'
const Create = () => {
  return (
    <div className='create-Div'>
    <div className="image-Input">
      <div className="image"><img src={Img1} alt="pic" className='image-Ofme' /></div>
      <input type="text" readOnly className='input-Block' placeholder="What's on your mind, Taha ?"  />
      </div>

    <div className="three-Icons">
    <div className="icon-Heading"><FontAwesomeIcon icon={faVideo} className='icon1' /> Live video   </div>
    <div className="icon-Heading"> <FontAwesomeIcon icon={faPhotoFilm} className='icon2' /> Photo/gallery </div>
    <div className="icon-Heading"> <FontAwesomeIcon icon={faFaceGrinWide} className='icon3' /> Feeling/Activity </div>
    
    </div>
    
    
    
    </div>



  )
}

export default Create

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faXmark, faFaceGrinSquint, faComment, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Img1 from './images/tahapic.PNG';
import Img10 from './images/meme.PNG';
import Img11 from './images/aidp.PNG';
import Img12 from './images/aipic.PNG';
import Img13 from './images/memedp.PNG';
import Img14 from './images/meme1.PNG';

const Showpost = () => {
  const [Story, setStory] = React.useState([
    { index: 1, name: ' Taha khan', image1: Img1, image2: Img10, Time: 2, likes: 20, share: 5, comments: 2 },
    { index: 2, name: 'Ali khan', image1: Img11, image2: Img12, Time: 4, likes: 6, share: 10, comments: 10 },
    { index: 3, name: 'Asif khan', image1: Img13, image2: Img14, Time: 6, likes: 100, share: 15, comments: 1 }
  ]);

  return (
    
      <div className='show-Post'>
        {Story.map((item, index) => (<>
          <div key={index} className="portion-First">
            <img src={item.image1} alt="hello " className='postprofile-Pic' id='hovering' />
            <div className="Head-1-Time">
              <div className="Head-1"><b id='hovering'>{item.name}</b></div>
              <div className="Time">{item.Time} hours ago</div>
            </div>
            <div className="icons12">
              <FontAwesomeIcon icon={faEllipsis} className='ellips-Icon' id='hovering' />
              <FontAwesomeIcon icon={faXmark} className='Xmark-Icon' id='hovering' />
            </div>
          </div>
          <div className="portion-2nd-Image">
            <hr />
            <div className="image-portion">
              <img src={item.image2} alt="meme" className='meme-Image' />
            </div>
            <div className="reaction-like-laugh">
              <span>
                <FontAwesomeIcon color='orange' className='thumbs-Up' icon={faFaceGrinSquint} />
                <FontAwesomeIcon color='blue' className='thumbs-Up' icon={faThumbsUp} /><b className='thumbs-Up'>{item.likes}</b>
              </span>
              <span className='comment-Share'>
                <b className='thumbs-Up'>{item.comments}</b>
                <FontAwesomeIcon className='thumbs-Up' color='grey' icon={faComment} />
                <b className='thumbs-Up'>{item.share}</b>
                <FontAwesomeIcon color='grey' className='thumbs-Up' icon={faShare} />
              </span>
            </div>
            {/* <br /> */}
            <hr />
          </div>
      
        <div className="main-like-Share-Comment">
          <div className="like-Share-Comment"><FontAwesomeIcon icon={faThumbsUp} className='like' /> Like   </div>
          <div className="like-Share-Comment"> <FontAwesomeIcon icon={faComment} className='comment' /> Comment </div>
          <div className="like-Share-Comment"> <FontAwesomeIcon icon={faShare} className='share' />  Share </div>
        </div>
        <br /></>  ))}
      </div>
    
  );
}

export default Showpost;

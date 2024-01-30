import React from "react";
import Img1 from './images/tahapic.PNG'
import Img4 from './images/tahapic2.png'
import Img5 from './images/ary1.PNG'
import Img6 from './images/geo1.PNG'
import Img7 from './images/tahapic5.jpeg'
import Img8 from './images/ary.PNG'
import Img9 from './images/geo.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const Stories = () => {
    const [Story,setStory] =React.useState([
 
 { index :1 ,name: 'Taha Mehmood', image1 :Img4 , image2 : Img7 },
 { index :2 ,name: 'ARY News', image1 :Img5 , image2 :Img8 },
{ index :3 ,name: 'Geo News',image1:Img6 ,image2: Img9 }
       
    ]);
  return (
    <div className="stories-Block">
      <div className="story-No">
        <div className="story-body1">
          <img src={Img1} alt="taha" className="taha-Post" />
        </div>
        <FontAwesomeIcon icon={faCirclePlus} className="create-Icon" />
        <p className="create-Story-heading">Create story</p>
      </div>
      {Story.map((item , index) => (
      <div key={index} className="story-No">
        <div className="story-body">
          <img src={item.image1} alt="hi" className="taha-Post1" />
        </div>
         <span className="overstory1">  <img src={item.image2} alt="hi" className="overstory-Pic" /></span>
        <p className="create-Story-heading1">{item.name}</p>
      </div>
      ))}
   
    </div>
  );
};

export default Stories;
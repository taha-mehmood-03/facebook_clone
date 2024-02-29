import React, { useEffect, useState } from "react";
import Img1 from './images/tahapic.PNG'
import Img4 from './images/tahapic2.png'
import Img5 from './images/ary1.PNG'
import Img6 from './images/geo1.PNG'
import Img7 from './images/tahapic5.jpeg'
import Img8 from './images/ary.PNG'
import Img9 from './images/geo.PNG'
import Img10 from "./images/asif image.PNG"
import Img11 from "./images/iqbal saib.PNG"
import { auth } from "./Firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { useSelector} from "react-redux";

const Stories = () => {
    const imageUrl = useSelector((state) => state.image.imageUrl);
    const name = useSelector(state => state.nameChanger.name);
    const [Story, setStory] = useState([
        { index: 1, name: auth.currentUser && auth.currentUser.uid === "QOpNXnHXszRsxzxqoCKWg7P1ntC3" ? "Taha Mehmood" : "Asif Iqbal", image1: auth.currentUser && auth.currentUser.uid === "QOpNXnHXszRsxzxqoCKWg7P1ntC3" ? Img4 : Img11, image2: auth.currentUser && auth.currentUser.uid === "QOpNXnHXszRsxzxqoCKWg7P1ntC3" ? Img7 : Img10 },
        { index: 2, name: 'ARY News', image1: Img5, image2: Img8 },
        { index: 3, name: 'Geo News', image1: Img6, image2: Img9 }
    ]);

    return (
        <div className="stories-Block">
            <div className="story-No">
                <div className="story-body1">
                    <img src={imageUrl} alt="taha" className="taha-Post" />
               
                <FontAwesomeIcon icon={faCirclePlus} className="create-Icon" /> </div>
                <p className="create-Story-heading">Create story</p>
            </div>
            {Story.map((item, index) => (
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

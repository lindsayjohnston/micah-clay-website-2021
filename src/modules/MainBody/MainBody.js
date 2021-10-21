import TopSection from '../TopSection/TopSection.js';
import BodySection from  '../BodySection/BodySection.js';
import { Component } from 'react';
import promoVideo from '../../assets/videos/promoVideo.mp4';
import './MainBody.css';

const sectionInfo =[
    {
        title: "About",
        content: "This will be a bio."
    },
    {
        title: "Music",
        content: <video src={promoVideo} controls className= "sectionContent"></video>
    },
    {
        title: "Contact",
        content: "This will be contact info."
    }
]

class MainBody extends Component {
    render () {
    
        //functions?
        
        return (
            <div className="mainBody">
                <TopSection />

                


                
                {sectionInfo.map (item => (
                    <BodySection 
                        key = {item.title}
                        title = {item.title}
                        content = {item.content}
                    />
                ))}
            </div>
        )

    }
}

export default MainBody;
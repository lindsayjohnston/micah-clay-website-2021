import TopSection from '../TopSection/TopSection.js';
import BodySection from  '../BodySection/BodySection.js';
import { Component } from 'react';
import promoVideo from '../../assets/videos/promoVideo.mp4';
import './MainBody.css';

const sectionInfo =[
    {
        title: "ABOUT",
        content: <p className="sectionContent">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum, magna quis condimentum varius, lorem libero placerat magna, ut euismod sem quam congue nunc. Mauris faucibus leo ante, ac eleifend odio egestas et. Donec sed laoreet sapien. Morbi sollicitudin tempor ipsum at lacinia. Vivamus vitae orci nec tellus consectetur rhoncus. Duis sed volutpat magna, non tempus dolor. Morbi dictum lacinia sollicitudin. Duis a quam quis metus pulvinar consequat." </p>
    },
    {
        title: "MUSIC",
        content: <video src={promoVideo} controls  autoplay= "true" className= "sectionContent"></video>
    },
    {
        title: "CONTACT",
        content: "This will be contact info."
    }
]

class MainBody extends Component {
    render () {
    
        //functions?
        
        return (
            <div className="mainBody" id="top" >
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
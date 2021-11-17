import TopSection from '../TopSection/TopSection.js';
import BodySection from  '../BodySection/BodySection.js';
import { Component } from 'react';
import promoVideo from '../../assets/videos/promoVideo.mp4';
import ReactPlayer from 'react-player';
import './MainBody.css';

const sectionInfo =[
    {
        title: "MUSIC",
        content: 
        <ReactPlayer className= "sectionContent"
       url='https://micah-clay-media.s3.us-east-2.amazonaws.com/promoVideo.mp4'
       playing={true}
       loop={true}
       muted={true}
       controls={true}
       width={null}
       height={null}
     /> 
    },
    {
        title: "ABOUT",
        content: <p className="sectionContent">Micah Clay is a singer-songwriter born and raised in the high desert of the Pacific North West and has been a vagabond traveling the country writing honest music rooted in the growth and change - the kind that is inevitable for all of us to experience.
        <br></br>
        <br></br>
        Life shapes and molds us. Micah Clay hopes that his songs may bring some sort of encouragement to you along your sojourn.
        You’re not alone, you are loved and you are worthy of love.
        <br></br>
        <br></br>
        Okey, Alright, Fine.   </p>
    },
    {
        title: "CONTACT",
        content: 
        <address> <a href="mailto:musicofmicahclay@gmail.com">musicofmicahclay@gmail.com</a></address>
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
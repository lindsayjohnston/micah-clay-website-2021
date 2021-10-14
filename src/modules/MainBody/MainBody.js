import TopSection from '../TopSection/TopSection.js';
import BodySection from  '../BodySection/BodySection.js';
import { Component } from 'react';
import './MainBody.css';

const sectionInfo =[
    {
        title: "About",
        content: "This will be content."
    },
    {
        title: "Music",
        content: "This will be content."
    },
    {
        title: "Contact",
        content: "This will be content."
    }
]

class MainBody extends Component {
    render () {
    
        //functions?
        
        return (
            <div className="mainBody">
                <TopSection />
                <BodySection />
                <BodySection />
            </div>
        )

    }
}

export default MainBody;
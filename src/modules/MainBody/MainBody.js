import TopSection from '../TopSection/TopSection.js';
import BodySection from  '../BodySection/BodySection.js';
import { Component } from 'react';
import './MainBody.css';

class MainBody extends Component {
    //state
    //functions

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
import './Footer.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons' 

library.add(faFacebookSquare, faInstagramSquare, faYoutubeSquare);


const footer = (props) =>{

    return (
        <footer class="footer">
            <div class="borderDivFooter">
            <div class="socialBar">
                <a href="#facebook">
                    <FontAwesomeIcon className="socialIcon" icon={['fab', 'facebook-square']} size= "3x"/>
                </a> 

                <a href="#instagram">
                    <FontAwesomeIcon
                        className="socialIcon" icon={['fab', 'instagram-square']} size= "3x"/>
                    </a>

                <a href="#youtube">
                    <FontAwesomeIcon
                        className="socialIcon" icon={['fab', 'youtube-square']} size= "3x"/>
                </a>

            </div>  
            </div>
            
        </footer> 
    )
}

export default footer;
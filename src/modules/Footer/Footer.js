import './Footer.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube, faApple, faSpotify } from '@fortawesome/free-brands-svg-icons' 

library.add(faFacebook, faInstagram, faYoutube, faApple, faSpotify);


const footer = (props) =>{

    return (
        <footer class="footer">
            <div class="borderDivFooter">
            <div class="socialBar">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100056968582566">
                    <FontAwesomeIcon className="socialIcon" icon={['fab', 'facebook']} size= "2x"/>
                </a> 

                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/micahclayluebben/">
                    <FontAwesomeIcon
                        className="socialIcon" icon={['fab', 'instagram']} size= "2x"/>
                    </a>

                <a target="_blank" rel="noreferrer" href="https://youtube.com/channel/UCZzU2WXOIZfju-lvOUOLzzA">
                    <FontAwesomeIcon
                        className="socialIcon" icon={['fab', 'youtube']} size= "2x"/>
                </a>

                <a target="_blank" rel="noreferrer" href="https://music.apple.com/us/artist/micah-clay/1590294490">
                    <FontAwesomeIcon
                        className="socialIcon" icon={['fab', 'apple']} size= "2x"/>
                </a>

                <a target="_blank" rel="noreferrer" href="https://open.spotify.com/artist/1Fncst545DnuaMo6ITPEz5?si=4zbIbiRCRDumi6m9N_GixQ">
                    <FontAwesomeIcon
                        className="socialIcon" icon={['fab', 'spotify']} size= "2x"/>
                </a>

            </div>  
            </div>
            
        </footer> 
    )
}

export default footer;
import './TopSection.css';
import headerGraphic from '../../assets/graphics/mc-header-name-logo-800x319px.png';
import headerPhoto from '../../assets/photos/mc-bw-photo-on-deck-700x676px.png'

const topSection = (props) => {

    return (
        <div className="topSection" id="top" >
            <img className="headerGraphic" src={headerGraphic} alt="micah-clay-logo" />
            <img className="headerPhoto" src={headerPhoto} alt="micah-on-porch"/>
       </div>
    )
};

export default topSection;
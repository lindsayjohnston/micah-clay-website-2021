import './TopSection.css';
import headerGraphic from '../../assets/graphics/mc-header-name-logo-800x319px.png';
import headerGraphicMobile from '../../assets/graphics/mc-header-name-logo-mobile-400x159px.png'

const topSection = (props) => {

    return (
        <div className="topSection">
            <img className="headerGraphic" src={headerGraphic} alt="micah-clay-logo" />
            <img className="headerGraphicMobile" src={headerGraphicMobile} alt="micah-clay-logo-mobile"/>
       </div>
    )
};

export default topSection;
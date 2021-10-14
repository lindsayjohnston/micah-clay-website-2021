import './BodySection.css';
import separatorGraphic from '../../assets/graphics/mc-dbl-branches-800x145.png';

const bodySection = (props) => {

    return (
        <div className="bodySection" id={props.title}>
            <img className="separatorGraphic" src={separatorGraphic} alt= "double-branches-drawing" />
            <h1> {props.title} </h1>
           
               {props.content}
           
           
            {/* graphic
            title
            content */}
        </div>
    )
};

export default bodySection;
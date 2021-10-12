import './NavBar.css';
import logo from '../../assets/graphics/mc_skull_web_logo_106x78.png';

const navBar = (props) => (
    <nav>
        <div className= "borderDiv">
            <div className="logo"> 
                <img src= {logo} alt= "skull-logo"/>
            </div>
            <div className="sectionLabel"> <h2>About </h2> </div>
            <div className="sectionLabel"> <h2>About </h2> </div>
            <div className="sectionLabel"> <h2>About </h2> </div>
            <div className="sectionLabel"> <h2>About </h2> </div>
           

        </div>
    </nav>
);

export default navBar;


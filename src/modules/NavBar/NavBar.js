import './NavBar.css';
import logo from '../../assets/graphics/mc_skull_web_logo_106x78.png';

const navBar = (props) => (
    <nav>
        <div className= "borderDiv" id="top" >
            <div className="logo"> 
                <a href="#top">
                    <img src= {logo} alt= "skull-logo"/>
                </a> 
            </div>
            <div className="sectionLabel"> <a href="#music"><h2>Music </h2></a> </div>
            <div className="sectionLabel"> <a href="#merch"><h2>Merch </h2></a> </div>
            <div className="sectionLabel"> <a href="#contact"><h2>Contact </h2></a> </div>

        </div>
    </nav>
);

export default navBar;


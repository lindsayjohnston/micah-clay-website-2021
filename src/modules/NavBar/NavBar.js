import './NavBar.css';
import logo from '../../assets/graphics/mc_skull_web_logo_106x78.png';

const navBar = (props) => {

    //Future update: dynamically populate menu titles and anchor links

return(
    <nav >
        <div className= "borderDiv" >
            <div className="logo"> 
                <a href="#top">
                    <img src= {logo} alt= "skull-logo"/>
                </a> 
            </div>
            <div className="sectionLabel"> <a href="#Music"><h2>Music </h2></a> </div>
            <div className="sectionLabel"> <a href="#About"><h2>About </h2></a> </div>
            <div className="sectionLabel"> <a href="#Contact"><h2>Contact </h2></a> </div>

        </div>
    </nav>

)
    
};

export default navBar;


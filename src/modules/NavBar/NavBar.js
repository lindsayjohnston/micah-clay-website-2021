import './NavBar.css';

const navBar = (props) => {

    //Future update: dynamically populate menu titles and anchor links

return(
    <nav >
        <div className= "borderDivNav" >
            <div className="sectionLabel"> 
                <a href="#top">
                <h2>Top</h2>
                </a> 
            </div>
            <div className="sectionLabel"> <a href="#MUSIC"><h2>Music </h2></a> </div>
            <div className="sectionLabel"> <a href="#ABOUT"><h2>About </h2></a> </div>
            <div className="sectionLabel"> <a href="#CONTACT"><h2>Contact </h2></a> </div>

        </div>
    </nav>

)
    
};

export default navBar;


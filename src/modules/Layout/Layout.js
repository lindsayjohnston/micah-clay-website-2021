import './Layout.css';
import { Component } from 'react';
import NavBar from '../NavBar/NavBar.js';
// import MainBody from '../MainBody/MainbBody.js';
// import Footer from '../Footer/Footer.js';

class Layout extends Component {
    
    render (){
        return (
            <div class= "layout">
                <NavBar/>
                
                {/* <MainBody />
                <MobileNav />
                <MobileMain/>
                <MobileFooter/>
                <Footer /> */}
            </div>

        )
    }
    
   
    };

export default Layout;
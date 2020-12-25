// Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
import React from "react";
var date= new Date();
var currentYear= date.getFullYear();
function Footer(){
    return(
        <footer>
            <p>copyright@ {currentYear}</p>
        </footer>
        
    )
}
export default Footer;
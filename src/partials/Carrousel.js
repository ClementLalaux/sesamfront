import React from "react";
import "../assets/style/partials/carrousel.css";

function Carrousel(){
    return(
        <div className="carrousel">
            <div className="carrousel_text">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis veniam laudantium itaque repudiandae officia sint laborum ut enim impedit? Optio excepturi magni porro culpa aliquid! Velit accusamus praesentium esse nesciunt.</p>
            </div>
            <div className="left">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 29 24" fill="none" >
<path d="M0.660423 10.8796C0.0416527 11.4984 0.0416527 12.5016 0.660423 13.1204L10.7439 23.2038C11.3626 23.8226 12.3659 23.8226 12.9846 23.2038C13.6034 22.5851 13.6034 21.5818 12.9846 20.9631L4.02157 12L12.9846 3.03693C13.6034 2.41816 13.6034 1.41494 12.9846 0.796168C12.3659 0.177398 11.3626 0.177398 10.7439 0.796168L0.660423 10.8796ZM28.2207 10.4155H1.78081V13.5845H28.2207V10.4155Z" fill="black"/></svg>
            </div>
            <div className="right">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 29 24" fill="none">
<path d="M28.3411 13.1204C28.9599 12.5016 28.9599 11.4984 28.3411 10.8796L18.2576 0.796168C17.6389 0.177398 16.6356 0.177398 16.0169 0.796168C15.3981 1.41494 15.3981 2.41816 16.0169 3.03693L24.9799 12L16.0169 20.9631C15.3981 21.5818 15.3981 22.5851 16.0169 23.2038C16.6356 23.8226 17.6389 23.8226 18.2576 23.2038L28.3411 13.1204ZM27.2207 10.4155H0.780806V13.5845H27.2207V10.4155Z" fill="black"/></svg>
            </div>          
        </div>
    )
}

export default Carrousel;
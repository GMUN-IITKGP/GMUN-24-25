import React from "react";
// import ReactDOM from 'react-dom/client';
// import Secretariat from "./Secretariat";
import "./Secretariat.css";
// import Colors from "../../Colors";
// import "../../colors.css";
// import Vidhi from "./imgSecretariat/vidhi.jpeg"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

function Cardsecretariat(props) {
  return (
    <>
           
      <div className="card-wrapper">
        <div className="card-secretariat">
          <div className="imgBx-secretariat">
            <img src={props.imgsrc} alt="" className="img-secretariat" />
          </div>
          <div className="content-secretariat">
            <div className="details-secretariat">
              <h3>
                {props.sname} <br /> <span>{props.title}</span>
             </h3>
              <div className="data-secretariat">
                
                  <a href={props.fblink}>
                    <FaFacebookF className="facebook-icons" />
                  </a>{" "}
              
              
                  <a href={props.instalink}>
                    <FaInstagram className="instagram-icons" />
                  </a>
                
                  <a href={props.linkedInlink}>
                    <FaLinkedinIn className="linkedIn-icons" />
                  </a>{" "}
               
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cardsecretariat;

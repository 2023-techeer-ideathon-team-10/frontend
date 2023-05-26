import React from "react";
import { useNavigate } from "react-router-dom";
import './footer.scss'


export default function Footer(){


    return(
      <div className="navlayout">
        <div className="space_between">
          <div className="rightdiv">
            <div className="navdiv">
              <div className="navbutton">
                물건치워
              </div>
            </div>
          </div>
          <div className="leftdiv">
            <div className="navbutton">로그인</div>
          </div>
        </div>
      </div>
    )
}
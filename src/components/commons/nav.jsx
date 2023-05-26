// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
import './nav.scss'


export default function Nav(){

  const navigator = useNavigate();

  const gotoMain = () =>{
    navigator('/main')
  }
  const gotoList = () =>{
    navigator('/list')
  }
    return(
      <div className="navlayout">
        <div className="space_between">
          <div className="rightdiv">
            <div className="navdiv">
              <div className="navbutton" onClick={gotoMain}>
                물건치워
              </div>
            </div>
          </div>
          <div className="leftdiv">
            <div className="navbutton" onClick={gotoList}>목록</div>
          </div>
        </div>
      </div>
    )
}
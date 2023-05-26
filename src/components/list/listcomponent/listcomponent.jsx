import React, { useState } from "react";
import './listcomponents.scss'
import axios from 'axios'


const ListComponent = () => {

  // let lostGetData;
  // async function GetLost(){
  //   axios.get(`localhost:8080/api/v1/get`)
  //   .then(response=>{
  //     lostGetdata = response.data
  //     console.log(response.data)
  //   })
  
  //   return response.data
  // }

  // const lostGetdata = GetLost();

  const lostGetDataDummy = [
    {
      index:1,
      table:'3',
      context:'hello'
    },
    {
      index:2,
      table:'3',
      context:'hello'
    },
    {
      index:2,
      table:'3',
      context:'hello'
    },
    {
      index:2,
      table:'3',
      context:'hello'
    },
    {
      index:2,
      table:'3',
      context:'hello'
    },
    {
      index:2,
      table:'3',
      context:'hello'
    },
    {
      index:2,
      table:'3',
      context:'hello'
    },
    {
      index:2,
      table:'3',
      context:'hello'
    },
    {
      index:2,
      table:'3',
      context:'hello'
    },
    {
      index:2,
      table:'3',
      context:'hello'
    },
    {
      index:2,
      table:'3',
      context:'hello'
    },
    {
      index:2,
      table:'3',
      context:'hello'
    },
    {
      index:2,
      table:'3',
      context:'hello'
    },
    {
      index:2,
      table:'3',
      context:'hello'
    },
    

  ]

  return(
      <div className="listComponentLayout">
        {lostGetDataDummy?.map((data) =>{
          return(
            <div className="reportmain" key={data.index}>
              <div className="reportlayout">
                Index:{data.index}
              </div>
            </div>
          )
        })}
      </div>
  )
}
export default ListComponent
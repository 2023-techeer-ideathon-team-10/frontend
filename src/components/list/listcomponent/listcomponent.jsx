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

const [lostGetDataDummy, setLostGetDataDummy] = useState([
    {
      index: 1,
      table: 'A4',
      time: '2023년 5월 20일',
      item: "노트북",
      context: 'hello'
    },
    {
      index: 2,
      table: 'E2',
      time: '2023년 5월 22일',
      item: "전공책",
      context: 'hello'
    },
    {
      index:3,
      table:'B2',
      time:'2023년 5월 24일',
      item:"가방",
      context:'hello'
    },

  ]);

  const handleDelete = (index) => {
    const updatedData = lostGetDataDummy.filter(item => item.index !== index);
    setLostGetDataDummy(updatedData);
  };

  return(
      <div className="listComponentLayout">
        {lostGetDataDummy?.map((data) =>{
          return(
            <div className="reportmain" key={data.index}>
              <div className="reportlayout">
                <div>
                  {data.index}.
                </div>
                <div>
                  위치:{data.table}
                </div>
                <div>
                  시간:{data.time}
                </div>
                <div>
                  물건:{data.item}
                </div>
                <div onClick={() => handleDelete(data.index)}>
                  삭제
                </div>
              </div>
            </div>
          )
        })}
      </div>
  )
}
export default ListComponent
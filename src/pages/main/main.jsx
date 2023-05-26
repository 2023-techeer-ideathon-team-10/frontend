// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './main.css';
import Modal from '../../components/Modal/Modal';

const MainPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCellClick = () => {
        setIsModalOpen(true);
    };
    
    const handleModalClose = () => {
        setIsModalOpen(false);
    };



    const [lostGetDataDummy,setLostGetDataDummy] = useState([
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
    ])


    return (
        <div className="mainlayout">
            <div className="title">신고 자리 확인</div>
            <div className="table-container">S
                <table className="table">
                <tbody>
                    <tr>
                    <th onClick={handleCellClick}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /><br /><br /></th>
                    <th onClick={handleCellClick}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /><br /><br /></th>
                    <th onClick={handleCellClick}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /><br /><br /></th>
                    </tr>
                    <tr>
                    <td onClick={handleCellClick}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /><br /><br /></td>
                    <td onClick={handleCellClick}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /><br /><br /></td>
                    <td onClick={handleCellClick}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /><br /><br /></td>
                    </tr>
                </tbody>
                </table>
            <div className="table-spacing" />
                <table className="table">
                <tbody>
                    <tr>
                    <th onClick={handleCellClick}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /><br /><br /></th>
                    <th onClick={handleCellClick} className="red-cell">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /><br /><br /></th>
                    <th onClick={handleCellClick}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /><br /><br /></th>
                    </tr>
                    <tr>
                    <td onClick={handleCellClick}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /><br /><br /></td>
                    <td onClick={handleCellClick}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /><br /><br /></td>
                    <td onClick={handleCellClick}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /><br /><br /></td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div className="table-container">
                <table className="table">
                <tbody>
                    <tr>
                    <th onClick={handleCellClick}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /><br /><br /></th>
                    <th onClick={handleCellClick}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /><br /><br /></th>
                    <th onClick={handleCellClick}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /><br /><br /></th>
                    </tr>
                    <tr>
                    <td onClick={handleCellClick}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /><br /><br /></td>
                    <td onClick={handleCellClick}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /><br /><br /></td>
                    <td onClick={handleCellClick}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /><br /><br /></td>
                    </tr>
                </tbody>
                </table>
            <div className="table-spacing" />
                <table className="table">
                <tbody>
                    <tr>
                    <th onClick={handleCellClick} className="red-cell">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /><br /><br /></th>
                    <th onClick={handleCellClick}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /><br /><br /></th>
                    <th onClick={handleCellClick}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /><br /><br /></th>
                    </tr>
                    <tr>
                    <td onClick={handleCellClick}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /><br /><br /></td>
                    <td onClick={handleCellClick}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /><br /><br /></td>
                    <td onClick={handleCellClick}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /><br /><br /></td>
                    </tr>
                </tbody>
                </table>
            </div>
            {isModalOpen && <Modal handleClose={handleModalClose} />}
        </div>
    );
};

export default MainPage;

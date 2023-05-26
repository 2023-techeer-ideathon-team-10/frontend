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

    return (
        <div className="mainlayout">
            <div className="title">신고 자리 확인</div>
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

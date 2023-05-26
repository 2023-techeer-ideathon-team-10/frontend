import React,{} from 'react';
import './Modal.css';

const Modal = ({ handleClose }) => {
  const handleCloseClick = () => {
    handleClose(); // handleClose 함수 호출하여 모달 닫기
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <img src="https://i.postimg.cc/T1CrrYPL/e66a0a014c9744105591212948cca6cc.jpg"></img>
        <br/>
        <p>신고 내용입니다. 몇시부터 몇시까지 자리를 비웠는데 짐을 두고 나타날 생각을 하지 않은 내용이 있겠죠? 위에 사진은 예시를 위해 아무렇게나 구글에서 퍼왔지만 제 책상보다 깔끔한 것 같기도 하고 제가 좀 더 깔끔하게 살아왔던 것 같기도 하네요</p>
        <br/>
        <span className="close" onClick={handleCloseClick}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default Modal;

import React from "react";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => (
  <React.Fragment>
    <div
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
      className="Modal"
    >
      {props.children}
    </div>
    <Backdrop close={props.modalClosed} show={props.show} />
  </React.Fragment>
);
export default Modal;

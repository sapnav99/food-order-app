import React from 'react'
import classes from './Modal.module.css'
import { Fragment } from 'react'
import  ReactDOM from 'react-dom'
const Backdrop=props=>{
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay=props=>{
    return (
        <div className={classes.modal}>
          <div className={classes.content}>
            {props.children}
          </div>
        </div>
)}
const portalElement= document.getElementById('overlays');


export default function Modal(props) {
  return <Fragment>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement )}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    {/*<Backdrop/>
    <ModalOverlay>{props.children}</ModalOverlay>*/}
  </Fragment>
  
}

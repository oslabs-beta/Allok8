import React from 'react';

const Modal = ({ children, isShown, setIsShown }) => { 

    const content = isShown && (
           <div className="overlay">
              <div className="modal">
              <p className="modal-close" type="button" onClick={() => setIsShown(false)}>
                  X
               </p>
                <div className="modal-body">{children}</div>
              </div>
           </div>
          )
        
          return content
}


export default Modal
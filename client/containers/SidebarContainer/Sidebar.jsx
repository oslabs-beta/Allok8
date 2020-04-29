 import React, { useState } from "react";
 import Modal from './Modal.jsx';

function sideBar() {
    const [isShown, setIsShown] = useState(false);   
    
    const text1 = "$(kubectl config view --minify -o jsonpath='{.clusters[0].cluster.server}')";
    const text2 = "$(kubectl get secret $(kubectl get serviceaccount default -o jsonpath='{.secrets[0].name}') -o jsonpath='{.data.token}' | base64 --decode )";
    const text3 = "$(kubectl get secret $(kubectl get serviceaccount default -o jsonpath='{.secrets[0].name}') -o jsonpath='{.data.token}')";

    return (
        <div className="sidebar">
            <p id="get" onClick={() => setIsShown(true)}>GET API / TOKEN</p>
            <div className="code">
            <Modal isShown={isShown} setIsShown={setIsShown}> 
          <p id="copies">API</p> 
          <p id="texts">{text1}</p>

          <p id="copies">Token for Unix</p>
          <p id="texts">{text2}</p>
       
          <p id="copies">Token for Windows</p>
          <p id="texts">{text3}</p>
         </Modal> 
         </div>
        </div>
       );
} 

export default sideBar 
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class LoginInst extends Component {
  render() {
    const text1 = "APISERVER=$(kubectl config view --minify -o jsonpath='{.clusters[0].cluster.server}')";
    const text2 = "TOKEN=$(kubectl get secret $(kubectl get serviceaccount default -o jsonpath='{.secrets[0].name}') -o jsonpath='{.data.token}' | base64 --decode )";
    const text3 = '!wget https://github.com/oslabs-beta/Allok8/blob/dev/fabric8-rbac.yaml && kubectl apply -f fabric8-rbac.yaml';
    return (
      <div className="textBox">
        <h3>To Get API</h3>
        <pre style={{ overflowX: 'scroll' }}>{text1}</pre>
        <br />
        <h3>To Get Token</h3>
        <pre style={{ overflowX: 'scroll' }}>{text2}</pre>
        <br />
        <h3>Apply This File</h3>
        <pre style={{ overflowX: 'scroll' }}>{text3}</pre>
      </div>
    );
  }
}

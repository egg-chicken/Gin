import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


export default () => {
    return (
      <div className="App">
        <div className="app-shadow">
          <div className="app-title-container">
            <h1 className="app-title">
              <big>不朽</big>に踊る<br/><big>銀</big>の<big>街</big>
            </h1>
          </div>
          <div className="app-guide-container">
            <p>画面をタッチしてください</p>
          </div>
        </div>
      </div>
    );
}

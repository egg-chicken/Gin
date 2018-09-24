import React, { Component } from 'react';
import './Title.css';
import Page from './Page';

export default ({onClick}) => {
    return (
      <Page onClick={onClick}>
        <div className="TitleTextContainer">
          <h1 className="TitleText">
            <big>不朽</big>に踊る<br/><big>銀</big>の<big>街</big>
          </h1>
        </div>
        <div className="TitleGuideContainer">
          <p>画面をタッチしてください</p>
        </div>
      </Page>
    );
}

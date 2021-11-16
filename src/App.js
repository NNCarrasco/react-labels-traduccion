import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import getLabel from "./i18nProvider/getLabel";
import TestNahue from "./test-component/test-component.js"


import { I18nPropvider, LOCALES } from './i18nProvider';

function App() {
  const [locale, setLocale] = useState(LOCALES.SPANISH);
  return (
    <I18nPropvider locale={locale}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          > */}
            {/* {getLabel('test-nahue')} */}
          {/* </a> */}

          <TestNahue />


          <button onClick={() => setLocale(LOCALES.ENGLISH)}>Change to english</button>
          <button onClick={() => setLocale(LOCALES.SPANISH)}>Change to Spanish</button>
        </header>
      </div>
    </I18nPropvider>
  );
}

export default App;

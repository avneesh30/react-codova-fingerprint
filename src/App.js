import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  successCallback = (result) => {
    alert("successCallback(): " + JSON.stringify(result));
    if (result.withFingerprint) {
      alert("Successfully encrypted credentials.");
      alert("Encrypted credentials: " + result.token);
    } else if (result.withBackup) {
      alert("Authenticated with backup password");
    }
  }


  errorCallback = (error) => {
    if (error === window.FingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
      alert("FingerprintAuth Dialog Cancelled!");
    } else {
      alert("FingerprintAuth Error: " + error);
    }
  }
  componentWillMount() {
    let me = this;
    if (window.FingerprintAuth) {
      window.FingerprintAuth.isAvailable(isAvailableSuccess, isAvailableError);
      function isAvailableSuccess(result) {
        alert(JSON.stringify(result));
        if (result.isAvailable) {
          var encryptConfig = {
            clientId: "myAppName",
            username: "currentUser",
            password: "currentUserPassword"
          };


          window.FingerprintAuth.encrypt(encryptConfig, me.successCallback, me.errorCallback);

        }
      }

      function isAvailableError(message) {
        alert("isAvailableError(): " + message);
      }
    }

  }



  render() {
    return (
      <div>
        <p>
          React + cordova
        </p>
        <p>Finger Print Login</p>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

import './App.css';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  return (
    <div>
      <Alert alert={alert} />
      <div className="container my-3" >
        <TextForm heading="Enter the text below." showAlert={showAlert} />
      </div>
    </div>
  );
}

export default App;

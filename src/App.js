import React from 'react';
import './css/App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css' // import bootstrap 
import TestComp from './components/TestComp'
import PropTypeTest from './components/PropTypeTest'
import AccordianTest from './components/AccordianTest'



function App() {
  return (
    <div>
      <button type="button" class="btn btn-primary">Primary</button>
      {/* <PropTypeTest header={true} >
        <p>Paragraph Children</p>
      </PropTypeTest> */}
      <AccordianTest/>
    </div>
  );
}

export default App;

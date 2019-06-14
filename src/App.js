import React from 'react';
import './App.css';

function App() {
  return (

    <div>
      <h1>JAVASCRIPT</h1>
      <div className="card card--question">
        <h3 className="card__question">What's the difference between Null & Undefined?</h3>
        <div className="card__answer-wrapper">
          <p className="card__answer">Undefined is applied to a variable when it is not assigned any value.</p>
          <div className="card__example-wrapper">
            <p className="card__example-title">For example:</p>
            <code className="card__example">
              <pre>
                var x;
                console.log(x); //Undefined
              </pre>
            </code>
          </div>
        </div>
        {/* <div className="card__answer-wrapper">
          <p className="card__answer">Null is a value that you assign to a variable that means "Nothing".</p>
          <div className="card__example-wrapper">
            <p className="card__example-title">For example:</p>
            <code className="card__example">
              <pre>
                var x = null;
                console.log(x); //null
            </pre>
            </code>
          </div>
        </div> */}
      </div >
    </div >
  );
}

export default App;

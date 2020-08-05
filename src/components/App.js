import React from 'react';
import '../css/App.scss';
import Timer from './Timer'

function App() {
  return (
    <div className="App">
      
      <main>
        <Timer initialTime={(50000)} isPause={false}></Timer>
        <section className="Timer"><div className="Timer">00:00:00</div></section>
        <section className="List">
          <section className="List__input"></section>
          <section className="List__body"></section>
        </section>
      </main>
      <div className="Timer__controls"></div>

    </div>
  );
}

export default App;

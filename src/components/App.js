import React from 'react';
import '../css/App.scss';
import Timer from './Timer';
import ControlBar from './ControlBar';
import AddForm from './AddForm';
import ModalMenu from './ModalMenu';
import List from './List';

function App() {
  return (
    <div className="App">
      <main>
        <ModalMenu></ModalMenu>
        <Timer initialTime={(10000)}></Timer>
        <AddForm></AddForm>
        <List></List>
      </main>
      <ControlBar></ControlBar>
    </div>
  );
}

export default App;

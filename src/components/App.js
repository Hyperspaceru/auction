import React from 'react';
import '../css/App.scss';
import Timer from './Timer';
import ControlBar from './ControlBar';
import AddForm from './AddForm';
import ModalMenu from './ModalMenu';
import List from './List';
import ModalWinner from './ModalWinner';
import BuyoutItem from './BuyoutItem';

function App() {
  return (
    <div className="App">
      <main>
        <ModalWinner></ModalWinner>
        <ModalMenu></ModalMenu>
        <Timer initialTime={(20000)}></Timer>
        <BuyoutItem></BuyoutItem>
        <AddForm></AddForm>
        <List></List>
      </main>
      <ControlBar></ControlBar>
    </div>
  );
}

export default App;

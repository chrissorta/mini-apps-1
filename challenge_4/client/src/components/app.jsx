import React from 'react';
import BoardPiece from './BoardPiece.jsx';


class App extends React.Component {
    constructor(props){
      super(props);
      this.state= {};
    }






    render() {
      return (
        <div>
          <h1>Connect 4 Board</h1>
          {/* {Array.apply(null,{length: 10}).map((e,i) => (

            Array.apply(null,{length: 10}).map((e,i) => (
              <BoardPiece />
            ))
            <br/>
          ))} */}
          <BoardPiece /><BoardPiece /><BoardPiece /><BoardPiece /><BoardPiece /><BoardPiece /><BoardPiece /><br/>
          <BoardPiece /><BoardPiece /><BoardPiece /><BoardPiece /><BoardPiece /><BoardPiece /><BoardPiece /><br/>
          <BoardPiece /><BoardPiece /><BoardPiece /><BoardPiece /><BoardPiece /><BoardPiece /><BoardPiece /><br/>
          <BoardPiece /><BoardPiece /><BoardPiece /><BoardPiece /><BoardPiece /><BoardPiece /><BoardPiece /><br/>
          <BoardPiece /><BoardPiece /><BoardPiece /><BoardPiece /><BoardPiece /><BoardPiece /><BoardPiece /><br/>
          <BoardPiece /><BoardPiece /><BoardPiece /><BoardPiece /><BoardPiece /><BoardPiece /><BoardPiece /><br/>
        {/* {for(let i = 0; i < 7; i++){
          () => <BoardPiece />
        }} */}
        {/* <div><BoardPiece /><BoardPiece /><BoardPiece /></div> */}
        </div>
      )
    }

}

export default App;